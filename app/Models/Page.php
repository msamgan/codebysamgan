<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Wink\WinkPage;

class Page extends WinkPage
{
    use HasFactory;

    public static function userPages(): Collection
    {
        return self::all();
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
