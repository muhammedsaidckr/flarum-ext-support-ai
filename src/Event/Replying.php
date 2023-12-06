<?php

namespace MSC\SupportAi\Event;

use MSC\SupportAi\Agent\Reply;

class Replying
{
    public function __construct(
        public Reply $reply,
        public string $message
    )
    {}
}
