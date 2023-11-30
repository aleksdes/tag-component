import { sha256 } from 'js-sha256'
const useUniqId = () => new Date()
  .getTime()
  .toString(36)
  .replace(/\D/gu, Math.random().toString())
  .replace(/\./gu, '')
  .substring(0, 16)

export default useUniqId

export const useGetFingerprintId = async () => {
  const navigator: any = window.navigator
  const userAgent = navigator.userAgent || ''
  const language = navigator.language || ''
  const timeZone = new Date().getTimezoneOffset()
  const screenParams = [screen.width, screen.height, screen.colorDepth].join()
  const doNotTrack = navigator.doNotTrack || ''
  const hardwareConcurrency = navigator.hardwareConcurrency || ''
  const maxTouchPoints = navigator.maxTouchPoints || ''
  const deviceMemory = String(navigator.deviceMemory) || ''
  const pdfViewerEnabled = String(navigator.pdfViewerEnabled) || ''
  const gpu = navigator.gpu ? await navigator.gpu.getPreferredCanvasFormat() : ''

  const getVideoCardInfo = () => {
    const gl = document.createElement('canvas').getContext('webgl')

    if (!gl) return {
      vendor: 'no webgl',
      renderer: 'no webgl',
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')

    return debugInfo ? {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    } : {
      vendor: 'no WEBGL_debug_renderer_info',
      renderer: 'no WEBGL_debug_renderer_info',
    }
  }

  const stringParams = [
    userAgent,
    language,
    timeZone,
    screenParams,
    doNotTrack,
    hardwareConcurrency,
    maxTouchPoints,
    deviceMemory,
    pdfViewerEnabled,
    gpu,
    getVideoCardInfo().vendor + getVideoCardInfo().renderer,
  ].join()

  const fingerprintId = sha256(stringParams)
  return fingerprintId
}
