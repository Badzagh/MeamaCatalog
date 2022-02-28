import { useState, useEffect } from "react";
import axios from 'axios';

export const makeRequestCatalog = ({setDataCatalog}) => {
    axios({
        method: 'get',
        url: 'https://cms.meamacollect.ge/meama-collect/api/client/ka',
        headers: {
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          setDataCatalog(response.data);
          console.log(response.data)
        })
        .catch(error => {
            console.log(error.response.data.error)
            console.log("page not found")
        })
}
export const makeRequestInfo = ({setDataInfo}) => {
  axios({
      method: 'get',
      url: 'https://cms.meamacollect.ge/meama-collect/api/client/ka/contact-info',
      headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setDataInfo(response.data);
        console.log(response.data)
      })
      .catch(error => {
          console.log(error.response.data.error)
          console.log("page not found")
      })
}
export const makeRequestLanguages = ({setDataLanguages}) => {
  axios({
      method: 'get',
      url: 'https://cms.meamacollect.ge/meama-collect/api/client/languages',
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
