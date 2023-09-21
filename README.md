## beberapa logic untuk mengurangi tanggal 
## Cara ke 1
Untuk mengurangi hari dari tanggal yang sudah Anda tentukan dalam kolom `delivery_date` dalam tabel produk di Laravel versi 10, Anda dapat membuat fungsi yang dapat Anda panggil ketika perlu mengurangkan hari. Berikut adalah contoh cara Anda dapat melakukannya:

Langkah 1: Buat Model

Pastikan Anda memiliki model yang sesuai untuk tabel produk. Anda dapat membuat model dengan menggunakan perintah berikut:

```bash
php artisan make:model Product
```

Langkah 2: Buat Fungsi di Model

Tambahkan fungsi di dalam model `Product` Anda untuk mengurangkan hari dari tanggal `delivery_date`. Dalam model `Product`, Anda dapat menambahkan fungsi seperti berikut:

```php
use Carbon\Carbon;

class Product extends Model
{
    // ...

    public function reduceDeliveryDate($days)
    {
        // Pastikan $this->delivery_date adalah tanggal yang ingin Anda kurangi
        $deliveryDate = Carbon::parse($this->delivery_date);
        $newDeliveryDate = $deliveryDate->subDays($days);

        $this->delivery_date = $newDeliveryDate;
        $this->save();

        return $newDeliveryDate;
    }
}
```

Pastikan Anda telah mengimpor `Carbon` di atas model Anda.

Langkah 3: Panggil Fungsi di Kontroller

Kemudian, Anda dapat memanggil fungsi ini dari dalam kontroller saat Anda ingin mengurangkan hari dari `delivery_date`. Misalnya, jika Anda ingin mengurangkan 3 hari dari `delivery_date`, Anda dapat melakukannya seperti ini di dalam kontroller:

```php
use App\Product;

class ProductController extends Controller
{
    public function reduceDeliveryDate($productId)
    {
        $product = Product::findOrFail($productId);
        $newDeliveryDate = $product->reduceDeliveryDate(3); // Mengurangkan 3 hari
        return response()->json(['new_delivery_date' => $newDeliveryDate]);
    }
}
```

Pastikan Anda mengganti `3` dengan jumlah hari yang sesuai dengan kebutuhan Anda.

Langkah 4: Panggil dari Frontend React

Terakhir, dari aplikasi React Anda, Anda dapat membuat permintaan HTTP ke kontroller Laravel yang sesuai untuk memanggil fungsi ini. Anda dapat menggunakan axios atau metode lain untuk melakukan permintaan ke Laravel dan memperbarui tanggal pengiriman.

Ini adalah contoh sederhana menggunakan axios dalam komponen React:

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const ProductComponent = () => {
  const [newDeliveryDate, setNewDeliveryDate] = useState(null);

  const handleReduceDeliveryDate = async () => {
    try {
      const response = await axios.post(`/reduce-delivery-date/${productId}`);
      setNewDeliveryDate(response.data.new_delivery_date);
    } catch (error) {
      console.error('Error reducing delivery date:', error);
    }
  };

  return (
    <div>
      <button onClick={handleReduceDeliveryDate}>Reduce Delivery Date</button>
      {newDeliveryDate && (
        <p>New Delivery Date: {newDeliveryDate}</p>
      )}
    </div>
  );
};

export default ProductComponent;
```

Pastikan Anda mengganti `productId` dengan ID produk yang sesuai dan sesuaikan URL permintaan HTTP dengan route yang Anda buat di Laravel.

Dengan langkah-langkah ini, Anda dapat mengurangkan hari dari tanggal `delivery_date` dalam tabel produk ketika diperlukan melalui aplikasi Anda.

## Cara ke 2
Untuk mengurangi 1 hari dari tanggal pengiriman (delivery_date) di setiap proses dalam pembuatan produk sebanyak 15 langkah, Anda dapat membuat logika yang akan melakukan pengurangan tanggal pengiriman setiap kali proses selesai. Berikut adalah cara Anda dapat melakukannya:

Langkah 1: Buat Model

Pastikan Anda memiliki model yang sesuai untuk tabel produk. Anda dapat membuat model dengan menggunakan perintah berikut:

```bash
php artisan make:model Product
```

Langkah 2: Buat Fungsi di Model

Tambahkan fungsi di dalam model `Product` Anda yang akan mengurangkan satu hari dari tanggal pengiriman (`delivery_date`) setiap kali proses selesai. Dalam model `Product`, Anda dapat menambahkan fungsi seperti berikut:

```php
use Carbon\Carbon;

class Product extends Model
{
    // ...

    public function reduceDeliveryDate()
    {
        // Pastikan $this->delivery_date adalah tanggal yang ingin Anda kurangi
        $deliveryDate = Carbon::parse($this->delivery_date);
        $newDeliveryDate = $deliveryDate->subDay();

        $this->delivery_date = $newDeliveryDate;
        $this->save();

        return $newDeliveryDate;
    }
}
```

Pastikan Anda telah mengimpor `Carbon` di atas model Anda.

Langkah 3: Panggil Fungsi di Kontroller

Selanjutnya, dalam kontroller yang mengendalikan proses pembuatan produk, panggil fungsi `reduceDeliveryDate` dari model `Product` setiap kali proses selesai. Misalnya, jika Anda memiliki 15 langkah proses dalam sebuah kontroller, Anda dapat mengurangkan satu hari dari tanggal pengiriman setiap kali langkah selesai:

```php
use App\Product;

class ProductController extends Controller
{
    public function createProduct()
    {
        $product = new Product();
        $product->delivery_date = '2023-12-31'; // Ganti dengan tanggal awal pengiriman

        // Langkah 1
        // ...
        $product->reduceDeliveryDate();

        // Langkah 2
        // ...
        $product->reduceDeliveryDate();

        // Lanjutkan dengan langkah-langkah lainnya

        // Simpan produk setelah semua proses selesai
        $product->save();

        return response()->json(['message' => 'Product created successfully']);
    }
}
```

Pastikan Anda mengganti tanggal awal pengiriman sesuai dengan kebutuhan Anda.

Langkah 4: Panggil dari Frontend React

Terakhir, dari aplikasi React Anda, Anda dapat membuat permintaan HTTP ke kontroller Laravel yang sesuai setiap kali proses selesai. Anda dapat menggunakan axios atau metode lain untuk melakukan permintaan ke Laravel dan memperbarui tanggal pengiriman.

Ini adalah contoh sederhana menggunakan axios dalam komponen React:

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const ProductComponent = () => {
  const [message, setMessage] = useState('');

  const handleProcessCompletion = async () => {
    try {
      await axios.post(`/complete-process`);
      setMessage('Process completed successfully.');
    } catch (error) {
      console.error('Error completing process:', error);
    }
  };

  return (
    <div>
      <button onClick={handleProcessCompletion}>Complete Process</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductComponent;
```

Pastikan Anda memanggil route yang sesuai di permintaan HTTP, yang akan menjalankan proses pembuatan produk di Laravel.

Dengan langkah-langkah ini, Anda dapat mengurangkan satu hari dari tanggal pengiriman (`delivery_date`) setiap kali proses pembuatan produk selesai melalui aplikasi Anda, dan Anda dapat melakukan ini dalam 15 langkah proses sebagaimana yang Anda inginkan.