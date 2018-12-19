import axios from "axios";

const basedUrl = "/api/champions/";

export function getAllChampions() {
  return axios
    .get(basedUrl)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => console.log(err));
}
