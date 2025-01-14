<?php

namespace MSC\SupportAi;

use Flarum\Extension\ExtensionManager;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\UserRepository;
use OpenAI;
use OpenAI\Client;

class ClientProvider extends AbstractServiceProvider
{
    public function boot()
    {
        /** @var SettingsRepositoryInterface $settings */
        $settings = $this->container->make(SettingsRepositoryInterface::class);

        $apiKey = $settings->get('muhammedsaidckr/support-ai.openai-api-key');
        $organisation = $settings->get('muhammedsaidckr/support-ai.openai-api-organisation');

        if ($apiKey) {
            $this->container->singleton(Client::class, fn () => OpenAI::client($apiKey, $organisation));
        }

        /** @var ExtensionManager $extensions */
        $extensions = $this->container->make(ExtensionManager::class);

        $this->container->singleton(Agent::class, fn () => $this->getAgent($settings, $extensions));
    }

    protected function getAgent(SettingsRepositoryInterface $settings, ExtensionManager $extensions): Agent
    {
        $username = $settings->get('muhammedsaidckr/support-ai.username') ?? 'admin';

        /** @var UserRepository $users */
        $users = $this->container->make(UserRepository::class);
        $user = $users->findOrFailByUsername($username);

        /** @var Client $client */
        $client = $this->container->has(Client::class)
            ? $this->container->make(Client::class)
            : null;

        $agent = new Agent(
            user: $user,
            persona: $settings->get('muhammedsaidckr/support-ai.persona'),
            moderatingBehaviour: $settings->get('muhammedsaidckr/support-ai.how-to-moderate'),
            client: $client,
            model: $settings->get('muhammedsaidckr/support-ai.model')
        );

        $agent->toggleMentioning($extensions->isEnabled('flarum-mentions'));

        return $agent;
    }
}
