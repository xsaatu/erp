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
        $product->no = $request->no;
        $product->name = $request->name;
        $product->tanggal_pesan = $request->tanggal_pesan;
        $product->tengat_waktu = $request->tengat_waktu;
        $product->process1 = $request->process1 ?? '';
        $product->estimasi1 = $request->estimasi1 ?? 0.00;
        $product->wait1 = $request->wait1 ?? 0.00;
        $product->process2 = $request->process2 ?? '';
        $product->estimasi2 = $request->estimasi2 ?? 0.00;
        $product->wait2 = $request->wait2?? 0.00;
        $product->process3 = $request->process3 ?? '';
        $product->estimasi3 = $request->estimasi3 ?? 0.00;
        $product->wait3 = $request->wait3?? 0.00;
        $product->process4 = $request->process4 ?? '';
        $product->estimasi4 = $request->estimasi4 ?? 0.00;
        $product->wait4 = $request->wait4?? 0.00;
        $product->process5 = $request->process5 ?? '';
        $product->estimasi5 = $request->estimasi5 ?? 0.00;
        $product->wait5 = $request->wait5?? 0.00;
        $product->process6 = $request->process6 ?? '';
        $product->estimasi6 = $request->estimasi6 ?? 0.00;
        $product->wait6 = $request->wait6?? 0.00;
        $product->process7 = $request->process7 ?? '';
        $product->estimasi7 = $request->estimasi7 ?? 0.00;
        $product->wait7 = $request->wait7?? 0.00;
        $product->process8 = $request->process8 ?? '';
        $product->estimasi8 = $request->estimasi8 ?? 0.00;
        $product->wait8 = $request->wait8?? 0.00;
        $product->process9 = $request->process9 ?? '';
        $product->estimasi9 = $request->estimasi9 ?? 0.00;
        $product->wait9 = $request->wait9?? 0.00;
        $product->process10 = $request->process10 ?? '';
        $product->estimasi10 = $request->estimasi10 ?? 0.00;
        $product->wait10 = $request->wait10?? 0.00;
        $product->process11 = $request->process11 ?? '';
        $product->estimasi11 = $request->estimasi11 ?? 0.00;
        $product->wait11 = $request->wait11?? 0.00;
        $product->process12 = $request->process12 ?? '';
        $product->estimasi12 = $request->estimasi12 ?? 0.00;
        $product->wait12 = $request->wait12?? 0.00;
        $product->process13 = $request->process13 ?? '';
        $product->estimasi13 = $request->estimasi13 ?? 0.00;
        $product->wait13 = $request->wait13?? 0.00;
        $product->process14 = $request->process14 ?? '';
        $product->estimasi14 = $request->estimasi14 ?? 0.00;
        $product->wait14 = $request->wait14?? 0.00;
        $product->process15 = $request->process15 ?? '';
        $product->estimasi15 = $request->estimasi15 ?? 0.00;
        $product->wait15 = $request->wait15?? 0.00;
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
    public function edit(Product $product, Request $request)
    {
        $produk = $product->find($request->id);
        $machine = new MachineCollection(Machine::OrderByDesc('id')->paginate(8));
        return Inertia::render('Edit', [
            'myProduct' => $produk,
            'myMachine' => $machine,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Product::where('id', $request->id)->update([
            'no' => $request->no,
            'name' => $request->name,
            'tanggal_pesan' => $request->tanggal_pesan,
            'tengat_waktu' => $request->tengat_waktu,
            'process1' => $request->process1 ?? '',
            'estimasi1' => $request->estimasi1 ?? 0.00,
            'process2' => $request->process2 ?? '',
            'estimasi2'  => $request->estimasi2 ?? 0.00,

            'process3' => $request->process3 ?? '',
            'estimasi3'  => $request->estimasi3 ?? 0.00,

            'process4' => $request->process4 ?? '',
            'estimasi4'  => $request->estimasi4 ?? 0.00,

            'process5' => $request->process5 ?? '',
            'estimasi5'  => $request->estimasi5 ?? 0.00,

            'process6' => $request->process6 ?? '',
            'estimasi6'  => $request->estimasi6 ?? 0.00,

            'process7' => $request->process7 ?? '',
            'estimasi7'  => $request->estimasi7 ?? 0.00,

            'process8' => $request->process8 ?? '',
            'estimasi8'  => $request->estimasi8 ?? 0.00,

            'process9' => $request->process9 ?? '',
            'estimasi9' => $request->estimasi9 ?? 0.00,

            'process10' => $request->process10 ?? '',
            'estimasi10' => $request->estimasi10 ?? 0.00,

            'process11' => $request->process11 ?? '',
            'estimasi11' => $request->estimasi11 ?? 0.00,

            'process12' => $request->process12 ?? '',
            'estimasi12' => $request->estimasi12 ?? 0.00,

            'process13' => $request->process13 ?? '',
            'estimasi13' => $request->estimasi13 ?? 0.00,

            'process14' => $request->process14 ?? '',
            'estimasi14' => $request->estimasi14 ?? 0.00,

            'process15' => $request->process15 ?? '',
            'estimasi15' => $request->estimasi15 ?? 0.00,
            'est' => $request->est,
        ]);
        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $product = Product::find($request->id);
        $product->delete();
        return redirect()->back()->with('message', 'Tulisan Berhasil dihapus');
    }

    // seacrh
    public function search(Request $request) 
    {
        if($request->has('search')) {
            $produk = Product::where('no','LIKE','%'.$request->search.'%')->get();
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
        $nilaiNumerik = 0.5; // Nilai numerik yang mewakili setengah hari


            $tanggal = [];
            $processes = [];
 
        $finish = array_column($produk, 'nama');
        $hasFinish = in_array('finish', $finish);
        $processes[] = [
            $hasFinish ? true : $deliveryDate->subDay(),
        ];

                // Menghitung tanggal di setiap prosesnya
                for ($i = 0; $i < 16; $i++) {
                    $processColumnName = "process" . ($i + 1);
                
                    if (!empty($produk->$processColumnName)) {
                        // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
                        $processDate = $deliveryDate->copy()->max($tanggalpesan);
                
                        // Menambahkan setengah hari ke tanggal per proses
                        $processDate->addHours($nilaiNumerik * 24);
                
                        $processes[] = [
                            'step' => $i + 1, // Langkah ke-
                            'delivery_date' => $processDate->format('d-m-Y'), // Format tanggal
                        ];
                    }
                
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

            // PROSES ASLINYA
            // //untuk menghitung tanggal di setiap prosesnya
            // for($i = 0; $i < 16; $i++) {
            //     $processColumnName = "process" . ($i + 1);

            //     if(!empty($produk->$processColumnName)) {
            //         $processes[] = [
            //             'step' => $i + 1, // Langkah ke-
            //             'delivery_date' => $deliveryDate->format('d-m-Y'), // Format tanggal
            //         ];
            //     }
    
            //     $deliveryDate->subDay(); // Mengurangkan satu hari
            // }

            // Menambahkan proses Quality dan Finish
            // $processes[] = [
            //     'step' => 0, // Proses Quality
            //     'Quality Proses',
            //     'delivery_date' => $deliveryDate->copy()->subDay(2)->format('d-m-Y'),
            // ];
        
            // $processes[] = [
            //     'step' => 17, // Proses Finish
            //     'Finish',
            //     'delivery_date' => $deliveryDate->copy()->subDay(1)->format('d-m-Y'),
            // ];

            // $totalSteps = 15;

            // // Tanggal Quality Proses dan Finish Production
            // $qualityProsesDate = $deliveryDate->copy()->subDay(2); // 2 hari sebelum delivery date
            // $finishProductionDate = $deliveryDate->copy()->subDay(1); // 1 hari sebelum delivery date

            // // // // Untuk menghitung tanggal di setiap prosesnya
            // for ($i = 0; $i < $totalSteps; $i++) {
            //     if ($i == $totalSteps - 2) {
            //         $processName = 'Quality Proses';
            //         $stepDate = $qualityProsesDate;
            //     } elseif ($i == $totalSteps - 1) {
            //         $processName = 'Finish Production';
            //         $stepDate = $finishProductionDate;
            //     } else {
            //         $processColumnName = "process" . ($i + 1);
            //         $processName = 'Langkah ' . ($i + 1);
            //         $stepDate = $deliveryDate;
            //     }

            //     $processes[] = [
            //         'step' => $i + 1, // Langkah ke-
            //         'step_name' => $processName, // Nama proses
            //         'delivery_date' => $stepDate->format('d-m-Y'), // Format tanggal
            //     ];

            //     $deliveryDate->subDay(); // Mengurangkan satu hari
            // }

            // for ($i = 0; $i < 16; $i++) {
            //     $processColumnName = "process" . ($i + 1);

            //     if (!empty($produk->$processColumnName)) {
            //         // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
            //         $processDate = $deliveryDate->copy()->max($tanggalpesan);
                    
            //         $processes[] = [
            //             'step' => $i + 1, // Langkah ke-
            //             'delivery_date' => $processDate->format('d-m-Y'), // Format tanggal
            //         ];
            //     }

            //     $deliveryDate->subDay(); // Mengurangkan satu hari
            // }