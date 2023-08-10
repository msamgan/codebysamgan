<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PostController::class, 'index'])->name('welcome');
Route::get('/introduction', [PostController::class, 'introduction'])->name('introduction');
Route::get('/feed', [PostController::class, 'feed'])->name('feed');

Route::get('/{post}', [PostController::class, 'post'])->name('post');
Route::get('/tag/{tag}', [PostController::class, 'tag'])->name('tag');

Route::get('/page/list', [PageController::class, 'pageList'])->name('page.list');
Route::get('/page/tags', [PageController::class, 'pageTags'])->name('page.tags');

Route::get('/page/{page}', [PageController::class, 'page'])->name('page');




/*Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';*/
