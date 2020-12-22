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
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        return $this->render('tasks/index.html.twig');
    }

    /**
     * @Route("/index", name="index", methods={"GET"})
     */
    public function index(): Response
    {
        $tasks = $this->getDoctrine()->getRepository(Task::class)->findAll();

        return $this->json(compact('tasks'));
    }

    /**
     * @Route("/show/{id}", name="show", methods={"GET"})
     */
    public function show($id)
    {
        $task = $this->getDoctrine()->getRepository(Task::class)->find($id);

        return $this->json(compact('task'));
    }

    /**
     * @Route("/create", name="create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $data = json_decode($request->getContent());

        $task = new Task();
        $task->setName($data->name);
        $task->setDescription($data->description);
        $task->setStatus($data->status);

        $manager = $this->getDoctrine()->getManager();

        $manager->persist($task);
        $manager->flush();

        return $this->json(['message' => 'Tarefa cadastrada com sucesso!']);
    }

    /**
     * @Route("/update/{id}", name="update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, $id)
    {
        $data = json_decode($request->getContent());

        $doctrine = $this->getDoctrine();

        $task = $doctrine->getRepository(Task::class)->find($data->task->id);

        if($data->task->name) {
            $task->setName($data->task->name);
        }

        if($data->task->description) {
            $task->setDescription($data->task->description);
        }

        if($data->task->status) {
            $task->setStatus($data->task->status);
        }

        $manager = $doctrine->getManager();
        $manager->flush();

        return $this->json(['message' => 'Tarefa Atualizado com Sucesso!']);
    }

    /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
    public function delete($id)
    {
        $doctrine = $this->getDoctrine();

        $task = $doctrine->getRepository(Task::class)->find($id);

        $manager = $doctrine->getManager();
        $manager->remove($task);
        $manager->flush();

        return $this->json(['message' => 'Tarefa Removida com Sucesso!']);
    }
}
