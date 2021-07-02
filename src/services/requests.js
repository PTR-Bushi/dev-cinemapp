import axios from "axios";
import { GET_URL } from "../../constants/api";

export const getService = (url, params, headers) =>
  axios
    .get(url, { params, headers })
    .then(r => r)
    .catch(e => console.log("FLAG E1", e));

export const getSearch = (search, page = 1) =>
  getService(GET_URL + search + `&page=${page}&type=movie`).then(r => r);
