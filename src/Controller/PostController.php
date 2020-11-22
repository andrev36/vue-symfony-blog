<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;

class PostController extends AbstractController
{
 /**
  * @Route("/api/post", name="create_post")
  */
 public function createPost(): Response
 {
  // you can fetch the EntityManager via $this->getDoctrine()
  // or you can add an argument to the action: createPost(EntityManagerInterface $entityManager)
  $entityManager = $this->getDoctrine()->getManager();

  $post = new Post();
  $post->setTitle('First post title');
  $post->setBody('Lorem ipsum dolor');
  $post->setSlug('first-post-slug');
  $post->setComment('First blog post comment');
  $post->setTimestamp(new \DateTime("now"));

  // tell Doctrine you want to (eventually) save the Post (no queries yet)
  $entityManager->persist($post);

  // actually executes the queries (i.e. the INSERT query)
  $entityManager->flush();

  return new Response('Saved new product with id ' . $post->getId());
 }
 /**
  * @Route("/post/{id}", name="post_show")
  */
 public function show(int $id): Response
 {
  $post = $this->getDoctrine()
   ->getRepository(Post::class)
   ->find($id);

  if (!$post) {
   throw $this->createNotFoundException(
    'No post found for id ' . $id
   );
  }

  return new Response('Check out this great product: ' . $post->getTitle());

  // or render a template
  // in the template, print things with {{ product.name }}
  // return $this->render('product/show.html.twig',
  // ['product' => $product]);
 }
}
