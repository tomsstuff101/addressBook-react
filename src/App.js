import React from 'react';
import './App.css';


// Brief:
// Create a simple address book that you can add phone numbers to.
// It should show the numbers in a list if any have been entered

//    | enter num |
// 
//    | 13426     |
//    | 4288      |
//    | 3085657   |



const Title = () => {

    return(
      <div className="title">
        <h1>Address Book</h1>
      </div>
    )

}


const List = (props) => {
  // theState
  console.log('list...')
  console.log(`props.theState -->  ${props.theState.contacts[0].name}`)
  return(
    <div className="listWrapper">
      <div className="listBlock">
            <div className="nameKeep">
                <p>{props.theState.contacts[0].name}</p>
                <input type="checkbox" name="show" value={props.theState.contacts[0].toDelete}></input>
            </div>
            <p>{props.theState.contacts[0].mobile}</p>
      </div>
    </div>
  )


}





class AddressBook extends React.Component{

    state = {
      contacts: [  
                  {id: 0, 
                  name:"no records yet", 
                  mobile:"0000", 
                  toDelete:false
                  }
                ]  
      // want an array of objects
      // e.g.  [  {id: 0, name:another, mobile:12345, toDelete:false}, ...]
    }

    

// ***** HANDLERS ******/

formHandler = (e) => {
  console.log(`add....`)
  e.preventDefault()
  console.log(e.target.name.value)
  console.log(e.target.mobile.value)

  // build a new contact object
  let currentContacts = this.state.contacts
  let newId = currentContacts.length // generate new Id
  let theName = e.target.name.value
  let theMobile = e.target.mobile.value
  // toDelete will be used to splice the contacts array if delete button clicked
  let newContact = {id:newId, name: theName, mobile: theMobile, toDelete:true}
  console.log(`newContact -->  ${newContact.name}  ${newContact.mobile}`)
  currentContacts.push(newContact)
  this.setState({contacts: currentContacts})
  console.log(`added new contact --> ${this.state.contacts} `)
  

  // clear form inputs -- NOT working
  e.target.name.value = ""
  e.target.mobile.value = ""

}






theDelete = ()=>{
  console.log(`delete....`)
}


    render(){
      return(
        
        <div className="addressBookWrapper">
        <Title/>
        {/*use props to pass -bind?- listHandler to the List components*/}

        {/* <NewNumbers theForm={()=>this.formHandler}/> */}

        <form className="newNumbers" onSubmit={this.formHandler}>
          <input type="text" name="name" placeholder="name" className="formInput"></input>
          <input type="number" name="mobile" placeholder="mobile number" className="formInput"></input>
          <button className="submit" type="submit">add</button>
        </form>

        <List theState={this.state}/>

        <div className="deleteButt" onClick={this.theDelete}>Delete</div>
        
        </div>
      )
    }

}


class App extends React.Component{
  render(){
    return(
      <AddressBook/>
    )
  }
}

export default App;
