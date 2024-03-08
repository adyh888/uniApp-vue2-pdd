export class StorageCache {
  constructor() {}

  set(key: string, data: any) {
    try {
      if (data) {
        // @ts-ignore
        uni.setStorageSync(key, JSON.stringify(data))
      }
    } catch (e) {
      throw new Error(`本地储存错误,${e}`)
    }
  }

  get(key: string) {
    try {
      // @ts-ignore
      const storageInfo = uni.getStorageSync(key)
      if (storageInfo) {
        return JSON.parse(storageInfo)
      }
    } catch (e) {
      throw new Error(`获取本地储存错误,${e}`)
    }
  }

  remove(key: string) {
    try {
      // @ts-ignore
      uni.removeStorageSync(key)
    } catch (e) {
      throw new Error(`删除本地储存错误,${e}`)
    }
  }

  clear() {
    try {
      // @ts-ignore
      uni.clearStorageSync()
    } catch (e) {
      throw new Error(`移除本地储存错误,${e}`)
    }
  }
}
