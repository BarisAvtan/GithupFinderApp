import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component, Fragment } from "react";
import Users from "./Components/Users";
import axios from "axios";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import About from "./Components/About";
import HomePage from "./Components/HomePage";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.getUser = this.getUser.bind(this);
    this.state = {
      loading: false,
      users: [],
      user: {},
      alert: null,
    };
  }
  //Sayfa yüklendiğinde 30 kayıt göstermek için componentDidMount metonu açın.
  // componentDidMount() {
  //   // axios
  //   // .get('https://api.github.com/users')
  //   // .then(res => console.log(res.data));
  //   this.setState({ loading: true });

  //   setTimeout(() => {
  //     axios
  //       .get("https://api.github.com/users")
  //       .then((res) => this.setState({ users: res.data, loading: false }));
  //   }, 3000);
  // }
  
  getUser(username) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => this.setState({ user: res.data, loading: false }));
    }, 1000);
  }

  searchUsers(keyword) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) =>
          this.setState({ users: res.data.items, loading: false })
        );
    }, 1000);
  }

  clearUsers() {
    this.setState({ users: [] });
  }

  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      //3 sn sonra alert içini boşaltmak için
      this.setState({ alert: null });
    }, 3000);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/About" element={<About />}></Route>
          <Route
            path="/HomePage"
            element={
              <HomePage
                searchUsers={this.searchUsers}
                clearUsers={this.clearUsers}
                showClearButton={this.state.users.length > 0 ? true : false}
                setAlert={this.setAlert}
                users={this.state.users} 
                loading={this.state.loading}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
