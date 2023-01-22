import React from 'react';

class ListItems extends React.Component{
 render(){
    const {itemslist} = this.props;
    const len = itemslist.length;
    const listitems=len?(itemslist.map(items =>{
        return(<div key={items.id}>
        <center><ol className = "ullist">
            <li className = "lilist">
            <span className="itemtext">{items.item}</span><span onClick={()=>{this.props.deleteitem(items.id)}} className="removebutton"><span className="removetext"><i class="material-icons">delete</i></span></span>
            </li>
            
        </ol>
        </center>
        </div>)
    })):(
    <center>
    <h4 className="blue-text">No Items! In the To-Do list.</h4>
    </center>
    ) 
    return(
        <div>
            {listitems}
        </div>
    );
}
}
export default ListItems;