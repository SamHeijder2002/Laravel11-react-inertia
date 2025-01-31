<?php

use Illuminate\Http\Client\Request;

class Test
{
    public function One(Request $request)
    {
        return "one";
    }
    protected function Two()
    {
        return "two";
    }
}
