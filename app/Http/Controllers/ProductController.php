<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login()
    {

        return Inertia::render('Auth/Login', [
            ]);
    }
    public function index()
    {
        $product = new ProductCollection(Product::OrderByDesc('id')->paginate(8));
        return Inertia::render('Monitor', [
            'product' => $product,
            ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->so = $request->so;
        $product->name = $request->name;
        $product->process = $request->process;
        $product->est = $request->est;
        $product->save();
        return redirect()->back()->with('message', 'Product has been add');
    }

    /**
     * Display the specified resource.
     * @param  \App\Models\Product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $myProduct = $product::where('author', auth()->user()->email)->get();
        return Inertia::render('Monitor', [
            'myProduct' => $myProduct,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    // seacrh
    public function search(Request $request) 
    {
        if($request->has('search')) {
            $produk = Product::where('so','LIKE','%'.$request->search.'%')->get();
        }
        return Inertia::render('Monitor', [
          'produk' => $produk,
        ]);
    }
}
