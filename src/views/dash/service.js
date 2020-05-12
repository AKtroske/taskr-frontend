import { useEffect, useState } from 'react';
// import BASE_URL from '../../services/config';
import authHeader from '../../services/authHeader';
import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/";

//Check added state here
const useFetch = (url, added, setAdded) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE_URL + url, { headers: authHeader()})
        const data = await res.data
        console.log(data);
        setResponse(data)
        setAdded(false)
      }
      catch (error){
        setError(error)
      }
    }
    fetchData();
  }, [added]);
  return { response, error };
};

export default useFetch;
