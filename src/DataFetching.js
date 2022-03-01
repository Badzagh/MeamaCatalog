import { useState, useEffect } from "react";
import axios from 'axios';

export const makeRequestCatalog = ({setDataCatalog}, url) => {
    axios({
        method: 'get',
        url: url,
        headers: {
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          setDataCatalog(response.data);
        })
        .catch(error => {
            console.log(error.response.data.error)
            console.log("page not found")
        })
}
export const makeRequestInfo = ({setDataInfo}, url) => {
  axios({
      method: 'get',
      url: url,
      headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setDataInfo(response.data);
      })
      .catch(error => {
          console.log(error.response.data.error)
          console.log("page not found")
      })
}
export const makeRequestLanguages = ({setDataLanguages}, url) => {
  axios({
      method: 'get',
      url: url,
      headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setDataLanguages(response.data);
        console.log(response.data)
      })
      .catch(error => {
          console.log(error.response.data.error)
          console.log("page not found")
      })
}
