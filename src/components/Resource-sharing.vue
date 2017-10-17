<template lang="pug">
  #resource-sharing
    section
      .block
        article
          .title.title--main
            | 資源分享能給教育現場
            br
            | 有力的幫助
          p 您的資源分享是十分寶貴且重要的，無論是有形或無形的支持，我們都十分珍惜，且希望每份資源皆能妥善到位並有效的被運用。TFT 也期待能透過資源分享的形式邀請您一同參與在改善偏鄉教育的行列中！
        .img-container
          img(src="https://dummyimage.com/250x250/000/fff", alt="")
    section
      .block
        article
          .title 負責任的分享與捐贈
          p 因此，TFT 鼓勵捐物者們一起進行「負責任的分享與捐贈」，我們可以先透過了解教師們在教學現場的需求，篩選良好且適合的物資進行捐贈，事後一同關心物資是否妥善被運用，將行善捐贈深化為一種帶著溫暖與情意的資源分享。
          p 同時，TFT 教師們也會力行「負責任的申請與使用」，教師們將審慎進行需求評估與規劃，在充分與校方討論評估學生或學校需求後始提出申請，並在接受物資後回覆捐贈者，承諾妥善的使用。
    section
      .block
        .title.title--is-full 資源分享流程
        figure
          figcaption
            .order 01
            .text 檢閱需求
          .content
            p 請您先點閱 #[strong TFT 教師對外需求表單]，檢閱 TFT 教師目前提出的教學現場既有需求，瀏覽是否有您願意捐贈的項目。
        figure
          figcaption
            .order 02
            .text 填寫回應需求表單
          .content
            p 若需求表單與您願意捐贈項目相處，請點選 #[strong 回應既有需求] 表單填寫。
            hr
            p 若您願意捐贈的項目與既有需求不相符，但您仍有意願捐贈者，請點選 #[strong 回應常見需求] 表單填寫
        figure
          figcaption
            .order 03
            .text TFT教師將進行申請
          .content
            p TFT非常珍惜每一項物資捐贈，因此我們收到您的捐贈意願後，會通知教師端物資捐贈相關訊息，並確認是否能在您提出的期限內順利媒合；若教師在期限內並無此項物資需求，我們將會寄信向您聯繫、確認，以期每一項物資皆能發揮其最大效用。
        .tips 建議先瀏覽以下常見需求
    section
      .block.col-12
        .title.title--is-strong.col-4 填寫需求表單
        .btn-container.col-8
          .btn.btn--is-primary
            img.icon(src="https://dummyimage.com/100x100/000/fff", alt="")
            .text TFT教師對外需求表單
          .btn
            img.icon(src="https://dummyimage.com/100x100/000/fff", alt="")
            .text 回應既有需求
          .btn
            img.icon(src="https://dummyimage.com/100x100/000/fff", alt="")
            .text 回應常見需求
    section
      .block
        .title.title--is-full TFT教師常見的資源需求
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.$store.dispatch('updatePageTitle', '資源分享');
  },
};
</script>

<style lang="scss" scoped>
@import '../sass/variable';
@import '../sass/mixin/breakpoint';
$fz-title: 24px;
$fz-title--l: 28px;
#resource-sharing {
  margin: 0 auto 70px;
  padding: 0 5px;
  color: $c-grey-2;
  line-height: 1.72;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(2n) {
    background: #FCFCFC;
  }
}

.block {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto 50px;
  @include for-tablet-landscape-up {
    align-items: flex-start;
    flex-direction: row;
    margin: 50px auto;
  }
  article {
    flex: 1;
    line-height: 1.71;
    margin: 30px auto;
  }
  .img-container {
    text-align: center;
    flex: 1;
    @include for-tablet-landscape-up {
      text-align: right;
    }
  }
  .title {
    font-size: $fz-title;
    font-weight: 300;
    color: $c-grey-2;
    line-height: 1.5;
    &--main {
      font-size: $fz-title--l;
      font-weight: 300;
      color: $c-grey-2;
    }
    &--is-strong {
      font-weight: bold;
    }
    &--is-full {
      font-size: $fz-title;
      font-weight: bold;
      text-align: center;
      width: 100%;
      margin: 0 auto 30px;
      @include for-tablet-landscape-up {
        margin: 50px auto;
      }
    }
  }
  .tips {
    width: 100%;
    text-align: center;
    color: $c-green;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    @include for-tablet-portrait-up {
      flex-direction: row;
    }
  }
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 185px;
    height: 185px;
    color: $c-white;
    border-radius: 0;
    margin: 20px;
    padding: 0;
    flex: 1;
    background-color: $c-grey;
    &--is-primary {
      background-color: $c-red;
    }
    @include for-tablet-portrait-up {
      margin: 35px 20px;
      width: 185px;
      height: 185px;
    }
    @include for-tablet-landscape-up {
      margin: 25px;
    }
    .icon {
      margin: 10px auto;
    }
  }
}

.is-strong {
  font-weight: bold;
}

figure {
  margin: 0;
  padding: 0;
  flex: 1;
  padding: 1em;
}

@for $i from 1 through 12 {
  .col-#{$i} {
    flex: $i;
  }
}
</style>

