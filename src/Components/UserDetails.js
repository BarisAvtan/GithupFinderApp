import React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';

// this.state = {
//   user: {}
// };
// const [username] = useState(0);


const getUserInfo = (userName) => {
  setTimeout(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => this.setState({ user: res.data, loading: false }));
  }, 1000);

}

const UserDetails = (props) => {

  const {login} =useParams();
  //console.log(login);
  var userName =  {login}
  console.log(userName);
  return <>
   getUser={userName}
  
  </>;

};

export default UserDetails;
