<template>
  <view class="container">
    <view class="tabs-wrap">
      <u-tabs
        :list="tablist"
        @click="tabClick"
        lineColor="#5a5a5a"
        lineWidth="24"
        :activeStyle="{
          color: '#373737',
          fontWeight: 'bold',
          transform: 'scale(1.05)'
        }"
        :inactiveStyle="{ color: '656565', transform: 'scale(1)' }"
      ></u-tabs>
    </view>
    <view class="transaction_data">
      <view class="data_header">
        <view class="_title"> 交易数据 </view>
        <view class="more">
          更多
          <u-icon name="arrow-right" color="#456fb7 " size="12"></u-icon>
        </view>
        <view class="fittags">
          <view :class="item.active ? '_tag_active' : '_tag'" v-for="(item, index) in filterList" :key="index" @click="fitClick(index)">
            {{ item.label }}
          </view>
        </view>
      </view>
      <view class="data_item_wrap">
        <view class="data_item" v-for="item in dataData" :key="item.id">
          <view class="item_t">
            {{ item.title }}
            <u-icon class="icon-arrow-down-fill" name="arrow-down-fill" color="#949494 " size="12"></u-icon>
          </view>
          <view class="item_today">
            <text class="num">{{ item.value }}</text>
            <text v-if="item.title === '支付金额' || item.title === '客单价'">万元</text>
            <text v-if="item.title === '支付转换率'">%</text>
          </view>
          <view class="item_y">
            昨日{{ item.oldValue }}
            <text v-if="item.title === '支付金额' || item.title === '客单价'">万元</text>
            <text v-if="item.title === '支付转换率'">%</text>
          </view>
        </view>
        <!--				<view class="data_item">-->
        <!--					<view class="item_t">-->
        <!--						支付订单数-->
        <!--						<u-icon class="icon-arrow-down-fill" name="arrow-down-fill" color="#949494 " size="12"></u-icon>-->
        <!--					</view>-->
        <!--					<view class="item_today">-->
        <!--						<text class="num">1034</text>-->
        <!--					</view>-->
        <!--					<view class="item_y">-->
        <!--						昨日202-->
        <!--					</view>-->
        <!--				</view>-->
        <!--				<view class="data_item">-->
        <!--					<view class="item_t">-->
        <!--						支付买家数-->
        <!--						<u-icon class="icon-arrow-down-fill" name="arrow-down-fill" color="#949494 " size="12"></u-icon>-->
        <!--					</view>-->
        <!--					<view class="item_today">-->
        <!--						<text class="num">4987</text>-->
        <!--					</view>-->
        <!--					<view class="item_y">-->
        <!--						昨日195-->
        <!--					</view>-->
        <!--				</view>-->
        <!--				<view class="data_item">-->
        <!--					<view class="item_t">-->
        <!--						客单价-->
        <!--						<u-icon class="icon-arrow-down-fill" name="arrow-down-fill" color="#949494 " size="12"></u-icon>-->
        <!--					</view>-->
        <!--					<view class="item_today">-->
        <!--						<text class="num">1.86</text>-->
        <!--						万元-->
        <!--					</view>-->
        <!--					<view class="item_y">-->
        <!--						昨日0.83万元-->
        <!--					</view>-->
        <!--				</view>-->
        <!--				<view class="data_item">-->
        <!--					<view class="item_t">-->
        <!--						商品访客数-->
        <!--						<u-icon class="icon-arrow-down-fill" name="arrow-down-fill" color="#949494 " size="12"></u-icon>-->
        <!--					</view>-->
        <!--					<view class="item_today">-->
        <!--						<text class="num">1894</text>-->
        <!--						元-->
        <!--					</view>-->
        <!--					<view class="item_y">-->
        <!--						昨日265-->
        <!--					</view>-->
        <!--				</view>-->
        <!--				<view class="data_item">-->
        <!--					<view class="item_t">-->
        <!--						支付转化率-->
        <!--						<u-icon class="icon-arrow-down-fill" name="arrow-down-fill" color="#949494 " size="12"></u-icon>-->
        <!--					</view>-->
        <!--					<view class="item_today">-->
        <!--						<text class="num">13.55%</text>-->
        <!--					</view>-->
        <!--					<view class="item_y">-->
        <!--						昨日 18.24%-->
        <!--					</view>-->
        <!--				</view>-->
        <view class="open">
          展开趋势图
          <u-icon name="arrow-down" color="#999 " size="16"></u-icon>
        </view>
      </view>
    </view>
    <view class="gap-btn">
      <view class="left">
        <u-icon name="info-circle-fill" color="#3276c9 " size="20"></u-icon>
        <text>点击查看全店商品数据表现</text>
      </view>
      <view class="right">
        <u-button type="info" :plain="true" text="去查看" style="color: #333"></u-button>
      </view>
    </view>
    <view class="comprehensive_data">
      <view class="comprehensive_data_header">
        <view class="_title"> 综合数据 </view>
        <view class="_label">
          <text> 「成长」 页也可查看一下数据 </text>
          <u-icon name="arrow-right" color="#666 " size="16"></u-icon>
        </view>
      </view>

      <view class="store_item_wrap">
        <view class="store_item">
          <view class="item_label">
            <text>店铺综合体验星级</text>
            <u-icon name="question-circle" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="level">
            <u-rate :count="5" disabled v-model="value"></u-rate>
            <u-icon name="arrow-right" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="tips"> 暂无星级数据 </view>
        </view>
        <view class="store_item">
          <view class="item_label">
            <text>消费者服务体验分</text>
            <u-icon name="question-circle" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="level">
            <text>- -</text>
            <u-icon name="arrow-right" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="tips"> 暂无星级数据 </view>
        </view>
        <view class="store_item bt">
          <view class="item_label">
            <text>成长层级</text>
            <u-icon name="question-circle" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="level">
            <text>- -</text>
            <u-icon name="arrow-right" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="tips"> 数据不足，暂无层级 </view>
        </view>
        <view class="store_item bt">
          <view class="item_label">
            <text>店铺评价分</text>
            <u-icon name="question-circle" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="level">
            <text>- -</text>
            <u-icon name="arrow-right" color="#9d9d9d " size="16"></u-icon>
          </view>
          <view class="tips"> 评价书不足，暂无数据 </view>
        </view>
      </view>
      <view class="end">
        <text class="label"> 经营目标 </text>
        <view class="value">
          <text>设置经营目标，科学管理日常运营</text>
          <u-icon name="arrow-right" color="#666 " size="16"></u-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { StorageCache } from '@/hook/ClassHook'

export default {
  data() {
    return {
      tablist: [
        {
          name: '概况'
        },
        {
          name: '交易'
        },
        {
          name: '流量'
        },
        {
          name: '商品'
        },
        {
          name: '客服'
        },
        {
          name: '营销'
        },
        {
          name: '物流'
        },
        {
          name: '财经'
        },
        {
          name: '手工'
        }
      ],
      filterList: [
        {
          label: '实时',
          active: false
        },
        {
          label: '昨日',
          active: false
        },
        {
          label: '7日',
          active: false
        },
        {
          label: '30日',
          active: false
        }
      ],
      count: 5,
      value: 5,
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
    let dataStorage = this.storage.get('dataData')
    if (dataStorage) {
      this.dataData = dataStorage
    }
  },
  methods: {
    tabClick(item) {
      console.log('item >>:', item)
    },
    fitClick(index) {
      this.filterList.map((item, i) => {
        item.active = index === i ? true : false
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background: #f5f5f5;
}

.container {
  .tabs-wrap {
    background-color: #ffffff;
    border-bottom: 1rpx solid #eee;
  }

  .transaction_data {
    display: flex;
    margin-top: 20rpx;
    background-color: #ffffff;
    box-sizing: border-box;
    flex-direction: column;

    .data_header {
      display: flex;
      align-items: center;
      padding: 30rpx;
      border-bottom: 1rpx solid #eee;

      ._title {
        font-size: 38rpx;
      }

      .more {
        display: flex;
        color: #456fb7;
        align-items: center;
        margin-left: 30rpx;
      }

      .fittags {
        display: flex;
        margin-left: 20rpx;

        ._tag_active {
          display: flex;
          align-items: center;
          border: 1rpx solid #c7cccf;
          background-color: #eff8ff;
          box-sizing: border-box;
          color: #456fb7;
          margin-left: 20rpx;
          border-radius: 10rpx;
          padding: 5rpx 10rpx;
        }

        ._tag {
          display: flex;
          align-items: center;
          background-color: #f6f6f6;
          box-sizing: border-box;
          margin-left: 20rpx;
          border-radius: 10rpx;
          padding: 5rpx 10rpx;
        }
      }
    }

    .data_item_wrap {
      padding: 30rpx;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      box-sizing: border-box;
      border-bottom: 1rpx solid #eee;

      .data_item {
        width: 31%;
        background-color: #ebebeb;
        padding: 20rpx;
        box-sizing: border-box;
        margin-bottom: 20rpx;
        display: flex;
        flex-direction: column;
        border-radius: 10rpx;

        .item_t {
          display: flex;
          align-items: center;
          font-size: 26rpx;
          color: #665;

          .icon-arrow-down-fill {
            margin-left: 10rpx;
          }
        }

        .item_today {
          font-size: 32rpx;
          margin: 20rpx 0;

          .num {
            font-size: 40rpx;
          }
        }

        .item_y {
          color: #999;
          font-size: 28rpx;
        }
      }
    }

    .open {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 26rpx;
    }
  }

  .gap-btn {
    padding: 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;

    .left {
      display: flex;
      align-items: center;

      text {
        margin-left: 10rpx;
      }
    }
  }

  .comprehensive_data {
    margin-top: 20rpx;
    background-color: #ffffff;
    // padding: 30rpx;
    box-sizing: border-box;
    border-bottom: 1rpx solid #eee;

    .comprehensive_data_header {
      display: flex;
      justify-content: space-between;
      padding: 30rpx;
      padding-bottom: 0;

      ._title {
        display: flex;
        align-items: center;
      }

      ._label {
        display: flex;
        align-items: center;
        color: #666666;
      }
    }

    .store_item_wrap {
      display: flex;
      flex-wrap: wrap;

      .store_item {
        width: 50%;
        padding: 30rpx;
        box-sizing: border-box;

        .item_label {
          display: flex;
          align-items: center;

          text {
            margin-right: 5rpx;
          }
        }

        .level {
          display: flex;
          align-items: center;
          padding: 10rpx 0;
        }
      }

      .bt {
        border-top: 1rpx solid #eee;
      }
    }

    .end {
      display: flex;
      padding: 30rpx;
      box-sizing: border-box;
      background-color: #ffffff;
      justify-content: space-between;
      border-top: 1rpx solid #eee;

      .value {
        color: #456fb7;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
