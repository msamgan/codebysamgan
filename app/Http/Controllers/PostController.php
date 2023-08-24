<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Welcome')->with([
                'posts' => Post::userPosts(request()->query('q')),
                'q' => request()->query('q'),
            ]
        );
    }

    public function post(Post $post): Response
    {
        $post->load('author');
        $post->load('tags');

        $post->body = $post->content;

        $relatedPosts = Post::relatedPosts($post);

        return Inertia::render('Post')->with([
            'post' => $post,
            'relatedPosts' => $relatedPosts,
        ]);
    }

    public function introduction(): Model|Builder|null
    {
        return Author::userIntroduction();
    }

    public function tag(Tag $tag, Request $request): Response
    {
        $tag->load('posts');

        $tag->posts->load('author');
        $tag->posts->load('tags');

        $posts = $tag->posts;

        if ($request->query('q')) {
            $posts = $posts->filter(function ($post) use ($request) {
                return str_contains(strtolower($post->title), strtolower($request->query('q')));
            });
        }

        $posts = $posts->values();

        return Inertia::render('Tag')->with([
            'tag' => $tag,
            'posts' => $posts,
            'q' => $request->query('q'),
        ]);
    }

    public function feed(): \Illuminate\Http\Response
    {
        $posts = Post::userPosts();

        return response()->view('feed', compact('posts'))->header('Content-Type', 'text/xml');
    }

    public function sitemap()
    {
        $posts = Post::userPosts();

        return response()->view('sitemap', compact('posts'))->header('Content-Type', 'text/xml');
    }
}
