// This is where we are going to connect to the JS to the PHP
import React, { useState, useEffect } from "react";

function ConnectPHP() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from PHP backend when the component mounts
    fetch("http://your-backend-server/api/data.php")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
