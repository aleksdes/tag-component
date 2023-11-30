import useApi from '@/assets/js/helpers/useApi'

export interface IMetaBaseStore {
  current_page: number
  per_page: number
  total: number
}
export interface IBaseStore {
  meta: IMetaBaseStore
  loading: boolean
  filter: any
  [key: string]: any
}

export interface IBaseStoreGetters {
  getLoading: (state: IBaseStore) => boolean
  getItems: (state: IBaseStore) => any
  getItem: (state: IBaseStore) => any
  getMeta: (state: IBaseStore) => IMetaBaseStore
  getPage: (state: IBaseStore) => number
  getPerPage: (state: IBaseStore) => number
  getTotal: (state: IBaseStore) => number
  getFilter: (state: IBaseStore) => any
  getItemsForOptions: (state: IBaseStore) => any
  [key: string]: any
}

export interface IBaseStoreActions {
  setData: (data: any) => void
  setItems: (items: any[]) => void
  setMeta: (meta: IMetaBaseStore) => void
  setFilter: (filters: any, url?: string) => void
  fetchData: (filter?: any, url?: string) => Promise<any>
  deleteData: (id: string) => Promise<any>
  [key: string]: any
}

const filterParams = (params: any) => {
  if (!params) return null
  return Object.keys(params).reduce((acc: any, curr) => {
    if (params[curr] !== null && params[curr] !== undefined) {
      acc[curr] = params[curr]
    }
    return acc
  }, {})
}

const getters: IBaseStoreGetters = {
  getLoading(state: IBaseStore): boolean {
    return state.loading
  },
  getItems(state: IBaseStore): any {
    return state.items
  },
  getItem(state: IBaseStore): any {
    return state.item
  },
  getItemsForOptions(state: IBaseStore): any {
    return state.items.map((item: any) => {
      return {
        ...item,
        label: item.name,
        code: item.extid || item.id,
      }
    })
  },
  getMeta(state: IBaseStore): IMetaBaseStore {
    return state.meta || {}
  },
  getPage(state: IBaseStore): number {
    return state.meta.current_page || 0
  },
  getPerPage(state: IBaseStore): number {
    return state.meta.per_page || 0
  },
  getTotal(state: IBaseStore): number {
    return state.meta.total || 0
  },
  getFilter(state: IBaseStore): any {
    return state.filter
  },
}

const actions: (apiUrl?: string | '') => IBaseStoreActions = (apiUrl: string | '' =''): IBaseStoreActions => {
  return {
    getItemById(id: number | string): any {
      return this.items.find((item: any) => item.extid === id || item.id === id) || null
    },
    getItemsByIds(ids: number[]): any[] | null {
      if (!ids || !!ids.length) return null
      return ids.reduce((acc: any[], curr: number) => {
        const findItem = this.items.find((item: any) => item.extid === curr || item.id === curr) || null
        if (findItem) {
          acc.push(findItem)
        }
        return acc
      },[])
    },

    resetStore() {
      this.items = []
      this.item = null
      this.meta = {
        ...this.meta,
        current_page: 0,
        total: 0,
      }
    },

    setData(data: any) {
      if (data.data) {
        this.items = data.data
      }
      if (data.meta) {
        this.meta = data.meta
      }
    },

    setItems(items: any[]) {
      this.items = items
    },

    setMeta(meta: IMetaBaseStore) {
      this.meta = meta
    },

    setFilter(filters: any = {}, url  = '') {
      const currentFilters: any = {
        ...this.filter,
        ...filters,
      }

      this.filter = filterParams(currentFilters)
      this.fetchData(this.filter, url)
    },

    delFilter() {
      this.filter = {}
    },

    async fetchData(filter: any = {}, url= '') {
      const filteredFilters = filterParams(filter)
      this.loading = true
      const result: any = await useApi.get(apiUrl + url, null, { params: filteredFilters })
      this.loading = false

      if (
        result.errors ||
        (result.data && Array.isArray(result.data) && !result.data.length) ||
        (result.data && !result.data.data)
      )
        return result

      this.setData(result.data)
      return result
    },

    async fetchDataById(filter: any = {}, url = '') {
      const filteredFilters = filterParams(filter)
      this.loading = true
      const result: any = await useApi.get(apiUrl + url, null, { params: filteredFilters })
      this.loading = false

      if (result.errors) return result
      this.item = result.data
      return result
    },

    async fetchDataWithoutStore(filter: any = {}, url = '') {
      const filteredFilters = filterParams(filter)
      const result: any = await useApi.get(apiUrl + url, null, { params: filteredFilters })
      return result
    },

    async deleteData(url: string) {
      const result: any = await useApi.delete(apiUrl + url, null)
      if (!result.errors) {
        await this.fetchData()
      }

      return result
    },
  }
}

const state: IBaseStore = {
  meta: {
    current_page: 0,
    per_page: 1000,
    total: 0,
  },
  filter: {},
  items: [],
  item: null,
  loading: false,
}
export default { state, getters, actions }
