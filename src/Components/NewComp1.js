import React, {Component} from 'react';

class NewComp1 extends Component{
    render(){
        return(
            <div>
         <h1>Hello{this.props.name} from {this.props.place}! Welcom To NidhiS</h1>
          <p>{this.props.children}</p>
            </div>
        )
    }
}
export default NewComp1;