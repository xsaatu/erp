<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    'est'
    ];
    
    public function product()
    {
        return $this->hasOne(Product::class, 'machine');
    }

}
