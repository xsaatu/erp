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
        @foreach($viewProduct as $produk)
        <tr>
            <td>{{ $loop->iteration }}</td>
            <td>{{ $produk->process1 }}</td>
            <td>{{ $produk->estimasi1}}</td>
            <td>Actual</td>
            {{-- <td>{{ $process['delivery_date'] }}</td>
            <td>{{ $process['wait'] }}</td> --}}
        </tr>
        @endforeach

        </tbody>
    </table>
</body>
</html>
