import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import Person from "./Person";
import Load from "./Load";
import Error from "./Error";

import "./App.css";

function App() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

	const removeItem = (id) => {
    setUsers((oldValue) => oldValue.filter((value) => value.id !== id));
  };

	const reloadAll = () => {
		getData();
	}

	const deleteAll = () => {
		setUsers([]);
	}

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);

      console.log(response);
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (isloading) {
    return <Load />;
  } else if (isError) {
    return <Error />;
  }



	

  return (
    <div className="App">
      <Title text="Fetching App" />
			<div className="container_btn"> 
			<button onClick={reloadAll}>Reload</button>
			<button onClick={deleteAll}>Delete All</button>
			</div>
      {users.map((el, index) => {
        return (
          <li key={index}>
            <Person {...el} removeItem={removeItem}/>
          </li>
        );
      })}
    </div>
  );
}

export default App;
