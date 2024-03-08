<template>
  <view style="padding: 30rpx">
    <view style="font-size: 36rpx; color: red; letter-spacing: 4rpx">首页数据:</view>
    <view style="display: flex; flex-wrap: wrap; width: 100%; justify-content: flex-start">
      <view style="flex: 1; min-width: calc((100% - 10px) / 2)" v-for="item in indexData" :key="item.id">
        <view style="display: flex; align-items: center; margin-top: 20rpx">
          <view style="font-size: 28rpx; margin-right: 10rpx">{{ item.title }}:</view>
          <view style="width: 150rpx">
            <u--input placeholder="请输入内容" border="surround" clearable v-model="item.value"></u--input>
          </view>
        </view>
      </view>
    </view>
    <view style="font-size: 36rpx; color: red; letter-spacing: 4rpx; margin-top: 100rpx">数据中心:</view>
    <view style="display: flex; flex-wrap: wrap; width: 100%; justify-content: flex-start">
      <view style="flex: 1; min-width: calc((100% - 10px) / 1)" v-for="item in dataData" :key="item.id">
        <view style="display: flex; align-items: center; margin-top: 20rpx">
          <view style="font-size: 28rpx; margin-right: 10rpx">{{ item.title }}:</view>
          <view style="width: 150rpx">
            <u--input placeholder="请输入内容" border="surround" clearable v-model="item.value"></u--input>
          </view>
          <view style="font-size: 28rpx; margin-right: 10rpx">{{ item.oldTitle }}:</view>
          <view style="width: 150rpx">
            <u--input placeholder="请输入内容" border="surround" clearable v-model="item.oldValue"></u--input>
          </view>
        </view>
      </view>
    </view>
    <view style="padding: 100rpx; margin-top: 50rpx">
      <u-button type="primary" text="确定" @click="confirmClick"></u-button>
    </view>
  </view>
</template>

<script>
import { StorageCache } from '@/hook/ClassHook'

export default {
  data() {
    return {
      indexData: [
        { id: 1, title: '待支付', value: 10 },
        { id: 2, title: '待发货', value: 20 },
        { id: 3, title: '待签收', value: 30 },
        { id: 4, title: '退款/售后', value: 40 },
        { id: 5, title: '支付金额', value: 50 },
        { id: 6, title: '支付订单数', value: 50 },
        { id: 7, title: '商品访问数', value: 50 },
        { id: 8, title: '商品评价数', value: 50 }
      ],
      dataData: [
        { id: 1, title: '支付金额', value: 10, oldTitle: '昨日支付金额', oldValue: 10 },
        { id: 2, title: '支付订单数', value: 20, oldTitle: '昨日支付订单', oldValue: 20 },
        { id: 3, title: '支付买家数', value: 30, oldTitle: '昨日支付买家', oldValue: 30 },
        { id: 4, title: '客单价', value: 40, oldTitle: '昨日客单价', oldValue: 40 },
        { id: 5, title: '商品访客数', value: 50, oldTitle: '昨日商品访客', oldValue: 50 },
        { id: 6, title: '支付转换率', value: 50, oldTitle: '昨日支付转换', oldValue: 50 }
      ],
      storage: new StorageCache()
    }
  },
  onShow() {
    let indexData = this.storage.get('indexData')
    let dataData = this.storage.get('dataData')
    if (indexData) {
      this.indexData = indexData
    }
    if (dataData) {
      this.dataData = dataData
    }
  },
  methods: {
    confirmClick() {
      let indexDataFilter = this.indexData.filter(item => item.value === '')
      if (indexDataFilter.length > 0) {
        uni.showToast({
          title: '不能为空',
          icon: 'error'
        })
        return
      }
      let dataDataFilter = this.dataData.filter(item => item.value === '')
      if (dataDataFilter.length > 0) {
        uni.showToast({
          title: '不能为空',
          icon: 'error'
        })
        return
      }
      this.storage.set('indexData', this.indexData)
      this.storage.set('dataData', this.dataData)
      uni.showToast({
        title: '保存成功',
        icon: 'success'
      })
      setTimeout(() => {
        uni.navigateBack()
      }, 1000)
    }
  }
}
</script>

<style lang="scss"></style>
