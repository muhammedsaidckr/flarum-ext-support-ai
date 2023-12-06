<?php

namespace MSC\SupportAi\Event;

use MSC\SupportAi\Agent\Flag;

class Flagging
{
    public function __construct(
        public Flag $flag
    )
    {}
}
