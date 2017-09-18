<template lang="pug">
  #credit-check
    #form.form
      p.p 本會捐款徵信資料統計至2017/01/01止，查詢時請務必輸入個人（機構）完整名稱。若無法查詢到您個人（機構）的捐款收據，歡迎來電本會02-2345-6225財務組洽詢。
      label.label(for="date-s")
        .text 捐款起日
        input#date-s.input(name="date-s", type="date", v-model="formData.dateS")
      label.label(for="date-e")
        .text 捐款迄日
        input#date-e.input(name="date-e", type="date", v-model="formData.dateE")
      label.label(for="name")
        .text 捐款人（機構）姓名
        input#name.input(name="name", type="text", placeholder="請輸入捐款人（機構）姓名", v-model="formData.name")
      .btn-container
        .btn 查詢
    .result
      ul.result__head
        li.item 捐款日期
        li.item 收據編號
        li.item 捐款人
        li.item 捐款金額
        li.item 捐款用途
      ul.result__data
        li.item {{ result.date }}
        li.item {{ result.number }}
        li.item {{ result.name }}
        li.item {{ result.amount }}
        li.item {{ result.usage }}

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
        date: '',
        number: '123',
        name: 'testName',
        amount: '500',
        usage: 'M/4wj6',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 580px;
  .label{
    align-items: center;
  }
}

.p {
  line-height: 1.72;
}

.btn-container {
  .btn {
    padding: 0.5em 4em;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.result {
  max-width: 580px;
  margin: 0 auto 150px;
  font-size: 14px;
  color: #57585a;
  &__head {
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #979797;
    padding: 1em 0;
    .item {
      flex: 1;
      text-align: center;
    }
  }
  &__data {
    display: flex;
    justify-content: space-around;
    .item {
      flex: 1;
      text-align: center;
    }
  }
}
</style>

