import {useWebSocket} from '@vueuse/core'

export interface IBaseSocketData {
  status: any
  data: any
  send: (data: any) => void
  open: () => void
  close: () => void
}

export interface IBaseSocket {
  socket: IBaseSocketData
  [key: string]: any
}

export interface IBaseSocketGetters {
  getSocket: (state: IBaseSocket) => IBaseSocketData
  getSocketData: (state: IBaseSocket) => any
  getSocketStatus: (state: IBaseSocket) => any
  [key: string]: any
}

export interface IBaseSocketActions {
  open: () => void
  close: () => void
  send: (data: any) => void
  init: (url: string, options: any) => void
  [key: string]: any
}

const getters: IBaseSocketGetters = {
  getSocket(state: IBaseSocket): IBaseSocketData {
    return state.socket
  },
  getSocketData(state: IBaseSocket): any {
    return state.socket.data
  },
  getSocketStatus(state: IBaseSocket): any {
    return state.socket.status
  },

}

const actions: (socketUrl: string) => IBaseSocketActions = (socketUrl: string): IBaseSocketActions => {
  return {
    open() {
      this.socket.open()
    },

    close() {
      this.socket.close()
    },

    send(data: any) {
      this.socket.send(data)
    },

    init(url: string, options: any) {
      this.socket = useWebSocket(url, options)
    },
  }
}

const state: IBaseSocket = {
  socket: {
    status: null,
    data: null,
    send: (data: any) => ({}),
    open: () => ({}),
    close: () => ({}),
  },
}
export default { state, getters, actions }
