import ru from '@/core/static/messages'

const customMessages = {
  alpha: (_: any, { locale = '' }) => {
    const before = 'Поле может содержать только '
    switch (locale) {
      case 'en':
        return before + 'латиницу'
      case 'ru':
        return before + 'кириллицу'
      default:
        return ru.messages.alpha
    }
  },
  alpha_dash: (_: any, { locale = '' }) => {
    const before = 'Поле может содержать только цифры, дефис и '
    switch (locale) {
      case 'en':
        return before + 'латиницу'
      case 'ru':
        return before + 'кириллицу'
      default:
        return ru.messages.alpha_dash
    }
  },
  alpha_spaces: (_: any, { locale = '' }) => {
    const before = 'Поле может содержать только '
    const after = ' и пробелы'
    switch (locale) {
      case 'en':
        return before + 'латиницу' + after
      case 'ru':
        return before + 'кириллицу' + after
      default:
        return ru.messages.alpha_spaces
    }
  },
  alpha_num: (_: any, { locale = '' }) => {
    const before = 'Поле может содержать только '
    const after = ' и цифры'
    switch (locale) {
      case 'en':
        return before + 'латиницу' + after
      case 'ru':
        return before + 'кириллицу' + after
      default:
        return ru.messages.alpha_num
    }
  },
  alpha_dash_spaces: 'Поле может содержать только буквы цифры и пробелы',
  required_ship: 'Обязательное поле',
  max_size: (_: any, { size = 0 }) => {
    const before = 'Максимальный общий размер файлов должен быть меньше, чем '
    let after = ''
    let currSize = Math.ceil(size / 1000)

    if (currSize < 1000) {
      after = `${currSize}KB`
      return before + after
    }

    currSize = Math.ceil(currSize / 1000)
    if (currSize < 1000) {
      after = `${currSize}MB`
      return before + after
    }
  },
  password: 'Поле может содержать только латиницу, цифры, знаки: @-_',
}

export default customMessages
