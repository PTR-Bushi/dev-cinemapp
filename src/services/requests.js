import axios from "axios";
import { GET_URL } from "../../constants/api";

export const getService = (url, params, headers) =>
  axios
    .get(url, { params, headers })
    .then(r => r)
    .catch(e => console.log("FLAG E1", e));

export const getSearch = search => getService(GET_URL + search).then(r => r);
