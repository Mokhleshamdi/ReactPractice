
import React from 'react';
import { Card, CardBody,
    CardTitle,Button} from 'reactstrap';

class Item extends React.Component {
      

render(){
  return(  
  
    <div>
      
        <Card>
        
        <CardBody>
        
        <CardTitle>{this.props.name} {this.props.lastName}</CardTitle>
      
       
        <Button  onClick={this.props.deleteUser}> Delete </Button> 
         
        </CardBody>
      </Card>
      
        
    </div>
    );
};

}
export default Item;