<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIssuesRequest;
use App\Http\Requests\UpdateIssuesRequest;
use App\Models\Issue;
use Inertia\Inertia;

class IssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIssuesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($issue_id)
    {
        return Inertia::render('Github/Components/Details', [
            'id' => $issue_id,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Issue $issues)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIssuesRequest $request, Issue $issues)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Issue $issues)
    {
        //
    }
}
