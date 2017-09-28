<template lang="pug">
  #support
    h2.title 捐款
    p.p TFT 與有師資需求的偏鄉小學合作，支持該班級優秀教師的培育。
    p.p 您的捐款不但是校園的及時雨，也投資了陪伴幾十位孩子兩年的守護者、啟發者、改變者。
    .icon-container
      a.link(href="app.html#/single")
        figure.figure
          img.icon(src="../assets/icon_single.png", alt="線上單次捐款")
          figcaption.text 線上單次捐款
      a.link(href="app.html#/regular")
        figure.figure
          img.icon(src="../assets/icon_regular.png", alt="線上定期定額捐款")
          figcaption.text 線上定期定額捐款
    v-collapsible(expandable)
      li
        v-collapsible-header
          .link.btn-block.is-primary 其他捐款方式
        v-collapsible-body
          v-collapsible(expandable).collapsible-sub
            li
              v-collapsible-header
                .c-header 郵政劃撥
              v-collapsible-body
                p 戶名：社團法人台灣為台灣而教協會
                p 劃撥帳號：22770108
                p 請您至郵局索取劃撥單，並請詳細填寫捐款人聯絡資料，完成劃撥。
            li
              v-collapsible-header
                .c-header 銀行匯款
              v-collapsible-body
                p 匯款銀行：國泰世華銀行忠孝分行 (銀行代號013)
                p 匯款帳號：011-03-500962-2
                p 請您至任何一家銀行匯款，匯款完成後請務必來電告知以便本會開立收據。
            li
              v-collapsible-header
                .c-header 郵寄支票
              v-collapsible-body
                p 請您將支票寄至「11071 台北市信義區忠孝東路四段512號11樓之4  財團法人為台灣而教教育基金會」，並於背面註明禁止背書轉讓。
            li
              v-collapsible-header
                .c-header 海外捐款
              v-collapsible-body
                p 請您連線至 #[a.link(href="https://www.ammado.com/", target="_blank", rel="noopener") Ammado 外幣捐款網站]並指定捐款 Teach For Taiwan。
                p.list-title 如有在美國扣抵聯邦所得稅需求
                p 請透過「世台聯合基金會（STUF United Fund Inc., 簡稱世台會或 STUF）」捐款。世台會為在美國登記成立之非營利慈善機構，為美國聯邦政府核可之 501(c)(3) 組織。由世台基金會開立的捐贈收據，在美國都可依法扣抵聯邦所得稅。
                .btn.btn--oversea(@click="showModal('oversea-info')") 看捐款說明
                modal(name="oversea-info", width="90%", height="auto", :scrollable="true", :pivotY="0.15")
                  .modal-title 捐款說明
                  .list-title 支票：
                  p 請先填寫「#[a.link(href="https://drive.google.com/file/d/0B0CiDc-A6fLiVU9zWlVtSHdTTWc/view", target="_blank", rel="noopener") Pledge Form ]」，完成填寫此表後，連同支票寄到以下地址。（捐款時請於支票備註中，指名捐贈 Donor-designated fund - Teach For Taiwan）
                  p
                    | STUF United Fund <br>
                    | P.O. Box 520511 <br>
                    | Flushing, NY 11352 <br>
                  .list-title 匯款：
                  p 捐款者若以匯款的方式捐贈，請先行聯繫 世台基金會 黃怡妙 總幹事，世台基金會會提供詳細匯款資訊給您。捐款時請指名捐贈 Donor-designated fund - Teach For Taiwan
                  p
                    | 黃總幹事聯絡資訊： <br>
                    | STUF United Fund <br>
                    | Executive Director <br>
                    | Yi-Miao Huang <br>
                    | Tel : #[a.link(href="tel:9144330415") 914-433-0415] <br>
                    | Email: #[a.link(href="mailto:yimiao@stufunited.org") yimiao@stufunited.org] <br>
                  p 若有疑問請參考#[a.link(href="https://drive.google.com/file/d/0B0CiDc-A6fLic3hSV2w4aHZ6QTg/view", target="_blank", rel="noopener") 世台基金會指定捐款流程]，或來信詢問 #[a.link(href="mailto:ailing@teach4taiwan.org") ailing@teach4taiwan.org]，謝謝。

    a.link.btn-block.is-primary(href="app.html#/credit-check")
      span 捐款徵信
    h3.title.title--sub 其他支持方式
    .block-container
      a.link.btn-block.btn-block--half.is-green(href="#")
        span 募款專案
      a.link.btn-block.btn-block--half.is-green(href="#")
        span 資源分享
    article.article
      p.p TFT非常珍惜每一份得來不易的資源，務求透明、公開、有效地使用每一塊錢。 教師計畫是 TFT 的核心任務，為了讓孩子有好的教育品質，我們積極招募多元人才、以貼近現場需求的核心特質為篩選要件、以注重「教學力」與「領導力」的課程培養教師、以提供專業即時的支持系統維持老師之教學品質與熱情、並以嚴謹的方法評估計畫成效。
      p.p 同時，我們也相當重視組織的永續性，並期望用專業支持使命，因此在行政、財務、資訊與內部人才選用育留等各面向上都竭力不斷提升，讓每一塊錢發揮最大的效益，是我們對自我的要求，也是對捐款人負責的態度。
      p.p 如您對支出的項目與用途有任何疑問，非常歡迎您隨時與我們聯繫，我們很樂意提供您更詳細的說明。詳細財報，歡迎參考 104 學年度支出收入報表。
      p.p 有您的投入，我們就能支持越多有熱情、有能力的老師進入更多有需要的地方！
      p.p 不論是捐款、師資培訓資源、相關硬體資源（如：汽機車、電腦、辦公會議空間等）、或是您的專業（如：紀錄片拍攝、平面設計、會計財務、行銷管理等），以及設備資源（如：單眼相機、數位相機、DV 攝影機、腳架等），都有可能成為幫助我們更好的關鍵。
      p.p 若是您希望捐款，請直接透過本頁面捐贈。若有其它資源分享的意願，煩請您寄信至 #[a.link(href="mailto:tft@teach4taiwan.org") tft@teach4taiwan.org]，我們將儘快與您聯繫。
</template>

<script>

export default {
  data() {
    return {
    };
  },
  components: {
  },
  mounted() {
  },
  methods: {
    showModal(modalName) {
      this.$modal.show(modalName);
    },
    hideModal(modalName) {
      this.$modal.hide(modalName);
    },
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
  cursor: pointer;
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
      font-size: 22px;
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
  font-size: 22px;
  transition: .1s ease-in-out;
  &:hover {
    opacity: .7;
  }
  @include for-phone-only {
    font-size: calc(3vw + 6px);
  }
}

.collapsible {
  border: none;
  box-shadow: none;
  margin: 10px 0 20px;
  .collapsible {
    margin: 0;
  }
  .btn-block {
    margin: 0;
  }
  li {
    padding: 0;
  }
  .collapsible-header {
    padding: 0;
    text-align: center;
    font-size: 20px;
    @include for-phone-only {
      font-size: calc(3vw + 6px);
    }
    cursor: pointer;
    .c-header {
      background: #9B9B9B;
      color: #FFF;
      padding: .3em 0;
      transition: .1s ease-in-out;
      &:hover {
        opacity: .7;
      }
    }
  }
  .collapsible-body {
    background: #E9E9E9;
    color: #57585A;
    p {
      padding: 0;
      margin: 0;
    }
    .list-title {
      font-weight: bold;
    }
  }
}

.collapsible-sub {
  .collapsible-body {
    padding: 1em 2em;
  }
}

.btn--oversea {
  display: inline-block;
  margin: 2em 0;
  background: $c-grey-2;
}

.v--modal-overlay[data-modal="oversea-info"] {
  .modal-title {
    font-size: 1.8em;
    margin: .5em auto;
    text-align: center;
    font-weight: bold;
    color: $c-primary;
  }
  .list-title {
    font-size: 1.2em;
    padding: 0 16px;
    margin: 1em auto 0;
  }
  p {
    padding: 8px 16px 8px;
  }
}

p {
  .link {
    border-bottom: 1px dashed rgba($c-text, .5);
    transition: .1s ease-in-out;
    &:hover {
      border-bottom: 1px dashed $c-text;
    }
  }
}
</style>
