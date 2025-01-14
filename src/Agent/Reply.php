<?php

namespace MSC\SupportAi\Agent;

use MSC\SupportAi\Event\Replying;
use Flarum\Post\Post;

class Reply extends Action
{
    public function __construct(
        protected readonly string $reply,
        protected readonly bool $shouldMention = false,
        protected readonly ?Post $inReplyTo = null,
    )
    {}

    public function __invoke(): string
    {
        $message = $this->reply;

        if ($mention = $this->getReplyToMention()) {
            $message = "$mention $message";
        }

        static::$events->dispatch(new Replying($this, $message));

        return $message;
    }

    protected function getReplyToMention(): ?string
    {
        if (!$this->shouldMention || !$this->inReplyTo) {
            return null;
        }

        return sprintf(
            '@"%s"#p%u @"%s"#%u',
            $this->inReplyTo->user->display_name,
            $this->inReplyTo->id,
            $this->inReplyTo->user->display_name,
            $this->inReplyTo->user_id
        );
    }
}
