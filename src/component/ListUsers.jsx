import App from "../App";
import React, { Component } from 'react';
import Formulaire from './Formulaire'
class ListUsers extends React.Component {
constructor(props)
{
    super(props);
   const name=props.name;
   const lastName=props.lastName;
    //this.state={name:'',lastName:''};
}

render(){
  return(
    <p>hi</p>
  );
}
}
export default ListUsers;