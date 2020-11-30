//跨域代理前缀
 const API_PROXY_PREFIX='http://192.168.1.2:8666/api'
 const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
//const BASE_URL = "api"
module.exports = {
  LOGIN: `${BASE_URL}/auth/login`,
  ROUTES: `${BASE_URL}/routes`,
  GOODS: `${BASE_URL}/goods`,
  GOODS_COLUMNS: `${BASE_URL}/columns`,
}
