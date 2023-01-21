import React from "react";

const Person = ({ login, followers_url: followers , avatar_url: img, id, removeItem }) => {


  return (
    <div className="container_user">
      <div className="container_user-info">
        <h3>{login}</h3>
				<h4>Followers: {followers.length}</h4>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Person;
