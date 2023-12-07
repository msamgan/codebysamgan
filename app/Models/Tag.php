<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Jenssegers\Agent\Agent;
use Wink\WinkTag;

class Tag extends WinkTag
{
    use HasFactory;

    public static function allTags(): Collection|array
    {
        return self::query()->withCount('posts')->get();
    }

    public static function topTags(): Collection|array
    {
        $limit = (new Agent())->isMobile() ? 5 : 10;

        return self::query()->withCount('posts')->orderBy('posts_count', 'desc')->limit($limit)->get();
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'wink_posts_tags', 'tag_id', 'post_id')
            ->where('published', true)
            ->orderBy('publish_date', 'desc');
    }
}
