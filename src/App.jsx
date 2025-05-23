import React, { useEffect, useState } from "react";
import GridView from "./components/GridView";
import CarouselView from "./components/CarouselView";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/wp-json/communities/all/", {
      method: "GET",
      headers: {
        Authorization: "Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched data:", json.data);
        setData(json.data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="min-h-screen">
      <GridView data={data} />
      <CarouselView items={data} />
    </div>
  );
}

export default App;


