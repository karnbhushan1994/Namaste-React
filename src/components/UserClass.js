import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name +"child constructor");
  }

   componentDidMount(){
    console.log(this.props.name +"child component did mount ");
    //api call why in componentDidMount


  }

  // 
  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log(this.props.name +"child render");
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Count: {this.state.count1}</h1>
        <h2>Name: {this.props.name}</h2>
        <p>Location: {this.props.location}</p>
        <h4>Contact: @karan</h4>

        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
export default UserClass;
