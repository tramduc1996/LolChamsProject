import axios from "axios";

const basedUrl = "/api/highlightVideos/";

export function getAllHighlightVideos() {
  return axios
    .get(basedUrl)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}
