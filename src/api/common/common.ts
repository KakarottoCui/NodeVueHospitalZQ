import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError
} from 'axios'

import { ElMessage } from 'element-plus'

const baseUrl = 'http://localhost:8081'

const urlMap = {
  login: baseUrl + '/login',
  logout: baseUrl + '/logout',
  loginCheck: baseUrl + '/getUserInfo',
  getUserData: baseUrl + '/getUserData',
  uploadFile: baseUrl + '/uploadFile',
  regist: baseUrl + '/regist',

  findNmDrugList: baseUrl + '/nmDrug/queryList',
  findNmDrug: baseUrl + '/nmDrug/queryObject',
  addNmDrug: baseUrl + '/nmDrug/addNmDrug',
  editNmDrug: baseUrl + '/nmDrug/editNmDrug',

  findNmHospSubList: baseUrl + '/nmHospSub/queryList',
  findNmHospSub: baseUrl + '/nmHospSub/queryObject',
  addNmHospSub: baseUrl + '/nmHospSub/addNmHospSub',
  editNmHospSub: baseUrl + '/nmHospSub/editNmHospSub',

  findNmInfoList: baseUrl + '/nmInfo/queryList',
  findNmInfo: baseUrl + '/nmInfo/queryObject',
  addNmInfo: baseUrl + '/nmInfo/addNmInfo',
  editNmInfo: baseUrl + '/nmInfo/editNmInfo',

  findNmOrderList: baseUrl + '/nmOrder/queryList',
  findNmOrder: baseUrl + '/nmOrder/queryObject',
  addNmOrder: baseUrl + '/nmOrder/addNmOrder',
  editNmOrder: baseUrl + '/nmOrder/editNmOrder',

  findNmRxItemList: baseUrl + '/nmRxItem/queryList',
  findNmRxItem: baseUrl + '/nmRxItem/queryObject',
  addNmRxItem: baseUrl + '/nmRxItem/addNmRxItem',
  editNmRxItem: baseUrl + '/nmRxItem/editNmRxItem',

  findSysUserList: baseUrl + '/sysUser/queryList',
  findSysUser: baseUrl + '/sysUser/queryObject',
  addSysUser: baseUrl + '/sysUser/addSysUser',
  editSysUser: baseUrl + '/sysUser/editSysUser',

  getPic: baseUrl + '/public/',

  getAudio: baseUrl + '/getFile/1/',

  localPic: baseUrl + '/static/img/'
}

const getUserInfo = function () {
  const user = localStorage.getItem('userInfo')
  if (user) {
    return JSON.parse(user)
  } else {
    localStorage.removeItem('userInfo')
    return { uid: '' }
  }
}

const request = function (requestOpt) {
  try {
    requestOpt = requestOpt || {}
    if (!requestOpt.url) {
      return
    }
    let token = ''
    let userId = ''
    try {
      const obj = getUserInfo()
      token = obj.token
      userId = obj.uid
    } catch (e) {
      token = ''
      userId = ''
    }
    requestOpt.data = requestOpt.data || {}
    requestOpt.data['token'] = token
    requestOpt.data['userNo'] = userId
    requestOpt.method = requestOpt.method || 'post'
    requestOpt.headers = requestOpt.headers || {
      //'content-type': 'application/x-www-form-urlencoded',
      token: token,
      userNo: userId
    }
    requestOpt.timeout = requestOpt.timeout || 30000
    requestOpt.responseType = requestOpt.responseType || 'text'
    requestOpt.dataType = requestOpt.dataType || 'json'
    requestOpt.sslVerify = requestOpt.sslVerify || true
    requestOpt.success = requestOpt.success || function (res) {}
    requestOpt.fail = requestOpt.fail || function (res) {}
    requestOpt.complete = requestOpt.complete || function (res) {}

    axios({
      method: requestOpt.method,
      url: requestOpt.url,
      headers: requestOpt.headers,
      data: requestOpt.data
    })
      .then(function (response) {
        requestOpt.success(response)
        if (response.data.code == 401) {
          err('未登录')
          localStorage.removeItem('userInfo')
        }
      })
      .catch(function (error) {
        requestOpt.fail(error)
      })
  } catch (e) {
    //TODO handle the exception
    err('网络请求异常')
  }
}

const msg = function (msg) {
  ElMessage.info(msg)
}

const err = function (msg) {
  ElMessage.error(msg)
}

const warn = function (msg) {
  ElMessage.warning(msg)
}

const success = function (msg) {
  ElMessage.success(msg)
}

const getUrlParam = function (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export default {
  baseUrl,
  urlMap,
  getUserInfo,
  request,
  msg,
  err,
  warn,
  success,
  getUrlParam
}
