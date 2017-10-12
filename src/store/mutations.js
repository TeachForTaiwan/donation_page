// import { app } from '../main';
import * as types from './mutation-types';

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

export const actions = {
  updatePageTitle({ commit }, text) {
    commit(types.PAGETITLE, text);
  },
  updateProgress({ commit }, step) {
    commit(types.PROGRESS, step);
  },
  updateProgressText({ commit }, steps) {
    commit(types.PROGRESSTEXT, steps);
  },
  updateFormData({ commit }, data) {
    commit(types.FORMDATA, data);
  },
};

export const mutations = {
  /* eslint-disable no-shadow, no-param-reassign */
  [types.PAGETITLE](state, text) {
    state.pageTitle = text;
  },
  [types.PROGRESS](state, step) {
    state.progress = step;
  },
  [types.PROGRESSTEXT](state, steps) {
    state.progressText = steps;
  },
  [types.FORMDATA](state, data) {
    state.formData = data;
  },
};
