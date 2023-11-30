import { rules, ruMessages } from '@/plugins/vee-validate'

export const required = (value: string) =>
  !!value || 'Обязательно для заполнения'

export const requiredList = (value: any[]) => value.length > 0 || 'Обязательно'

export const time = (value: string): boolean | string => {
  if (!value) {
    return true
  }
  const isValid = /^[0-9]:[0-5][0-9]:[0-5][0-9]$/.test(value)
  return isValid || 'Некорректное время'
}

export const email = (value: string) => {
  const pattern =
    /^(!#\$%&'\*\+-\/=\?\^_`\{\|\}~)|(\w+)|([a-zA-Z]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || !value || 'Некорректный email'
}

export const urlLink = (value: string): string | boolean => {
  const isValid = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i.test(
    value,
  )
  return isValid || 'Некорректное название сайта'
}

export const phone = (value: string) => {
  const pattern = /\+7 \(9\d{2}\) \d{3} \d{2}-\d{2}/g

  const pattern2 = /7\9\d{2}\d{3}\d{2}\d{2}/g

  return (
    pattern.test(value) ||
    pattern2.test(value) ||
    !value ||
    'Некорректный номер телефона'
  )
}

export const passwordLength = (value: string) =>
  value.length >= 10 || 'Пароль должен состоять минимум из 10 символов'

export const password = (value: string) =>
  !(value.search(/[a-zA-Zа-яА-Я]/g) === -1 || value.search(/[0-9]/g) === -1) ||
  'Пароль должен состоять из букв и цифр'

export const name = (value: string) => {
  const pattern = /^([А-Яа-яЁё -])*$/
  return (
    pattern.test(value) ||
    !value ||
    'Допускается только кириллица, дефис и пробел'
  )
}

/**
 * Максимальная длина
 * @param length
 */
export const max =
  (length: number) =>
    (value: string): true | string =>
      !value ||
      rules.max.validate(value, { length }) ||
      ruMessages.messages.max.replace('{length}', String(length))

/**
 * Минимальная длина
 * @param length
 */
export const min =
  (length: number) =>
    (value: string | null | undefined): true | string =>
      !value ||
      value.length === 0 ||
      rules.min.validate(value, { length }) ||
      ruMessages.messages.min.replace('{length}', String(length))

/**
 * Цифры
 */
export const numeric = (value: string): true | string =>
  !value || rules.numeric.validate(value) || ruMessages.messages.numeric

/**
 * Буквы
 * @param locale
 */
export const alpha =
  (locale: 'en' | 'ru' | string | undefined) =>
    (value: string): true | string =>
      !value ||
      rules.alpha.validate(value, { locale }) ||
      ruMessages.messages.alpha(value, { locale })

/**
 * Буквы и цифры
 * @param locale
 */
export const alpha_num =
  (locale: 'en' | 'ru' | string | undefined) =>
    (value: string): true | string =>
      !value ||
      rules.alpha_num.validate(value, { locale }) ||
      ruMessages.messages.alpha_num(value, { locale })

/**
 * Буквы локали и пробелы
 * @param locale
 */
export const alpha_spaces =
  (locale: 'en' | 'ru' | string | undefined) =>
    (value: string): true | string =>
      !value ||
      rules.alpha_spaces.validate(value, { locale }) ||
      ruMessages.messages.alpha_spaces(value, { locale })

/**
 * Буквы локали и пробелы
 * @param value
 */
export const cyrillic_alpha_spaces = (value: string): true | string =>
  /^(\d|[а-яА-Я]|\s)*$/.test(value) ||
  ruMessages.messages.cyrillic_alpha_spaces

/**
 * Набор правил для логина
 */
export const loginSet = [max(64)]

/**
 * Набор правил для пароля
 */
export const passwordSet = [password, passwordLength, max(50), alpha_num('en')]

/**
 * Валидация формата изображения
 * @param image
 */
export const imageExtension = (image: File | string): boolean | string => {
  if (typeof image === 'object' && image instanceof File) {
    return (
      /.jp(e)?g|.gif|.png/.test(image.name) ||
      'Изображение должно быть в формате .jpeg, .png, .jpg или .gif'
    )
  } else {
    return true
  }
}
/**
 * Валидация pdf формата
 * @param file
 */
export const filePdf = (file: File | string): boolean | string => {
  if (typeof file === 'object' && file instanceof File) {
    return /.pdf/.test(file.name) || 'Файл должен быть в формате pdf'
  } else {
    return true
  }
}
