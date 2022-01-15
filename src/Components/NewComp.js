import React,{Component} from 'react'
import bell from "./bell.png";
import bellA from "./bellA.png"

 class NewComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: "This is Nidhi",
            sub: "click Me",
            imageURL: bell,
            
        }
    }

    buttonchange = ()=>{
        this.setState({
            message: "Hit the bell icon to never miss the new videoes",
            sub: "Subscribed",
           })
    } 

   styles = {
        fontStyle:"Italic",
        color:"purple"
      };

      imagechange = ()=>{
          this.setState({
            imageURL:bellA,
            message:"Thank you"
          });
      }

      method = ()=>{
       this.props.fn("JohnDoe");
 };

    render(){
        console.log(this.props);
        return(
        <div className="App"><h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonchange}>{this.state.sub}</button>
        <button onClick={this.method}> {this.props.show} </button>
        <p>
           <img 
           style={{width: "30px", hight:"20px"}}
            src={this.state.imageURL}
            onClick={this.imagechange}
            alt="" />
        </p>


        </div>
        )
    }
}

export default NewComp;