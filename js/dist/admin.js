(()=>{var t={n:e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},d:(e,s)=>{for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const s=flarum.core.compat["admin/app"];var a=t.n(s);function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}const r=flarum.core.compat["admin/components/ExtensionPage"];var o=function(t){var e,s;function r(){return t.apply(this,arguments)||this}s=t,(e=r).prototype=Object.create(s.prototype),e.prototype.constructor=e,n(e,s);var o=r.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!1},o.content=function(){return m("div",{className:"ExtensionPage-settings"},m("div",{className:"container"},m("div",{className:"Form"},this.buildSettingComponent({setting:"msc-chatgpt.api_key",type:"text",label:a().translator.trans("msc-chatgpt.admin.settings.api_key_label"),help:a().translator.trans("msc-chatgpt.admin.settings.api_key_help",{a:m("a",{href:"https://platform.openai.com/account/api-keys",target:"_blank",rel:"noopener"})}),placeholder:"sk-..."}),this.buildSettingComponent({setting:"msc-chatgpt.model",type:"dropdown",options:{"gpt-3.5-turbo-instruct":"gpt-3.5-turbo-instruct"},label:a().translator.trans("msc-chatgpt.admin.settings.model_label"),help:a().translator.trans("msc-chatgpt.admin.settings.model_help",{a:m("a",{href:"https://platform.openai.com/docs/models/overview",target:"_blank",rel:"noopener"})})}),this.buildSettingComponent({setting:"msc-chatgpt.max_tokens",type:"number",label:a().translator.trans("msc-chatgpt.admin.settings.max_tokens_label"),help:a().translator.trans("msc-chatgpt.admin.settings.max_tokens_help",{a:m("a",{href:"https://help.openai.com/en/articles/4936856",target:"_blank",rel:"noopener"})}),default:100}),this.buildSettingComponent({setting:"msc-chatgpt.user_prompt",type:"text",label:a().translator.trans("msc-chatgpt.admin.settings.user_prompt_label"),help:a().translator.trans("msc-chatgpt.admin.settings.user_prompt_help")}),this.buildSettingComponent({setting:"msc-chatgpt.user_prompt_badge_text",type:"text",label:a().translator.trans("msc-chatgpt.admin.settings.user_prompt_badge_label"),help:a().translator.trans("msc-chatgpt.admin.settings.user_prompt_badge_help")}),this.buildSettingComponent({setting:"msc-chatgpt.enable_on_discussion_started",type:"boolean",label:a().translator.trans("msc-chatgpt.admin.settings.enable_on_discussion_started_label"),help:a().translator.trans("msc-chatgpt.admin.settings.enable_on_discussion_started_help")}),this.buildSettingComponent({type:"flarum-tags.select-tags",setting:"msc-chatgpt.enabled-tags",label:a().translator.trans("msc-chatgpt.admin.settings.enabled_tags_label"),help:a().translator.trans("msc-chatgpt.admin.settings.enabled_tags_help"),options:{requireParentTag:!1,limits:{max:{secondary:0}}}}),m("div",{className:"Form-group"},this.submitButton()))))},r}(t.n(r)());a().initializers.add("msc-support-ai",(function(){a().extensionData.for("msc-support-ai").registerSetting({setting:"msc-support-ai.openai-api-key",label:a().translator.trans("msc-support-ai.admin.setting.api-key"),type:"input"}).registerSetting({setting:"msc-support-ai.model",label:a().translator.trans("msc-support-ai.admin.setting.model"),type:"select",options:{"gpt-4":"GPT-4","gpt-3.5-turbo-instruct":"GPT-3.5 Turbo"}}).registerSetting({setting:"msc-support-ai.openai-api-organisation",label:a().translator.trans("msc-support-ai.admin.setting.api-organisation"),type:"input"}).registerSetting({setting:"msc-support-ai.username",label:a().translator.trans("msc-support-ai.admin.setting.username"),type:"input"}).registerSetting({setting:"msc-support-ai.persona",label:a().translator.trans("msc-support-ai.admin.setting.persona"),type:"textarea"}).registerSetting({setting:"msc-support-ai.how-to-moderate",label:a().translator.trans("msc-support-ai.admin.setting.how-to-moderate"),type:"textarea"}).registerPermission({permission:"discussion.supportAiRespondToOp",label:a().translator.trans("msc-support-ai.admin.permission.respond-to-op"),icon:"fas fa-robot"},"reply").registerPermission({permission:"discussion.supportAiRespondToReplies",label:a().translator.trans("msc-support-ai.admin.permission.respond-to-replies"),icon:"fas fa-robot"},"reply").registerPermission({permission:"discussion.supportAiRespondToMentions",label:a().translator.trans("msc-support-ai.admin.permission.respond-to-mentions"),icon:"fas fa-robot"},"reply").registerPage(o)}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map