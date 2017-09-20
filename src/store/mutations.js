// import { app } from '../main';
// import * as types from './mutation-types';

export const state = {
  pageTitle: '', // 主標題
  progress: '', // 進度條
  progressText: {
    step1: '捐款說明',
    step2: '填寫基本資料',
    step3: '選擇付款方式',
  },
  formData: JSON.parse(sessionStorage.getItem('formData')) || {
    name: '', // *
    code: '',
    idNumber: '',
    gender: '',
    birth: '',
    tel: '', // *
    email: '', // *
    county: '', // *
    district: '', // *
    address: '', // *
    receipt: '', // *
    receiptTitle: '', // *
    receiptCheck: 'true',
    receiptCounty: '', // *
    receiptDistrict: '', // *
    receiptAddress: '', // *
    campaign: 'true',
    newsletter: 'true',
    amount: '',
    paymentType: '',
    card: '', // *
    cardNumber: '', // *
    expireM: '', // *
    expireY: '', // *
  },
};

export const mutations = {
  updatePageTitle(state, text) {
    state.pageTitle = text;
  },
  updateProgress(state, step) {
    state.progress = step;
  },
  updateProgressText(state, step) {
    state.progressText = step;
  },
  updateFormData(state, data) {
    state.formData = data;
  },
};

export const actions = {

};
