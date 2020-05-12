import { useEffect, useState } from 'react';

import authHeader from '../../services/authHeader';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

export const handleDelete = async (url, id, info) => {
  try{
    const res = await axios.delete(BASE_URL + url + `${id}`, {data: info, headers : authHeader()})
    console.log(res)
    return res
  } catch(err) {
    console.log('DISPLAY ERROR MESSAGE' + err)
  }
}

//Check added state here
export const useFetch = (url, added, setAdded) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE_URL + url, { headers: authHeader()})
        const data = await res.data
        console.log(data);
        setResponse(data)
      }
      catch (error){
        setError(error)
      }
    }
    fetchData()
  }, [added]);
  return { response, error };
};
