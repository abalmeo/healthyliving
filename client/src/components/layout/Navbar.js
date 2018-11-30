import React, {Component} from 'react'; 
import {Link} from "react-router-dom";
import Axios from 'axios'; 

class Navbar extends Component{
    constructor(){
        super(); 
        this.state = {
            loggedin:false
        }
        this.logout = this.logout.bind(this); 
    }
    


componentDidMount(){
    if (localStorage.getItem("token")) {
        this.setState({loggedin:true})
    }
}

logout(){
  localStorage.removeItem("token"); 
  this.setState({loggedin:false}) 
  delete Axios.default.headers.common['Authorization']; 
}

render(){
    const isLoggedIn = this.state.loggedin;
    return(
        <nav className="navbar">
            <div className="container-fluid">
            Test Navbar
            </div>
        </nav>

    )
}
}
export default Navbar;