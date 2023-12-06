import app from 'flarum/admin/app';
import ChatGptSettings from "./components/ChatGptSettings";

app.initializers.add('muhammedsaidckr/support-ai', () => {

    app.extensionData
        .for('muhammedsaidckr/support-ai')
        .registerSetting({
            setting: 'muhammedsaidckr/support-ai.openai-api-key',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.setting.api-key'),
            type: 'input',
        })
        .registerSetting({
            setting: 'muhammedsaidckr/support-ai.model',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.setting.model'),
            type: 'select',
            options: {
                'gpt-4': 'GPT-4',
                'gpt-3.5-turbo-instruct': 'GPT-3.5 Turbo',
            }
        })
        .registerSetting({
            setting: 'muhammedsaidckr/support-ai.openai-api-organisation',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.setting.api-organisation'),
            type: 'input',
        })
        .registerSetting({
            setting: 'muhammedsaidckr/support-ai.username',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.setting.username'),
            type: 'input',
        })
        .registerSetting({
            setting: 'muhammedsaidckr/support-ai.persona',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.setting.persona'),
            type: 'textarea',
        })
        .registerSetting({
            setting: 'muhammedsaidckr/support-ai.how-to-moderate',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.setting.how-to-moderate'),
            type: 'textarea',
        })

        .registerPermission({
            permission: 'discussion.supportAiRespondToOp',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.permission.respond-to-op'),
            icon: 'fas fa-robot',
        }, 'reply')
        .registerPermission({
            permission: 'discussion.supportAiRespondToReplies',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.permission.respond-to-replies'),
            icon: 'fas fa-robot',
        }, 'reply')
        .registerPermission({
            permission: 'discussion.supportAiRespondToMentions',
            label: app.translator.trans('muhammedsaidckr/support-ai.admin.permission.respond-to-mentions'),
            icon: 'fas fa-robot',
        }, 'reply')
        .registerPage(ChatGptSettings);
});
