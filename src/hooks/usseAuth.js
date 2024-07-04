import axios from "axios";

const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';

const usseAuth = async (path, data) => {
  const url = `${urlBase}${path}`
  await axios.post(url, data)
    .then(res => {
      'token' in res.data && localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.error(err))
}

export default usseAuth
