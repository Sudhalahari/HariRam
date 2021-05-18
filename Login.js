import React from 'react';
import "./App.css";
  
class App extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {} 

    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["First_Name"] = "";
        input["Last_Name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Registraton is Complete...');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["Last_Name"]) {
        isValid = false;
        errors["Last_Name"] = "Please enter your Last_Name.";
      }
      if (!input["First_Name"]) {
        isValid = false;
        errors["First_Name"] = "Please enter your First_Name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div className ="wrapper">
        <h1>Welcome to my HariRam World ...</h1>
        <h1>Registraton Page</h1>
        <form onSubmit={this.handleSubmit}>

        <div class="form-group">
            <label for="First_Name">First_Name:</label>
            <input 
              type="text" 
              name="First_Name" 
              value={this.state.input.First_Name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter First_Name" 
              id="First_Name" />
  
              <div className="text-danger">{this.state.errors.First_Name}</div>
          </div>
  
          <div class="form-group">
            <label for="Last_Name">Last_Name:</label>
            <input 
              type="text" 
              name="Last_Name" 
              value={this.state.input.Last_Name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Last_Name" 
              id="Last_Name" />
  
              <div className="text-danger">{this.state.errors.Last_Name}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
   
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm_Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default App;