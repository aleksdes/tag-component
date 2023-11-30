import * as veeValidateRules from 'vee-validate/dist/rules'
import { ValidationRule, ValidationRuleSchema } from 'vee-validate/dist/types/types'

export interface ICustomRules {
  age: ValidationRule
  email: ValidationRule
  alpha_dash_spaces: ValidationRuleSchema
  required_ship: ValidationRuleSchema
  password: ValidationRuleSchema
}

const customRules: ICustomRules = {
  age: {
    validate(value: string, params: any) {
      const age = 'age' in params && params.age
      const year = new Date(value).getFullYear()
      const nowYear = new Date().getFullYear()
      return Math.abs(nowYear - year) > +age || 'Возраст должен быть больше 18 лет'
    },
    params: ['age'],
  },

  email: {
    validate(value: string | string[], { multiple }: Record<string, any> = {}) {
      const defaultValidate = veeValidateRules.email.validate(value, {
        multiple,
      })

      if (!defaultValidate) {
        return defaultValidate
      }

      const re = /^.{0,64}@.{1,63}$/

      if (multiple && !Array.isArray(value)) {
        value = String(value)
          .split(',')
          .map((emailStr) => emailStr.trim())
      }

      if (Array.isArray(value)) {
        return value.every((val) => re.test(String(val)))
      }

      return re.test(String(value))
    },
  },

  alpha_dash_spaces: {
    validate(value: string | string[]): boolean {
      const re = /^(\d|\w|[а-яА-Я]|\s)*$/

      if (Array.isArray(value)) {
        return value.every((val) => re.test(String(val)))
      }

      return re.test(String(value))
    },
  },

  password: {
    validate(value: string | string[]): boolean {
      const re = /^(\d|\w|@|-|\.)*$/

      if (Array.isArray(value)) {
        return value.every((val) => re.test(String(val)))
      }

      return re.test(String(value))
    },
  },

  required_ship: {
    validate(value: any) {
      return value ? value?.id : false
    },
  },
}

export default customRules
