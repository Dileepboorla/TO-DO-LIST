import React from 'react';
import './App.css';
import ItemForm from './ItemForm'
import ListItems from './ListItems';

class App extends React.Component {

 
  state ={
    items : [
    {item:"welcome to to-do list" ,id : 1},
    {item:"Plan your day",id:2}
  ]}
  addItem = (item) =>{
    item.id = Math.floor(Math.random()*10001)
    const itemslist = [...this.state.items,item];
    this.setState({items:itemslist});
  }
  deleteItem = (id) =>{
    const itemlist = this.state.items.filter(item => {
      return id!==item.id
    });
    this.setState({items:itemlist});
  }
render(){
  return (
    <div className="App">
    <center><h2 className="blue-text center">TO-DO LIST</h2></center>
    <div style={{marginTop:"80px"}}></div>
     <ItemForm additem ={this.addItem}/>
     <br></br>
     <ListItems deleteitem={this.deleteItem} itemslist={this.state.items}/>
    </div>
  );
  }
  
  }
export default App;
