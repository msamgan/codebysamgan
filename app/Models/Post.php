<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Wink\WinkPost;

class Post extends WinkPost
{
    use HasFactory;

    public static function userPosts($q = null): Collection
    {
        $query = self::query()->where('author_id', AUTHOR_ID)
            ->where('published', true)
            ->with('tags');

        if ($q) {
            $query->where('title', 'like', "%{$q}%")
                ->orWhere('body', 'like', "%{$q}%")
                ->orWhere('excerpt', 'like', "%{$q}%");
        }

        return $query->orderByDesc('publish_date')->get();
    }

    public static function relatedPosts($post): Collection
    {
        $query = self::query()->where('author_id', AUTHOR_ID)
            ->where('published', true)
            ->with('tags')
            ->where('id', '!=', $post->id)
            ->whereHas('tags', function ($query) use ($post) {
                $query->whereIn('id', $post->tags->pluck('id'));
            });

        return $query->orderByDesc('publish_date')->get();
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
