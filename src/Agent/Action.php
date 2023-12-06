<?php

namespace MSC\SupportAi\Agent;

use MSC\SupportAi\Agent;
use Illuminate\Contracts\Events\Dispatcher;

abstract class Action
{
    protected static ?Dispatcher $events = null;
    protected static ?Agent $agent = null;

    public static function setEventDispatcher(Dispatcher $events): void
    {
        static::$events = $events;
    }

    public static function setAgent(Agent $agent): void
    {
        static::$agent = $agent;
    }
}
