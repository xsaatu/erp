<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('so');
            $table->string('name');
            $table->date('tengat_waktu');
            $table->string('process1');
            $table->float('estimasi1');
            $table->string('process2');
            $table->float('estimasi2');
            $table->string('process3');
            $table->float('estimasi3');
            $table->string('process4');
            $table->float('estimasi4');
            $table->string('process5');
            $table->float('estimasi5');
            $table->string('process6');
            $table->float('estimasi6');
            $table->string('process7');
            $table->float('estimasi7');
            $table->string('process8');
            $table->float('estimasi8');
            $table->string('process9');
            $table->float('estimasi9');
            $table->string('process10');
            $table->float('estimasi10');
            $table->string('process11');
            $table->float('estimasi11');
            $table->string('process12');
            $table->float('estimasi12');
            $table->string('process13');
            $table->float('estimasi13');
            $table->string('process14');
            $table->float('estimasi14');
            $table->string('process15');
            $table->float('estimasi15');
            $table->float('est');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
