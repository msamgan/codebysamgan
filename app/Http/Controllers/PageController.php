<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Collection;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function pageList(): Collection
    {
        return Page::userPages();
    }

    public function postList(): Collection
    {
        return Post::query()->where('author_id', AUTHOR_ID)->with('tags')->orderByDesc('publish_date')->get();
    }

    public function page(Page $page): Response
    {
        return Inertia::render('Page', [
            'page' => $page,
        ]);
    }

    public function pageTags(): Response
    {
        return Inertia::render('PageTags', [
            'tags' => Tag::allTags(),
        ]);
    }

    public function topTags(): Collection|array
    {
        return Tag::topTags();
    }
}
