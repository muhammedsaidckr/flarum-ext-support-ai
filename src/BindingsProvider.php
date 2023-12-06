<?php

namespace MSC\SupportAi;

use MSC\SupportAi\Agent\Action;
use MSC\SupportAi\Agent\Training;
use MSC\SupportAi\Message\Factory;
use Flarum\Foundation\AbstractServiceProvider;
use Illuminate\Contracts\Events\Dispatcher;

class BindingsProvider extends AbstractServiceProvider
{
    public function boot()
    {
        Action::setEventDispatcher($this->container->make(Dispatcher::class));
        Action::setAgent($this->container->make(Agent::class));

        Factory::setAgent($this->container->make(Agent::class));

        $this->container->singleton(Training::class);
    }
}
