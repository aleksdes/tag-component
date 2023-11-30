import Vue from 'vue'
import * as veeValidateRules from 'vee-validate/dist/rules'
import customRules from '@/core/static/validateCustomRules'
import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import ru from '@/core/static/messages'
import customMessages from '@/core/static/validateCustomMessages'

export const rules: { [key: string]: any } = {
  ...veeValidateRules,
  ...customRules,
}

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, validation)
}

export const ruMessages: { [key: string]: any } = {
  ...ru,
  messages: { ...ru.messages, ...customMessages },
}

localize('ru', ruMessages)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
