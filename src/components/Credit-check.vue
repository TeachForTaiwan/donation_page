<template lang="pug">
  #credit-check
    #form.form
      p.p 本會捐款徵信資料統計至2017/01/01止，查詢時請務必輸入個人（機構）完整名稱。若無法查詢到您個人（機構）的捐款收據，歡迎來電本會02-2345-6225財務組洽詢。
      label.label(for="date-s")
        .text 捐款起日
        p.control
          input#date-s.input(
            name="dateS",
            type="date",
            :class="{ 'is-danger': errors.has('dateS') }",
            v-model="formData.dateS",
            v-validate="'required'"
            )
          span.help.is-danger(v-show="errors.has('dateS')") {{ errors.first('dateS') }}
      label.label(for="date-e")
        .text 捐款迄日
        p.control
          input#date-e.input(
            name="dateE",
            type="date",
            :class="{ 'is-danger': errors.has('dateE') }",
            v-model="formData.dateE",
            v-validate="'required'"
            )
          span.help.is-danger(v-show="errors.has('dateE')") {{ errors.first('dateE') }}
      label.label(for="name")
        .text 捐款人（機構）姓名
        p.control
          input#name.input(
            name="name",
            type="text",
            :class="{ 'is-danger': errors.has('name') }",
            placeholder="請輸入捐款人（機構）姓名",
            v-model="formData.name",
            v-validate="'required'"
            )
          span.help.is-danger(v-show="errors.has('name')") {{ errors.first('name') }}
      .btn-container
        .btn(@click="handleSearch") 查詢
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
import swal from 'sweetalert2';

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
  methods: {
    validateForm() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((result) => {
          if (result) {
            console.log(result);
            // eslint-disable-next-line
            console.log('Form validate success!');
            resolve(result);
            return;
          }
          const errorMsg = 'validateForm: 請檢查表單資料';
          reject(errorMsg);
        });
      });
    },
    handleSearch() {
      this.validateForm()
        .then(() => {
          console.log('success');
        })
        .catch((errMsg) => {
          console.error(errMsg);
          swal(
            '請檢查填寫的資料',
            '您填寫的資料可能有誤，請確認有無漏填',
            'warning',
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../node_modules/sweetalert2/dist/sweetalert2.min.css);
.form {
  max-width: 580px;
  .label {
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
