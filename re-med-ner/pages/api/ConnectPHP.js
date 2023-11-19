// This is where we are going to connect to the JS to the PHP
import React, { useState, useEffect } from "react";

function ConnectPHP() {
  const [customer, setCustomer] = useState();

  useEffect(() => {
    // Fetch data from PHP backend when the component mounts
    fetch("http://rcasanova2.dmitstudent.ca/dmit2025/connection.php")
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="">
      {customer ? (
        <div>
          <h1 className="">{customer.first_name}</h1>
          <p>ID: {customer.customer_id}</p>
          <p>Name: {customer.customer_name}</p>
          <p>Email: {customer.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ConnectPHP;
