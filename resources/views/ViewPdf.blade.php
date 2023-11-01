@extends('layouts.app')

@php
    $tanggal = $produk->tanggalProcess;
    $tanggalPesan = $produk->tanggal[0];
@endphp

@section('content')
    <div id="head_product">
        <div class="container">
            <div class="grid grid-cols-3 gap-3 m-5">
                <div>
                    {{-- <input class="input-xs" value="{{ $produk['no'] }}" disabled> --}}
                </div>
                <div>
                    {{-- <input class="input-xs" value="{{ $tanggalPesan['tanggal_pesan'] }}" disabled> --}}
                </div>
                <div>
                    {{-- <input class="input-xs" value="{{ $tanggal[0]['delivery_date'] }}" disabled> --}}
                </div>
            </div>
        </div>
    </div>

    <div class="overflow-x-auto m-5">
        <table class="table table-md">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Process</th>
                    <th>Estimasi</th>
                    <th>Actual</th>
                    <th>Tanggal Proses</th>
                    <th>wait</th>
                </tr>
            </thead>
            <tbody>
                @foreach (range(1, 15) as $nomor)
                    @php
                        $processKey = "process{$nomor}";
                        $estimasiKey = "estimasi{$nomor}";
                        $waitKey = "wait{$nomor}";
                        $tanggalKey = $tanggal - $nomor;
                        $isProcessEmpty = empty($produk[$processKey]);
                    @endphp

                    @if (!$isProcessEmpty)
                        <tr>
                            <td>{{ $nomor }}</td>
                            <td>{{ $produk[$processKey] }}</td>
                            <td>{{ $produk[$estimasiKey] }}</td>
                            <td>Actual</td>
                            <td>{{ optional($tanggal[$tanggalKey])['delivery_date'] }}</td>
                            <td>{{ $produk[$waitKey] }}</td>
                        </tr>
                    @else
                        @php
                            return null;
                        @endphp
                    @endif
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
