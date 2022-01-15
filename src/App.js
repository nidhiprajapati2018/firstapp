import React from "react";
import "./App.css";
import NewComp from "./Components/NewComp"
import NewComp1 from "./Components/NewComp1"
import NewComp2 from "./Components/NewComp2"


class App extends React.Component{
  constructor(){
    super();
     this.state = {child:"Sam"};
  }
style = {
  fontStyle:"bold",
  color:"teal"
};

click =(x)=>{
  if(typeof x !== "string"){x="jhon"}
 this.setState({child:x});
};

  render(){
    return(
      <div className= "App">
        <h1 style= {this.style}>Welcome</h1>
      
        <NewComp fn={this.click} show="Hit Me"/>

        <NewComp1 name="Learner 1" place="Place x" >
          <p>Child Component</p>
          <p>{this.state.child}</p>
       
         </NewComp1>

        <NewComp1 name="Learner 2" place="Place y">
          <button onClick={this.click}>click</button>
        </NewComp1>

        <NewComp1 name="Learner 3" place="Place z"  />
        <NewComp2 name= "Learner 4" place= "place F" />

      </div>
    )
  }
}

export default App;
