{{-- productPdf.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>Laporan PDF Produk</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <h2>Detail Produk</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Tanggal Pesan</th>
                <!-- Tambahkan kolom lainnya sesuai kebutuhan -->
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $viewProduct['no'] }}</td>
                <td>{{ $viewProduct['name'] }}</td>
                <td>{{ $viewProduct['tanggal_pesan'] }}</td>
                <!-- Tambahkan kolom lainnya sesuai kebutuhan -->
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
            <tr>
                <td>1</td>
                <td>{{ $viewProduct['process1'] }}</td>
                <td>{{ $viewProduct['estimasi1'] }}</td>
                <td>Actual</td>
                <td>{{ $viewProduct['tanggal_pesan'] }}</td> <!-- Misalnya menggunakan tanggal pesan, sesuaikan dengan yang sesuai -->
                <td>{{ $viewProduct['wait1'] }}</td>
            </tr>
            <!-- Tambahkan baris-baris lain sesuai kebutuhan -->
        </tbody>
    </table>
</body>
</html>
