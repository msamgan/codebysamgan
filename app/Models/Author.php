<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Wink\WinkAuthor;

class Author extends WinkAuthor
{
    use HasFactory;

    public static function userIntroduction(): Model|Builder|null
    {
        return self::query()->where('id', AUTHOR_ID)
            ->first();
    }
}
