<!DOCTYPE html>
<html>
<head>
    <title>Laporan PDF Produk</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>

    <pre>{{ json_encode($viewProduct, JSON_PRETTY_PRINT) }}</pre>
    {{-- <pre>{{ json_encode($viewProduct) }}</pre> --}}
    <h2>Detail Produk</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>No</th>
                <th>No Order</th>
                <th>Tanggal Pesan</th>
                <th>Delivery Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                {{-- <td>{{ $viewProduct->no }}</td>
                <td>{{ $tanggal[0]['tanggal_pesan'] }}</td>
                <td>{{ $tanggal[0]['delivery_date'] }}</td> --}}
            </tr>
        </tbody>
    </table>

    <h2>Proses Produk</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>No</th>
                <th>Process</th>
                <th>Estimasi</th>
                <th>Actual</th>
                <th>Tanggal Proses</th>
                <th>Wait</th>
            </tr>
        </thead>
        <tbody>
            @php
                $i = 1;
            @endphp
            @php
                $produkData = json_decode(urldecode(request('produkJson')), true);
            @endphp
            @if ($viewProduct && is_array($viewProduct))
                    
                @foreach($viewProduct as $produk)
                <tr>
                    <td>{{ $i++ }}</td>
                    <td>{{ $produk["process1"] ?? 'null'}}</td>
                </tr>
                @endforeach
            @endif

        </tbody>
    </table>
</body>
</html>


            {{-- @foreach($viewProduct as $key => $value)
            @if (Str::startsWith($key, 'process'))
                @php
                    $processNumber = Str::after($key, 'process');
                    $estimasiKey = 'estimasi' . $processNumber;
                    $waitKey = 'wait' . $processNumber;
                @endphp
                <tr>
                    <td>{{ $processNumber }}</td>
                    <td>{{ $value }}</td>
                    <td>{{ $viewProduct[$estimasiKey] }}</td>
                    <td>Actual</td>
                    <td>{{ $tanggalProcess[$processNumber - 1]['delivery_date'] }}</td>
                    <td>{{ $viewProduct[$waitKey] }}</td>
                </tr>
            @endif
        @endforeach --}}

# Link
        <div>
            
          {/* <a href="/product/productpdf" target="_blank" as="button" className="btn btn-info btn-xs text-white">Download</a> */}
          {/* <a href={`/product/productpdf?produk=${JSON.stringify(produk)}}`} target="_blank" as="button" className="btn btn-info btn-xs text-white">Download</a> */}
          {/* <a href={`/product/productpdf?produk={{urlencode(json_encode($produk))}}`} target="_blank" as="button" className="btn btn-info btn-xs text-white">Download</a> */}
          {/* <a href={`/product/productpdf?produk=${encodeURIComponent(props.produkJson)}`} target="_blank" as="button" className="btn btn-info btn-xs text-white">Download</a> */}

        </div>