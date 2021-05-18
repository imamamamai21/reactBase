import axios from 'axios'
import { RESULT } from '../constants/Servers'

const Connect = {

  get: (uri) => {
    return axios.get(uri)
      .then(response => {
          return { type: RESULT.success, data: response.data }
      })
      .catch(err => {
        return { type: RESULT.error, error: new Error(RESULT.error) }
      })
  },
  post: (uri, postData) => {
    return axios.post(uri, postData)
      .then(response => {
          return { type: RESULT.success, data: response.data }
      })
      .catch(err => {
        return { type: RESULT.error, error: new Error(RESULT.error) }
      })
  }
}

export default Connect