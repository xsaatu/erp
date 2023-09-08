<?php

namespace App\Http\Controllers;

use App\Models\Machine;
use App\Http\Resource\MachineCollection;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MachineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $machine = new MachineCollection(Machine::OrderByDesc('id')->paginate(8));
        return Inertia::render('Monitor', [
            'machine' => $machine,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $machine = new Machine();
        $machine->kode = $request->kode;
        $machine->nama = $request->nama;
        $machine->description = $request->description;
        $machine->wait = $request->wait;
        $machine->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Machine $machine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Machine $machine)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Machine $machine)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Machine $machine)
    {
        //
    }
}
