import axios from "axios";
import { useState, useEffect } from "react";

export default function DataFetch() {
  const [data, setData] = useState([]);
  const [apiError, setApiError] = useState();

  useEffect(() => {
    axios
      .get("https://catfact.ninja/facts")
      .then((result) => {
        console.log(result.data);
        setData(result.data.data);
      })
      .catch((error) => {
        setApiError(true);
        console.log(error);
      });
  }, []);

  if (data) {
    return (
      <>
        <h1>Cat Facts</h1>
        <ul>
          {data.map((post, i) => (
            <li key={i}>
              {i + 1}. {post.fact}
            </li>
          ))}
        </ul>
      </>
    );
  } else if (apiError) {
    return <h1>ERRRRORR</h1>;
  } else {
    return <h1>loading</h1>;
  }
}
