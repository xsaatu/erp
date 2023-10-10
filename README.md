# Refactoring to Model
## Model
// app/Models/Product.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        // Define your fillable fields here
    ];

    public static function createProduct($data)
    {
        // Create a new product using $data and save it
        return self::create($data);
    }

    public static function updateProduct($id, $data)
    {
        // Update the product with the given $id using $data
        self::where('id', $id)->update($data);
    }

    public static function deleteProduct($id)
    {
        // Delete the product with the given $id
        self::where('id', $id)->delete();
    }

    public static function searchProducts($search)
    {
        // Perform a search for products based on the search query
        return self::where('so', 'LIKE', '%' . $search . '%')->get();
    }
}

## Controller
// app/Http/Controllers/ProductController.php

use App\Models\Product;

// ...

public function store(Request $request)
{
    $data = $request->all();
    Product::createProduct($data);
    return redirect()->back()->with('message', 'Product has been added');
}

public function update(Request $request)
{
    $id = $request->id;
    $data = $request->all();
    Product::updateProduct($id, $data);
    return redirect()->route('dashboard');
}

public function destroy(Request $request)
{
    $id = $request->id;
    Product::deleteProduct($id);
    return redirect()->back()->with('message', 'Product has been deleted');
}

public function search(Request $request)
{
    $search = $request->input('search');
    $produk = Product::searchProducts($search);
    return Inertia::render('Monitor', ['produk' => $produk]);
}


# Convert
Untuk mengonversi nilai 0.5 menjadi setengah hari dalam objek Carbon, Anda dapat menggunakan metode `addHours()` untuk menambahkan setengah hari (12 jam) ke objek Carbon. Berikut adalah contoh cara melakukannya:

```php
$nilaiNumerik = 0.5; // Nilai numerik yang mewakili setengah hari

$carbonDate = Carbon::now(); // Inisialisasi objek Carbon, bisa diganti dengan tanggal yang sesuai
$carbonDate->addHours($nilaiNumerik * 24); // Menambahkan setengah hari (12 jam) ke objek Carbon

echo $carbonDate->toDateTimeString(); // Output hasil konversi
```

Dalam contoh di atas, kita mengalikan nilai numerik (0.5) dengan 24 untuk mengonversinya menjadi jam (setengah hari), lalu menggunakan `addHours()` untuk menambahkannya ke objek Carbon. Anda dapat mengganti `$carbonDate` dengan tanggal yang sesuai, dan hasilnya akan berisi tanggal dan waktu yang setengah hari lebih besar dari tanggal awal.
# Try from est
## 1
$jumlahMesin = 3; // Ganti dengan jumlah mesin yang Anda miliki
$jumlahProsesPerUrutan = 3; // Ganti dengan jumlah proses per urutan yang Anda miliki

$tanggalpesan = Carbon::parse($produk->tanggal_pesan);

$tanggal = [];
$processes = [];

// Iterasi melalui mesin
for ($mesinIndex = 0; $mesinIndex < $jumlahMesin; $mesinIndex++) {
    // Anda perlu mengganti ini dengan cara untuk mendapatkan waktu tunggu mesin yang sesuai
    $waktuTungguMesin = $this->getWaktuTungguMesinByProses($mesinIndex);

    // Iterasi melalui proses per urutan pada setiap mesin
    for ($prosesIndex = 0; $prosesIndex < $jumlahProsesPerUrutan; $prosesIndex++) {
        $processColumnName = "process" . ($prosesIndex + 1);

        if (!empty($produk->$processColumnName)) {
            // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
            $deliveryDate = Carbon::parse($produk->tengat_waktu);
            $processDate = $deliveryDate->copy()->max($tanggalpesan);

            // Mengurangkan waktu tunggu mesin yang sesuai dari tanggal proses
            $processDate->subDays($waktuTungguMesin);

            $processes[] = [
                'mesin' => $mesinIndex + 1, // Nomor mesin
                'proses' => $prosesIndex + 1, // Nomor proses pada urutan mesin
                'delivery_date' => $processDate->format('d-m-Y'), // Format tanggal
            ];
        }
    }
}

$tanggal[] = [
    'tanggal_pesan' => $tanggalpesan->format('d-m-Y')
];

return Inertia::render('View', [
    'viewProduct' => $produk,
    'tanggalProcess' => $processes,
    'tanggal' => $tanggal,
]);

## 2
Untuk mengurangkan `subDay()` dengan jumlah yang Anda hitung sebelumnya sebagai `$jumlahMesin`, Anda dapat memodifikasi loop proses Anda sebagai berikut:

```php
$jumlahMesin = 0; // Inisialisasi jumlah mesin
$jumlahProsesPerUrutan = 16; // Ganti dengan jumlah proses per urutan yang Anda miliki

$deliveryDate = Carbon::parse($produk->tengat_waktu);
$tanggalpesan = Carbon::parse($produk->tanggal_pesan);

$tanggal = [];
$processes = [];

// Iterasi melalui proses per urutan
for ($i = 0; $i < $jumlahProsesPerUrutan; $i++) {
    $processColumnName = "process" . ($i + 1);

    if (!empty($produk->$processColumnName)) {
        // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
        $processDate = $deliveryDate->copy()->max($tanggalpesan);

        $processes[] = [
            'step' => $i + 1, // Langkah ke-
            'delivery_date' => $processDate->format('d-m-Y'), // Format tanggal
        ];

        // Menambah jumlah mesin jika proses tidak kosong
        $jumlahMesin++;
    }

    $deliveryDate->subDays($jumlahMesin); // Mengurangkan satu hari dengan jumlah mesin
}

$tanggal[] = [
    'tanggal_pesan' => $tanggalpesan->format('d-m-Y')
];

return Inertia::render('View', [
    'viewProduct' => $produk,
    'tanggalProcess' => $processes,
    'jumlahMesin' => $jumlahMesin,
    'tanggal' => $tanggal,
]);
```

Dalam kode di atas, setiap kali Anda menemukan proses yang tidak kosong, Anda mengurangkan `$deliveryDate` dengan `$jumlahMesin` hari. Ini berarti setiap proses yang tidak kosong akan memiliki tanggal pengiriman yang berkurang seiring dengan penambahan jumlah mesin. Semoga ini membantu Anda mencapai hasil yang Anda inginkan.
## Add half day
Jika Anda ingin menggabungkan nilai yang telah diubah dari 0.5 hari (setengah hari) ke dalam pemanggilan `subDay()` yang telah Anda gunakan sebelumnya, Anda dapat melakukannya seperti ini:

```php
$nilaiNumerik = 0.5; // Nilai numerik yang mewakili setengah hari

$carbonDate = Carbon::now(); // Inisialisasi objek Carbon, bisa diganti dengan tanggal yang sesuai
$carbonDate->addHours($nilaiNumerik * 24); // Menambahkan setengah hari (12 jam) ke objek Carbon

$deliveryDate = Carbon::parse($produk->tengat_waktu);
$tanggalpesan = Carbon::parse($produk->tanggal_pesan);

$processes = [];

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
```

Dalam kode di atas, kita menambahkan setengah hari ke tanggal per proses menggunakan `addHours()` setelah menghitung tanggal per proses seperti yang Anda lakukan sebelumnya. Pastikan untuk mengganti `$nilaiNumerik` dengan nilai yang sesuai jika Anda ingin mengonversi nilai yang berbeda menjadi setengah hari.