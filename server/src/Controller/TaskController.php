<?php

namespace App\Controller;

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
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TaskController.php',
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show($id)
    {

    }

    /**
     * @Route("/", name="create", methods={"POST"})
     */
    public function create(Request $request)
    {

    }

    /**
     * @Route("/{id}", name="update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete($id)
    {

    }
}
