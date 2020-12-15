<?php

namespace App\Controller;

use App\Entity\Task;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/tasks", name="task_")
 */
class TaskController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(): Response
    {
        $tasks = $this->getDoctrine()->getRepository(Task::class)->findAll();

        return $this->json(compact('tasks'));
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show($id)
    {
        $task = $this->getDoctrine()->getRepository(Task::class)->find($id);

        return $this->json(compact('task'));
    }

    /**
     * @Route("/", name="create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $data = $request->request->all();
        
        $task = new Task();
        $task->setName($data['name']);
        $task->setDescription($data['description']);
        $task->setStatus(boolval($data['status']) ? true : false);

        $manager = $this->getDoctrine()->getManager();

        $manager->persist($task);
        $manager->flush();

        return $this->json(['message' => 'Tarefa cadastrada com sucesso!']);
    }

    /**
     * @Route("/{id}", name="update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, $id)
    {
        $data = $request->request->all();

        $doctrine = $this->getDoctrine();

        $task = $doctrine->getRepository(Task::class)->find($id);

        if($request->request->has('name')) {
            $task->setName($data['name']);
        }

        if($request->request->has('description')) {
            $task->setDescription($data['description']);
        }

        if($request->request->has('status')) {
            $task->setStatus($data['status']);
        }

        $manager = $doctrine->getManager();
        $manager->flush();

        return $this->json(['Message' => 'Tarefa Atualizado com Sucesso!']);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete($id)
    {

    }
}
