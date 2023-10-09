
## Add 2 proses tetap
## cara ke 1

// Menambahkan proses Quality dan Finish
$processes[] = [
  'step' => 0, // Proses Quality
  'delivery_date' => $deliveryDate->copy()->subDay(2)->format('d-m-Y'),
];
        
$processes[] = [
  'step' => 17, // Proses Finish
  'delivery_date' => $deliveryDate->copy()->subDay(1)->format('d-m-Y'),
];

## Max date
  $processDate = $deliveryDate->copy()->max($tanggalpesan);

## Take subday from est
for ($i = 0; $i < 16; $i++) {
    $processColumnName = "process" . ($i + 1);

    if (!empty($produk->$processColumnName)) {
        // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
        $processDate = $deliveryDate->copy()->max($tanggalpesan);

        // Ambil estimasi untuk proses ini dari database
        $estimasiColumnName = "estimasi_process" . ($i + 1);
        $estimasi = $produk->$estimasiColumnName;

        // Kurangkan tanggal proses dengan estimasi yang sesuai
        $processDate->subDays($estimasi);

        $processes[] = [
            'step' => $i + 1, // Langkah ke-
            'delivery_date' => $processDate->format('d-m-Y'), // Format tanggal
        ];
    }

    $deliveryDate->subDay(); // Mengurangkan satu hari
}

## Convert
Untuk mengonversi nilai 0.5 menjadi setengah hari dalam objek Carbon, Anda dapat menggunakan metode `addHours()` untuk menambahkan setengah hari (12 jam) ke objek Carbon. Berikut adalah contoh cara melakukannya:

```php
$nilaiNumerik = 0.5; // Nilai numerik yang mewakili setengah hari

$carbonDate = Carbon::now(); // Inisialisasi objek Carbon, bisa diganti dengan tanggal yang sesuai
$carbonDate->addHours($nilaiNumerik * 24); // Menambahkan setengah hari (12 jam) ke objek Carbon

echo $carbonDate->toDateTimeString(); // Output hasil konversi
```

Dalam contoh di atas, kita mengalikan nilai numerik (0.5) dengan 24 untuk mengonversinya menjadi jam (setengah hari), lalu menggunakan `addHours()` untuk menambahkannya ke objek Carbon. Anda dapat mengganti `$carbonDate` dengan tanggal yang sesuai, dan hasilnya akan berisi tanggal dan waktu yang setengah hari lebih besar dari tanggal awal.
## Try from est
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