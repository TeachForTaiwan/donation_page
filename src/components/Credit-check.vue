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
      table.table(summary="捐款（贈）明細條列")
        thead.thead
          tr
            th 捐款日期
            th 收據編號
            th 捐款人
            th 捐款金額
            th 捐款用途
        tbody.tbody
          tr
            td {{ result.date }}
            td {{ result.number }}
            td {{ result.name }}
            td {{ result.amount }}
            td {{ result.usage }}
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
        date: '', // 捐款日期
        receiptNumber: '', // 收據編號
        name: '', // 捐款人
        amount: '', // 捐款金額
        usage: '', // 捐款用途
      },
    };
  },
  mounted() {
    this.$store.commit('updatePageTitle', '捐款徵信');
    this.$store.commit('updateProgress', 'hide');
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
  .table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    word-break: break-all;
    .thead {
      th {
        color: #57585a;
        font-weight: normal;
        padding: 10px 0;
      }
      border-bottom: 2px solid #979797;
    }
    td {
      color: #57585a;
      max-width: 200px;
      padding: 10px 0;
    }
  }
}
</style>
