import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

export default class ChatGptSettings extends ExtensionPage {
    oninit(vnode) {
        super.oninit(vnode);
        this.loading = false;
    }

    content() {
        return (
            <div className="ExtensionPage-settings">
                <div className="container">
                    <div className="Form">
                        {this.buildSettingComponent({
                            setting: 'muhammedsaidckr/support-ai.api_key',
                            type: 'text',
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.api_key_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.api_key_help', {
                                a: <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener"/>,
                            }),
                            placeholder: 'sk-...',
                        })}
                        {this.buildSettingComponent({
                            setting: 'muhammedsaidckr/support-ai.model',
                            type: 'dropdown',
                            options: {
                                'gpt-3.5-turbo-instruct': 'gpt-3.5-turbo-instruct'
                            },
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.model_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.model_help', {
                                a: <a href="https://platform.openai.com/docs/models/overview" target="_blank" rel="noopener"/>,
                            }),
                        })}
                        {this.buildSettingComponent({
                            setting: 'muhammedsaidckr/support-ai.max_tokens',
                            type: 'number',
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.max_tokens_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.max_tokens_help', {
                                a: <a href="https://help.openai.com/en/articles/4936856" target="_blank" rel="noopener"/>,
                            }),
                            default: 100,
                        })}
                        {this.buildSettingComponent({
                            setting: 'muhammedsaidckr/support-ai.user_prompt',
                            type: 'text',
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.user_prompt_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.user_prompt_help'),
                        })}
                        {this.buildSettingComponent({
                            setting: 'muhammedsaidckr/support-ai.user_prompt_badge_text',
                            type: 'text',
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.user_prompt_badge_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.user_prompt_badge_help'),
                        })}
                        {this.buildSettingComponent({
                            setting: 'muhammedsaidckr/support-ai.enable_on_discussion_started',
                            type: 'boolean',
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.enable_on_discussion_started_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.enable_on_discussion_started_help'),
                        })}
                        {this.buildSettingComponent({
                            type: 'flarum-tags.select-tags',
                            setting: 'muhammedsaidckr/support-ai.enabled-tags',
                            label: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.enabled_tags_label'),
                            help: app.translator.trans('muhammedsaidckr/support-ai.admin.settings.enabled_tags_help'),
                            options: {
                                requireParentTag: false,
                                limits: {
                                    max: {
                                        secondary: 0,
                                    },
                                },
                            },
                        })}
                        <div className="Form-group">{this.submitButton()}</div>
                    </div>
                </div>
            </div>
        );
    }
}
