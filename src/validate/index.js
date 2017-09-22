// http://vee-validate.logaretm.com/rules.html#custom-messages
const dict = {
  zh_TW: {
    custom: {
      name: {
        required: '此欄位必填',
      },
      code: {
        max: '請輸入正確的企業代碼',
      },
      idNumber: {
        max: '請輸入正確的身分證字號／統一編號',
      },
      tel: {
        required: '此欄位必填',
      },
      email: {
        required: '此欄位必填',
        email: '請輸入正確的 email 格式',
      },
      address: {
        required: '通訊地址必填',
      },
      receiptTitle: {
        required: '此欄位必填',
      },
      receiptAddress: {
        required: '收據地址必填',
      },
      dateS: {
        required: '此欄位必填',
      },
      dateE: {
        required: '此欄位必填',
      },
      amountSel: {
        required: '請選擇或輸入捐款金額',
      },
      amountInput: {
        required: '請輸入捐款金額',
      },
      method: {
        required: '請選擇付款方式',
      },
      // 定期定額
      amount: {
        required: '請輸入捐款金額',
        min_value: '捐款金額至少為 100 元',
      },
      card: {
        required: '請選擇信用卡別',
      },
      cardNumber: {
        required: '請輸入卡號',
        digits: '請輸入正確的卡號',
      },
      expireM: {
        required: '請選擇有效月年',
      },
      expireY: {
        required: '請選擇有效月年',
      },
      cardCheckNumber: {
        required: '請輸入末 3 碼',
        digits: '請輸入末 3 碼',
      },
    },
  },
};

export default dict;
