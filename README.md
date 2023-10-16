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
        return self::where('no', 'LIKE', '%' . $search . '%')->get();
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

# Ambil WT
Jika Anda ingin menggunakan nilai `wait1` hingga `wait15` setelah `estimasi1`, `estimasi2`, dan seterusnya, Anda perlu mengorganisasi data Anda dengan benar dan memastikan Anda menyimpan nilai `wait` yang sesuai ke dalam variabel `data` sebelum mengirimnya ke database. Berikut adalah cara Anda dapat mengorganisasi kode Anda:

```jsx
const handleSubmit = () => {
  // Inisialisasi data dengan nilai awal
  const data = {
    so,
    name,
    tanggal_pesan,
    tengat_waktu,
  };

  // Loop melalui process1 hingga process15 dan estimasi1 hingga estimasi15
  for (let i = 1; i <= 15; i++) {
    const processKey = `process${i}`;
    const estimasiKey = `estimasi${i}`;
    const waitKey = `wait${i}`;

    // Temukan nilai wait yang sesuai berdasarkan opsi yang dipilih
    const selectedMachine = machine.find((mesin) => mesin.nama === data[processKey]);
    if (selectedMachine) {
      data[waitKey] = selectedMachine.wait;
    }

    // Tambahkan estimasi ke dalam data
    data[estimasiKey] = data[estimasiKey];
  }

  // ... Sisanya sama seperti sebelumnya

  router.post('/product', data);

  // Reset semua nilai setelah mengirim data
  setSo('');
  setName('');
  setTanggal_pesan('');
  setTengat_waktu('');

  // Reset process1 hingga process15 dan estimasi1 hingga estimasi15
  for (let i = 1; i <= 15; i++) {
    const processKey = `process${i}`;
    const estimasiKey = `estimasi${i}`;
    setProcess(processKey, '');
    setEstimasi(estimasiKey, '');
  }
};
```

# refactor for view

```
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Product extends Model
{
    // ...

    public function getProcessDates()
    {
        $deliveryDate = Carbon::parse($this->tengat_waktu);
        $tanggalpesan = Carbon::parse($this->tanggal_pesan);
        $processes = [];

        // Menghitung tanggal di setiap prosesnya
        for ($i = 0; $i < 16; $i++) {
            $processColumnName = "process" . ($i + 1);

            if (!empty($this->$processColumnName)) {
                // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
                $processDate = $deliveryDate->copy()->max($tanggalpesan);

                $processes[] = [
                    'step' => $i + 1, // Langkah ke-
                    'delivery_date' => $processDate->format('d-m-Y'), // Format tanggal
                ];
            }

            $deliveryDate->subDay(); // Mengurangkan satu hari
        }

        return $processes;
    }

    public function getTanggalPesan()
    {
        return Carbon::parse($this->tanggal_pesan)->format('d-m-Y');
    }
}
```
Controller
```
public function view(Product $product, Request $request)
{
    $produk = $product->find($request->id);

    // Mengambil data tanggal proses dan tanggal pemesanan dari model
    $processes = $produk->getProcessDates();
    $tanggal = $produk->getTanggalPesan();

    return Inertia::render('View', [
        'viewProduct' => $produk,
        'tanggalProcess' => $processes,
        'tanggal' => $tanggal,
    ]);
}
```

# refactor for edit and update
Request
```
// app/Http/Requests/ProductUpdateRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'no' => 'required',
            'name' => 'required',
            'tanggal_pesan' => 'required|date',
            'tengat_waktu' => 'required|date',
            'process1' => 'nullable',
            'estimasi1' => 'nullable|numeric',
            'process2' => 'nullable',
            'estimasi2' => 'nullable|numeric',
            'process3' => 'nullable',
            'estimasi3' => 'nullable|numeric',
            'process4' => 'nullable',
            'estimasi4' => 'nullable|numeric',
            'process5' => 'nullable',
            'estimasi5' => 'nullable|numeric',
            'process6' => 'nullable',
            'estimasi6' => 'nullable|numeric',
            'process7' => 'nullable',
            'estimasi7' => 'nullable|numeric',
            'process8' => 'nullable',
            'estimasi8' => 'nullable|numeric',
            'process9' => 'nullable',
            'estimasi9' => 'nullable|numeric',
            'process10' => 'nullable',
            'estimasi10' => 'nullable|numeric',
            'process11' => 'nullable',
            'estimasi11' => 'nullable|numeric',
            'process12' => 'nullable',
            'estimasi12' => 'nullable|numeric',
            'process13' => 'nullable',
            'estimasi13' => 'nullable|numeric',
            'process14' => 'nullable',
            'estimasi14' => 'nullable|numeric',
            'process15' => 'nullable',
            'estimasi15' => 'nullable|numeric',
            'est' => 'nullable',
        ];
    }
}
```

```model
// app/Models/Product.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // ...

    public function updateProduct(array $data)
    {
        return $this->update($data);
    }
}
```

```controller
// app/Http/Controllers/ProductController.php

namespace App\Http\Controllers;

use App\Http\Requests\ProductUpdateRequest;
use App\Models\Product;
use App\Http\Resources\MachineCollection;

class ProductController extends Controller
{
    public function edit(Product $product, Request $request)
    {
        $produk = $product->find($request->id);
        $machine = new MachineCollection(Machine::OrderByDesc('id')->paginate(8));
        return Inertia::render('Edit', [
            'myProduct' => $produk,
            'myMachine' => $machine,
        ]);
    }

    public function update(ProductUpdateRequest $request, Product $product)
    {
        $data = $request->validated();
        $product->find($request->id)->updateProduct($data);
        
        return redirect()->route('dashboard');
    }
}
```

#format
->timestamp
->j F Y