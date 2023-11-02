<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
    'so', 
    'name',
    'process1', 'estimasi1', 
    'process2', 'estimasi2', 
    'process3', 'estimasi3', 
    'process4', 'estimasi4', 
    'process5', 'estimasi5', 
    'process6', 'estimasi6', 
    'process7', 'estimasi7', 
    'process8', 'estimasi8', 
    'process9', 'estimasi9', 
    'process10', 'estimasi10', 
    'process11', 'estimasi11', 
    'process12', 'estimasi12', 
    'process13', 'estimasi13', 
    'process14', 'estimasi14', 
    'process15', 'estimasi15', 
    'est', 'tengat_waktu'
    ];
    
    public function product()
    {
        return $this->hasOne(Product::class, 'machine');
    }

    public function getView($tanggalpesan, $produk)
    {
        $deliveryDate = Carbon::parse($produk->tengat_waktu);

        $proceses = [];

        $finish = array_column($proceses, 'nama');
        $hasFinish = in_array('finish', $finish);
        $proceses[] = [
            $hasFinish ? true : $deliveryDate->subDay()
        ];
        
        // Menghitung tanggal di setiap prosesnya
        for ($i = 0; $i < 16; $i++) {
            $processColumnName = "process" . ($i + 1);
            $wt = $produk->wait . ($i + 1);
                
            if (!empty($produk->$processColumnName)) {
                // Memastikan tanggal per proses tidak kurang dari tanggal pemesanan
                $processDate = $deliveryDate->copy()->max($tanggalpesan);
                
                // Menambahkan setengah hari ke tanggal per proses
                $processDate->subHour((double)$wt * 24)->toDateTimeString();
                
                $proceses[] = [
                    'step' => $i + 1, // Langkah ke-
                    'delivery_date' => $processDate->format('d-m-Y H:i'), // Format tanggal
                ];
            }
                
                    // $deliveryDate->subDay(); // Mengurangkan satu hari
        } 
        return $proceses;
    }
}
