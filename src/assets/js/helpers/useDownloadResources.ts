import { notify } from '@/assets/js/helpers/useNotify'
const saveFile = async (blob: any, saveName: string) => {
  // Обнаружение поддержки браузером API.
  // API должен поддерживаться
  // и приложение не запущено в iframe.
  const supportsFileSystemAccess =
    'showSaveFilePicker' in window &&
    (() => {
      try {
        return window.self === window.top
      } catch {
        return false
      }
    })()
  // Если File System Access API поддерживается…
  if (supportsFileSystemAccess) {
    try {
      // Показать диалог сохранения файла.
      const windowCustom = window as any
      const handle = await windowCustom.showSaveFilePicker({
        suggestedName: saveName,
      })
      // Записать blob в файл.
      const writable = await handle.createWritable()
      await writable.write(blob)
      await writable.close()
      return
    } catch (err: any) {
      console.log('err', err.name)
      // Обработчик исключения, когда
      // пользователь отменил скачивание файла
      if (err.name === 'AbortError') {
        console.error(err.name, err.message)
        return
      }
    }
  }
  // Когда API доступа к файловой системе не поддерживается…
  // Сделать blob URL.
  const blobURL = URL.createObjectURL(blob)
  // Сделать невидимый HTML-элемент `<a download>`
  // и включить его в документ
  const a = document.createElement('a')
  a.href = blobURL
  a.download = saveName
  a.style.display = 'none'
  document.body.append(a)
  // Программно кликнуть по ссылке.
  a.click()
  // Уничтожить большой blob URL
  // и удалить ссылку из документа
  // после клика по ней
  setTimeout(() => {
    URL.revokeObjectURL(blobURL)
    a.remove()
  }, 1000)
}

const downloadResources = (url: string, fileName: string) => {
  const req: XMLHttpRequest = new XMLHttpRequest()
  req.open('GET', url, true)
  req.responseType = 'blob'
  const __fileName = fileName
  req.onload = async (event: any) => {
    const blob: Blob = req.response

    if (event.target.status === 404) {
      notify({ text: 'Невозможно загрузить документ. Документ поврежден либо не существует', title: 'Ошибка' })
      return
    }

    await saveFile(blob, fileName)
  }
  req.send()
}

export { downloadResources, saveFile }
