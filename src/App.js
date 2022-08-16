import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component, Fragment } from "react";
import axios from "axios";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import UserDetails from "./Components/UserDetails";

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
      repos: [],
      alert: null,
    };
  }
  //Sayfa yüklendiğinde 30 kayıt göstermek için componentDidMount metonu açın.
  componentDidMount() {
    // axios
    // .get('https://api.github.com/users')
    // .then(res => console.log(res.data));
    this.setState({ loading: true });

    setTimeout(() => {
      axios
        .get("https://api.github.com/users")
        .then((res) => this.setState({ users: res.data, loading: false }));
    }, 3000);
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

  getUser(username) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => this.setState({ user: res.data, loading: false }));
    }, 1000);
  }

  getUserRepos(username) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => this.setState({ repos: res.data, loading: false }));
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
          <Route
            path="/user/:login"
            element={
              <UserDetails
                getUser={this.getUser}
                user={this.state.user}
                repos={this.state.repos}
              />
            }
          />
{/* 
          <Route
            path="/user/:login"
            render={(props) => (
              <UserDetails
                {...props}
                getUser={this.getUser}
                getUserRepos={this.getUserRepos}
                user={this.state.user}
                repos={this.state.repos}
                loading={this.state.loading}
              />
            )}
          /> */}

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
