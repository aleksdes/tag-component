import { defineStore } from 'pinia'
import baseWebSocket, { IBaseSocket } from '@/store/baseWebSocket'
import {useWebSocket} from '@vueuse/core'

const useWebSocketStore = defineStore('webSocket', {
  getters: {
    ...baseWebSocket.getters,
  },

  actions: {
    ...baseWebSocket.actions(''),
  },

  state: (): IBaseSocket => ({
    ...baseWebSocket.state,
  }),
})
export default useWebSocketStore
