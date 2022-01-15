import React, {Component} from 'react';

function NewComp2 (props){

    return (
        <div>
        <h3> This is functional component</h3>,
        <h3>Hello {props.name} from {props.place}! Welcom to simplilearn</h3>
        </div>
    );
}
export default NewComp2;