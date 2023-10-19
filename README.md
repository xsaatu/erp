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
# search option
```javascript
import React, { useState } from 'react';

const Select = ({ options, value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Cari opsi..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={value} onChange={onChange}>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const AddData = (props) => {
  const machineOptions = props.machine.data.map((mesin) => mesin.nama);

  const [no, setNo] = useState('');
  const [name, setName] = useState('');
  const [tanggal_pesan, setTanggal_pesan] = useState('');
  const [tengat_waktu, setTengat_waktu] = useState('');
  const [process1, setProcess1] = useState('');
  const [estimasi1, setEstimasi1] = useState('');
  const [wait1, setWait1] = useState('');
  const [est, setEst] = useState('');

  const handleSubmit = () => {
    const data = {
      no,
      name,
      tanggal_pesan,
      tengat_waktu,
      process1,
      estimasi1,
      wait1,
      est,
    };

    // Simpan data atau kirim ke server sesuai kebutuhan

    // Setel ulang nilai setelah mengirim data
    setNo('');
    setName('');
    setTanggal_pesan('');
    setTengat_waktu('');
    setProcess1('');
    setEstimasi1('');
    setWait1('');
    setEst('');
  };

  return (
    <>
      <button className="btn btn-info" onClick={() => window.my_modal_1.showModal()}>
        Add Data
      </button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="p-6 bg-white border-b border-grey-200">
            <label>
              <span className="block">Nomor Produk</span>
            </label>
            <input
              type="text"
              placeholder="Nomor Produk"
              className="m-3 input w-full"
              onChange={(e) => setNo(e.target.value)}
              value={no}
            />

            {/* ... Formulir lainnya ... */}

            <label>
              <span className="block">Proses 1</span>
            </label>
            <Select options={machineOptions} value={process1} onChange={(e) => setProcess1(e.target.value)} />
            <input
              type="number"
              placeholder="Estimasi 1"
              className="m-3 input w-full"
              onChange={(e) => setEstimasi1(e.target.value)}
              value={estimasi1}
            />

            {/* ... Formulir lainnya ... */}

            <label>
              <span className="block">Waktu</span>
            </label>
            <input
              type="number"
              placeholder="Estimasi"
              className="m-3 input w-full"
              onChange={(e) => setEst(e.target.value)}
              value={est}
            />

            <button className="btn btn-primary m-2" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddData;
```