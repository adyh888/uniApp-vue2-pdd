<template>
  <view class="content">
    <u-navbar leftText="" title="" :safeAreaInsetTop="true" :bgColor="bgColor">
      <view class="u-nav-slot" slot="left">
        <!-- 	<u-icon name="arrow-left" size="19"></u-icon> -->
        <view class="nav_left">
          <u--image src="/static/logo.png" width="60" height="60" radius="10"></u--image>
          <text class="name">寺庙好货全球站</text>
          <u--image class="icon-eye" src="../../static/icon-eye.png" mode="" width="16" height="16"> </u--image>
          <u-icon name="arrow-down-fill" color="#FFFFFF" size="16"></u-icon>
        </view>

        <view class="nav_right">
          <view class="nav_r_item">
            <u-icon name="search" color="#FFFFFF" size="32"></u-icon>
            <text>搜索</text>
          </view>
          <view class="nav_r_item">
            <u-icon name="scan" color="#FFFFFF" size="32"></u-icon>
            <text>扫码</text>
          </view>
        </view>
      </view>
    </u-navbar>
    <view class="box-wrap">
      <view class="box-item" v-for="(item, index) in NodeList" :key="index">
        <view class="item-value">
          {{ item.num }}
        </view>
        <view class="item-label">
          {{ item.label }}
        </view>
      </view>
    </view>
    <view class="notice">
      <u--image src="../../static/16_04.png" width="60" height="16" mode="aspectFit"></u--image>
      <u-line direction="column" :hairline="false" length="16"></u-line>
      <view class="txt"> 物流服务承诺未兑现（缺货）处理... </view>
      <view class="link"> 查看 </view>
      <u-badge max="99" :value="99"></u-badge>
      <u-icon name="arrow-right" color="#ccc" size="20"></u-icon>
    </view>
    <view class="nav-wrap">
      <view class="nav-item" v-for="(item, index) in navList" :key="index" @click="routerFn(item.pageRouter)">
        <u--image :src="item.imgpath" width="32" height="32" mode="aspectFit"></u--image>
        <view class="_label">
          {{ item.label }}
        </view>
      </view>
    </view>
    <!-- <view class="state">
			<view class="state-title">
				<u-icon name="/static/icon-warning.png" size="28"></u-icon>
				<view class="_title">
					店铺状态：沉默店铺
				</view>
			</view>
			<view class="tips">
				超过30天无订单，当前店铺活跃状态为沉默店铺，成交即可激活店铺提升流量
			</view>
			<view class="btn">
				<u-button type="primary" color="#db4534" shape="circle" text="立即激活"></u-button>
			</view>
		</view> -->
    <!-- 	<view class="newstore">
			<inyColumn></inyColumn>
		</view> -->
    <view class="tuiguang">
      <u-icon class="icon-close" name="close" color="#ccc" size="20"></u-icon>
      <view class="_tips"> 开通自动提预算，流量不中断 </view>
      <view class="data_label"> 优质推广达到日限额时，自动提升日预算，保障推广不中断，预计单量可提升10%。不满意随时关闭。 </view>
      <view class="data_num"> </view>
      <view class="_bot">
        <view class="bt-label"> 商品管理 </view>
        <view class="bt_r">
          <u-button color="#db4534" shape="circle" :plain="true" text="去绑定"></u-button>
        </view>
      </view>
    </view>
    <!-- 	<view class="nodata">
			<view class="_tips">
				还未发布商品，绑定第三方店铺一件搬家上货
			</view>
			<view class="data_label">
				在售商品数
			</view>
			<view class="data_num">
				<text>0</text>个
			</view>
			<view class="_bot">
				<view class="bt-label">
					商品管理
				</view>
				<view class="bt_r">
					<u-button color="#db4534" shape="circle" :plain="true" text="去开通"></u-button>
				</view>
			</view>
		</view>
		 -->
    <view class="img-box">
      <u--image src="/static/217_03.png" width="100%" height="90" mode="aspectFit"></u--image>
    </view>
  </view>
</template>

<script>
import inyColumn from '@/components/inycolumn/inycolumn.vue'
import { StorageCache } from '@/hook/ClassHook'
export default {
  components: {
    inyColumn
  },
  data() {
    return {
      title: 'Hello',
      storage: new StorageCache(),
      bgColor: '#db4534 ',
      NodeList: [
        {
          label: '待支付',
          num: 10
        },
        {
          label: '待发货',
          num: 5
        },
        {
          label: '待签收',
          num: 15
        },
        {
          label: '退款/售后',
          num: 0
        },
        {
          label: '支付金额',
          num: '1.6万'
        },
        {
          label: '支付订单数',
          num: 165
        },
        {
          label: '商品访客数',
          num: 0
        },
        {
          label: '商品评价数',
          num: 983
        }
      ],
      navList: [
        {
          label: '商品管理',
          imgpath: '/static/nav_01.png',
          pageRouter: ''
        },
        {
          label: '订单管理',
          imgpath: '/static/nav_02.png',
          pageRouter: ''
        },
        {
          label: '数据中心',
          imgpath: '/static/nav_03.png',
          pageRouter: '/pages/data/data'
        },
        {
          label: '营销活动',
          imgpath: '/static/nav_04.png',
          pageRouter: ''
        },
        {
          label: '推广平台',
          imgpath: '/static/nav_05.png',
          pageRouter: ''
        },
        {
          label: '营销工具',
          imgpath: '/static/nav_06.png',
          pageRouter: ''
        },
        {
          label: '多多直播',
          imgpath: '/static/nav_07.png',
          pageRouter: ''
        },
        {
          label: '多多进宝',
          imgpath: '/static/nav_08.png',
          pageRouter: ''
        },
        {
          label: '商品体检',
          imgpath: '/static/nav_09.png',
          pageRouter: ''
        },
        {
          label: '商品评价',
          imgpath: '/static/nav_10.png',
          pageRouter: '/pages/setIndex/setIndex'
        }
      ]
    }
  },
  onLoad() {},
  onShow() {
    let indexData = this.storage.get('indexData')
    if (indexData) {
      this.NodeList.forEach(item => {
        indexData.forEach(item2 => {
          if (item.label === item2.title) {
            item.num = item2.value
          }
        })
      })
    }
  },
  methods: {
    routerFn(url) {
      uni.navigateTo({
        url: url
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
  width: 100vw;
  background: url('../../static/bg.png') repeat-x;
  background-size: 100% 100%;
}

.content {
  width: 100vw;
}

/deep/ .u-navbar__content__left {
  padding: 0;
}

.u-nav-slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
  padding: 20px 0;
  background-color: #db4534;
  z-index: 999;

  .nav_left {
    display: flex;
    align-items: center;
    padding-left: 20rpx;

    .name {
      margin-left: 20rpx;
      color: #ffffff;
      font-size: 28rpx;
    }

    .icon-eye {
      margin: 0 20rpx;
    }
  }

  .nav_right {
    display: flex;
    align-items: center;
    justify-content: center;

    .nav_r_item {
      margin-right: 50rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #ffffff;
    }
  }
}

.box-wrap {
  width: calc(100vw - 60rpx);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 200rpx;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 30rpx;
  border-radius: 30rpx;

  .box-item {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 25rpx 0;

    .item-value {
      font-size: 28rpx;
      color: #333;
    }

    .item-label {
      color: #666;
      font-size: 24rpx;
      margin-top: 8rpx;
    }
  }
}

.notice {
  width: calc(100vw - 60rpx);
  margin: 20rpx auto;
  background-color: #ffffff;
  border-radius: 20rpx;
  padding: 30rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;

  .txt {
    width: 320rpx;
    margin-left: 20rpx;
    font-size: 26rpx;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .link {
    margin: 0 20rpx;
    font-size: 26rpx;
    color: #55aaff;
  }
}

.nav-wrap {
  width: calc(100vw - 60rpx);
  margin: 30rpx auto;
  display: flex;
  background-color: #ffffff;
  border-radius: 30rpx;
  padding: 0 30rpx;
  padding-bottom: 30rpx;
  box-sizing: border-box;
  flex-wrap: wrap;

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    flex-direction: column;
    margin-top: 30rpx;
  }

  ._label {
    margin-top: 16rpx;
    font-size: 24rpx;
  }
}

.state {
  width: calc(100vw - 60rpx);
  padding: 30rpx;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30rpx;
  box-sizing: border-box;

  .state-title {
    display: flex;
    align-items: center;

    ._title {
      font-size: 32rpx;
      color: #333;
      margin-left: 15rpx;
    }
  }

  .tips {
    font-size: 26rpx;
    color: #666;
    margin-top: 20rpx;
  }

  .btn {
    margin-top: 30rpx;
  }
}

.nodata {
  width: calc(100vw - 60rpx);
  padding: 30rpx;
  margin: 30rpx auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 30rpx;

  ._tips {
    font-size: 32rpx;
    color: #333;
  }

  .data_label {
    font-size: 26rpx;
    color: #999;
    margin-top: 30rpx;
  }

  .data_num {
    text {
      font-size: 36rpx;
      margin-right: 8rpx;
    }

    font-size: 28rpx;
    color: #333;
  }

  ._bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26rpx;
    color: #999;
  }
}

.tuiguang {
  width: calc(100vw - 60rpx);
  padding: 30rpx;
  margin: 30rpx auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 30rpx;
  position: relative;

  .icon-close {
    position: absolute;
    top: 20rpx;
    right: 20rpx;
  }

  ._tips {
    font-size: 32rpx;
    color: #333;
  }

  .data_label {
    font-size: 26rpx;
    color: #999;
    margin-top: 15rpx;
  }

  .data_num {
    text {
      font-size: 36rpx;
      margin-right: 8rpx;
    }

    font-size: 28rpx;
    color: #333;
  }

  ._bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26rpx;
    color: #999;
    padding-top: 40rpx;
  }
}

.img-box {
  width: calc(100vw - 60rpx);
  margin: 0rpx auto;
  box-sizing: border-box;
}
</style>
