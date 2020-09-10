import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <h1>Single Page Application</h1>
          <nav >
          <ul >
            <li><Link to={'/'} > Home </Link></li>
            <li><Link to={'/viewCustomers'} >ViewCustomer</Link></li>
            <li><Link to={'/registerCustomer'} >RegisterCustomer</Link></li>
          </ul>
          </nav>
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/viewCustomers' component={ViewCustomer} />
              <Route path='/registerCustomer' component={RegisterCustomer} />
          </Switch>
        </div>
      </Router>
      
      <Home/>
      <ViewCustomer/>
      <RegisterCustomer/>
      
   
 
     
    </div>
  );
 
}

class Home extends React.Component {
  render() {
     return (
        <div>
           <h6>This is Homepage</h6>
           <ul>
             <li>
               Coustomer Id: 101<br/>
               Coustomer: Adam Henry <br/>
               Country: India 
             </li>
           </ul>
           <ul>
             <li>
               Coustomer Id: 102<br/>
               Coustomer: Jhon Henry <br/>
               Country: USA 
             </li>
           </ul>
        </div>
     );
  }
}

class ViewCustomer extends React.Component {
  render() {
     return (
        <div>
           <h6>This is coustomer Details page</h6>
        </div>
     );
  }
}
const initialState ={
  CustomerId :"",
  CustomerName: "",
  Country:"",
  CustomerIdError :"",
  CustomerNameError: "",
  CountryError :"" 
 };
class RegisterCustomer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({[event.target.name]: isCheckbox ? event.target.checked : event.target.value});
    
  }

  validate= () => {
    let CustomerIdError = "";
    let CustomerNameError = "";
    let CountryError = "";
    let CustomerIdNAN ="";
    if(!this.state.customerId){
      CustomerIdError="Please Enter  Customer Id";
    }
   
    if(!this.state.customerName){
      CustomerNameError="Please Enter  Customer Name";
    }
    if(!this.state.country){
      CountryError="Please Select your Country";
    }
    
    if(CustomerIdError || CustomerNameError || CountryError){
       this.setState({CustomerIdError,CustomerIdNAN,CustomerNameError,CountryError});
       return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state);
      //  Refresh form fields
      this.setState(initialState);
      alert('Customer is registerd with : Customer Id '+ this.state.customerId + ' - Customer Name: - ' + this.state.customerName + ' - Country: - ' + this.state.country  );
    }
   
  }

 
  render() {
     return (
      <div>
        <form onSubmit={this.handleSubmit}>
      <label>Enter CustomerId:<br/><br/>
      <input  name="customerId" type="number" value={this.state.customerId} onChange={this.handleChange} />
      </label><br/>
      <div style ={{color: "red", fontSize:18}} >{this.state.CustomerIdError}</div><br/>
      <label>CustomerName:<br/><br/>
      <input type = "text"  name="customerName" value={this.state.customerName} onChange={this.handleChange} />
      </label><br/>
      <div style={{color:"red", fontSize:18}}>{this.state.CustomerNameError}</div>
      <label>Country:<br/><br/> 
      <select  name="country" value={this.state.country}  onChange={this.handleChange}>
        <option>Select Your Country</option>
        <option>India</option>
        <option>USA</option>
      </select>
      </label><br/>
      <div style={{color:"red", fontSize:18}}>{this.state.CountryError}</div><br/><br/>
      <input type="submit" value="Submit" />
      </form>
   </div>
     );
  }
}

export default App;
