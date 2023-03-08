import axios from "axios";

const api = axios.create({
  baseURL: 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
})

export default api