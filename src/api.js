import axios from 'axios'

const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'chaya-apitest';
export { apiUrl, apiPath };


// 取得產品
export function getProductsAPI() {
    const url = `${apiUrl}/api/${apiPath}/products`;
    console.log(url);
    return axios.get(url)
  }

