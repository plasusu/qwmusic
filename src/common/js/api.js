import axios from 'axios'
import {apiHost} from 'config'

export function getData (path) {
  const url = apiHost + path
  return new Promise((resolve) => {
    axios.get(url).then((res) => {
      if (res.status === 200) {
        resolve(res.data)
      }
    })
  })
}
