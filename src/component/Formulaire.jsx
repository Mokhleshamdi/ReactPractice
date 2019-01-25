import './Formulaire.css'
import React, { Component } from 'react';
import Item from './Item'
import {
  Container, Col, Form,
 } from 'reactstrap';
  
class Formulaire extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          listUsers: []
      } 
  }
  
 
  handleSubmit = (event) => {
    
    event.preventDefault()
    //console.log(this.name.value , this.lastName.value);
   
    this.setState((prevState) => ({
            listUsers: [
                ...prevState.listUsers,
                {
                  name: this.name.value,
                   lastName: this.lastName.value
                }
            ]
    })
    )
   
  }
//deleting user
  deleteUser=(index)=>{
    var checked = this.state.listUsers;
                var values = checked.indexOf(index)
                checked.splice(values, 1);
                this.setState({listUsers: checked});
  };
  //adding a new user to list item
  renderListusers = () => this.state.listUsers.map((user,key) => {
   return(<Item key={key} name={user.name} lastName={user.lastName}
    deleteUser={this.deleteUser.bind(this, key)}/>
  )});
  //onChange={(e) => this.setState({name: e.target.value})}
          
  render() {
    var style={color:'black'}
    return (
       
      <div className="Formulaire-header">
         <Container className="Formulaire" >
        
          <div >
         
          <h2 style={style}>Put here your full name</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
          <input ref={element => {this.name = element}} type="text"  placeholder="name" /><br/><br/>
          
          </Col>
          
          <Col>
          
          <input ref={element => {this.lastName = element}} type="text"  placeholder="lastName" /><br/><br/>
          
          </Col>
          
           <input type="submit" value="add"/>
      
            
            </Form>
            
          </div>
           
        <div className="list-user">
            {this.renderListusers()}
           
        </div>
        
        </Container>
      </div>
    
    );
    console.log('this is ' +this.state.name);
  }
}
export default Formulaire;