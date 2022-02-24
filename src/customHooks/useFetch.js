import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: "JWT " + localStorage.getItem("access-token") },
    };
    axios
      .get(url, config)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log("errro");
        if (err) {
          axios
            .post("/token/refresh/", {
              refresh: localStorage.getItem("refresh-token"),
            })
            .then((res) =>
              localStorage.setItem("access-token", res.data.access)
            );
        }
      });
  }, [url]);

  return data;
}
