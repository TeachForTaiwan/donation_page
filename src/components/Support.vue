<template lang="pug">
  #support
    h2.title 捐款
    p.p TFT 與有師資需求的偏鄉小學合作，支持該班級優秀教師的培育。
    p.p 您的捐款不但是校園的及時雨，也投資了陪伴幾十位孩子兩年的守護者、啟發者、改變者。
    .icon-container
      router-link.link(to="single")
        figure.figure
          img.icon(src="../assets/icon_single.png", alt="單次捐款")
          figcaption.text 單次捐款
      router-link.link(to="regular")
        figure.figure
          img.icon(src="../assets/icon_regular.png", alt="定期定額捐款")
          figcaption.text 定期定額捐款
    router-link.link.btn-block.is-primary(to="credit-check")
      span 捐款徵信
    h3.title.title--sub 其他支持方式
    .block-container
      router-link.link.btn-block.btn-block--half.is-green(to="")
        span 募款專案
      router-link.link.btn-block.btn-block--half.is-green(to="")
        span 資源分享
    article.article
      p.p TFT非常珍惜每一份得來不易的資源，務求透明、公開、有效地使用每一塊錢。 教師計畫是 TFT 的核心任務，為了讓孩子有好的教育品質，我們積極招募多元人才、以貼近現場需求的核心特質為篩選要件、以注重「教學力」與「領導力」的課程培養教師、以提供專業即時的支持系統維持老師之教學品質與熱情、並以嚴謹的方法評估計畫成效。
      p.p 同時，我們也相當重視組織的永續性，並期望用專業支持使命，因此在行政、財務、資訊與內部人才選用育留等各面向上都竭力不斷提升，讓每一塊錢發揮最大的效益，是我們對自我的要求，也是對捐款人負責的態度。
      p.p 如您對支出的項目與用途有任何疑問，非常歡迎您隨時與我們聯繫，我們很樂意提供您更詳細的說明。詳細財報，歡迎參考 104 學年度支出收入報表。
      p.p 有您的投入，我們就能支持越多有熱情、有能力的老師進入更多有需要的地方！
      p.p 不論是捐款、師資培訓資源、相關硬體資源（如：汽機車、電腦、辦公會議空間等）、或是您的專業（如：紀錄片拍攝、平面設計、會計財務、行銷管理等），以及設備資源（如：單眼相機、數位相機、DV 攝影機、腳架等），都有可能成為幫助我們更好的關鍵。
      p.p 若是您希望捐款，請直接透過本頁面捐贈。若有其它資源分享的意願，煩請您寄信至 tft@teach4taiwan.org，我們將儘快與您聯繫。
</template>

<script>
export default {
  data() {
    return {
      formData: {
        dateS: '',
        dateE: '',
        name: '',
      },
      result: {
        date: '', // 捐款日期
        receiptNumber: '', // 收據編號
        name: '', // 捐款人
        amount: '', // 捐款金額
        usage: '', // 捐款用途
      },
    };
  },
  mounted() {
    this.$store.commit('updatePageTitle', '支持 TFT');
    this.$store.commit('updateProgress', 'hide');
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import '../sass/variable';
@import '../sass/mixin/breakpoint';

#support {
  max-width: 500px;
  margin: 0 auto 70px;
  padding: 0 5px;
  color: #58585B;
  line-height: 1.72;
}

.link {
  &:after {
    display: none;
  }
}

.title {
  margin: 1.5em auto 1em;
  text-align: center;
  font-size: 30px;
  &--sub {
    margin: 2em auto 1em;
    font-size: 24px;
  }
}

.icon-container {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px;
  .link {
    flex: 0.48;
    margin: 0;
    padding: 0;
    &:after {
      display: none;
    }
  }
  .figure {
    background: $c-primary;
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding: 30px;
    box-sizing: border-box;
    height: 100%;
    cursor: pointer;
    transition: .1s ease-in-out;
    @include for-phone-only {
      padding: 20px 0 20px;
    }
    &:hover {
      opacity: .7;
    }
    .icon {
      object-fit: contain;
      @include for-phone-only {
        max-width: 70%;
      }
    }
    .text {
      padding: 20px 0 0;
      font-size: 24px;
      @include for-phone-only {
        font-size: calc(3vw + 6px);
      }
    }
  }
}

.is-primary {
  background: $c-primary;
  color: #FFF;
}

.is-green {
  background: $c-green;
  color: #FFF;
}

.block-container {
  display: flex;
  justify-content: space-between;
  .btn-block {
    flex: .48;
  }
}

.btn-block {
  width: 100%;
  display: block;
  text-align: center;
  padding: .5em 0;
  margin: 5px 0 20px;
  font-size: 24px;
  transition: .1s ease-in-out;
  &:hover {
    opacity: .7;
  }
  @include for-phone-only {
    font-size: calc(3vw + 6px);
  }
}
</style>
