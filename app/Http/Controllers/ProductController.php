<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\MachineCollection;
use App\Models\Product;
use App\Models\Machine;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Carbon\Carbon;

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

    public function index2()
    {
        $machine = new MachineCollection(Machine::OrderByDesc('id')->paginate(8));
        return Inertia::render('Dashboard', [
            'machine' => $machine,
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
        $product->tanggal_pesan = $request->tanggal_pesan;
        $product->tengat_waktu = $request->tengat_waktu;
        $product->process1 = $request->process1 ?? '';
        $product->estimasi1 = $request->estimasi1 ?? 0.00;
        $product->process2 = $request->process2 ?? '';
        $product->estimasi2 = $request->estimasi2 ?? 0.00;
        $product->process3 = $request->process3 ?? '';
        $product->estimasi3 = $request->estimasi3 ?? 0.00;
        $product->process4 = $request->process4 ?? '';
        $product->estimasi4 = $request->estimasi4 ?? 0.00;
        $product->process5 = $request->process5 ?? '';
        $product->estimasi5 = $request->estimasi5 ?? 0.00;
        $product->process6 = $request->process6 ?? '';
        $product->estimasi6 = $request->estimasi6 ?? 0.00;
        $product->process7 = $request->process7 ?? '';
        $product->estimasi7 = $request->estimasi7 ?? 0.00;
        $product->process8 = $request->process8 ?? '';
        $product->estimasi8 = $request->estimasi8 ?? 0.00;
        $product->process9 = $request->process9 ?? '';
        $product->estimasi9 = $request->estimasi9 ?? 0.00;
        $product->process10 = $request->process10 ?? '';
        $product->estimasi10 = $request->estimasi10 ?? 0.00;
        $product->process11 = $request->process11 ?? '';
        $product->estimasi11 = $request->estimasi11 ?? 0.00;
        $product->process12 = $request->process12 ?? '';
        $product->estimasi12 = $request->estimasi12 ?? 0.00;
        $product->process13 = $request->process13 ?? '';
        $product->estimasi13 = $request->estimasi13 ?? 0.00;
        $product->process14 = $request->process14 ?? '';
        $product->estimasi14 = $request->estimasi14 ?? 0.00;
        $product->process15 = $request->process15 ?? '';
        $product->estimasi15 = $request->estimasi15 ?? 0.00;
        $product->est = $request->est ?? 0.00;
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

    public function view(Product $product, Request $request)
    {
        $produk = $product->find($request->id);
        $deliveryDate = Carbon::parse($produk->tengat_waktu);
        $tanggalpesan = Carbon::parse($produk->tanggal_pesan);

        // for( $i = 0; $i <= 15; $i++ ) {
        //     $deliveryDate->subDay();
        // }

            // Daftar List
            $tanggal = [];
            $processes = [];

            // Iterasi untuk setiap langkah proses
            for ($i = 0; $i < 16; $i++) {
                $processes[] = [
                    'step' => $i + 1, // Langkah ke-
                    'delivery_date' => $deliveryDate->format('d-m-Y'), // Format tanggal
                ];
    
                $deliveryDate->subDay(); // Mengurangkan satu hari
            }

            $tanggal[] = [
                'tanggal_pesan' => $tanggalpesan->format('d-m-Y')
            ];

        return Inertia::render('View', [
            'viewProduct' => $produk,
            'tanggalProcess' => $processes,
            'tanggal' => $tanggal,
        ]);
    }
}
