import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";

//class About extends React.Component{
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name: "default",
        location: "Default"
      }
    }

    console.log("parent constructor");
  }

  async componentDidMount() {
    console.log("Parent component did mount ");
      const data =  await fetch("https://api.github.com/users/karnbhushan1994");
      const json =  await data.json();

      this.setState({
        userInfo:json
      })

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
    console.log("componentWillUnmount will call ");
  }

  render() {
    console.log("parent render");
   const {login ,location } =  this.state.userInfo;
    return ( 
      <div>
        <User name={login}  location={location} />
        <UserClass name={"karan (class)"} location={"India"} />
        <UserClass name={"Elon (class)"} location={"Usa"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//      <User name={"raju (function)"} />
//      <UserClass  name={"karan (class)"}  location={"India"} />
//     </div>
//   );
// };

/*
  - Parent Constructor 
  - parent render
    
     - karan constructor 

     - karan Render

     - karan ComponentDidmount

     - Elon constructor 

     - Elon Render

     - Elon ComponentDidMount 

  - Parent ComponentDid Mount
=====================================================================But it is following output ===================

parent constructor  (About.js initializes)
About.js:21 parent render
===================================
UserClass.js:10 karan (class)child constructor  (karan instance initialized)
UserClass.js:28 karan (class)child render  (karan rendered)
============================================================
UserClass.js:10 Elon (class)child constructor  (Elon instance initialized)
UserClass.js:28 Elon (class)child render  (Elon rendered)
========================
UserClass.js:14 karan (class)child component did mount  (karan component mounted)
UserClass.js:14 Elon (class)child component did mount  (Elon component mounted)
About.js:17 Parent component did mount  (Parent component mounted)


*/

export default About;
