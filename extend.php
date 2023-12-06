<?php

namespace MSC\SupportAi;

use Flarum\Extend as Flarum;

return [
    (new Flarum\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Flarum\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Flarum\Locales(__DIR__.'/resources/locale')),

    (new Flarum\ServiceProvider)
        ->register(BindingsProvider::class)
        ->register(ClientProvider::class),

    (new Flarum\Event)->subscribe(Listen\ReplyToPosts::class),

    (new Flarum\Console)->command(Console\TrainAgentCommand::class),

    (new Flarum\Settings())
        ->default('muhammedsaidckr/support-ai.model', 'gpt-3.5-turbo-instruct')
        ->default('muhammedsaidckr/support-ai.model.enable_on_discussion_started', true)
        ->default('muhammedsaidckr/support-ai.model.max_tokens', 100)
        ->default('muhammedsaidckr/support-ai.model.user_prompt_badge_text', 'Assistant')
        ->serializeToForum('chatGptUserPromptId', 'muhammedsaidckr/support-ai.model.user_prompt')
        ->serializeToForum('chatGptBadgeText', 'muhammedsaidckr/support-ai.model.user_prompt_badge_text'),
];
