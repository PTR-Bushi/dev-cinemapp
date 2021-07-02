import axios from "axios";
import { GET_URL } from "../../constants/api";

export const getService = (url, params, headers) =>
  axios
    .get(url, { params, headers })
    .then(r => r)
    .catch(e => alert("Error"));

export const getSearch = (search, page = 1) =>
  getService(GET_URL + search + `&page=${page}`).then(r => r);
