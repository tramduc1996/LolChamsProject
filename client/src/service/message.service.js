import axios from "axios";

const basedUrl = "/api/message/";

export function postMessage(payload) {
  return axios
    .post(`${basedUrl}`, payload)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}
