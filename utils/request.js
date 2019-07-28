import axios from 'axios'
// create instance of axios
import {getUser} from '@/utils/auth'
const service = axios.create({
    baseURL: 'http://127.0.0.1:7300/mock/5d1e44171095c172beef6e72', 
    timeout: 30000, // timeout
    headers: { 'Authorization': 'Bearer '+getUser().token  }
  })
export default service
