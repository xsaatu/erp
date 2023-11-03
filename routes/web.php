<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MachineController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [ProductController::class, 'login']);
Route::post('/product', [ProductController::class, 'store']);
Route::get('/monitor', [ProductController::class, 'index'])->middleware(['auth', 'verified'])->name('monitor');
Route::get('/product', [ProductController::class, 'show'])->middleware(['auth', 'verified'])->name('my.product');
Route::get('/product/edit', [ProductController::class, 'edit'], [MachineContorller::class, 'index'])->middleware(['auth', 'verified'])->name('edit.product');
Route::post('/product/update', [ProductController::class, 'update'])->middleware(['auth', 'verified'])->name('update.product');
Route::get('/product/search', [ProductController::class, 'search'])->middleware(['auth', 'verified'])->name('my.product');
Route::get('/product/view', [ProductController::class, 'view'])->middleware(['auth', 'verified'])->name('view.product');
Route::get('/product/productlistpdf', [ProductController::class, 'productListPDF'], [ProductController::class, 'search'])->name('downloadlist.product');
Route::get('/product/productpdf', [ProductController::class, 'productPDF'])->name('download.product');
Route::get('/dashboard', [ProductController::class, 'index2'],[MachineContorller::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/machine', [ProductController::class, 'select']);

Route::post('/machine', [MachineController::class, 'store']);
Route::post('/product/delete', [ProductController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.product');

// Route::get('/product', [ProductController::class, 'index']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
//     Route::get('/machines', [MachineContorller::class, 'index']);
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
