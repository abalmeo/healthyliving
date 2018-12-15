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
        <nav className="navbar navbar-dark bg-primary">
              <div>
                  <Link className="navbar-brand" to="/">
                    {' '}
                    Home
                  </Link>
                  <Link className="navbar-brand" to="/results">
                    {' '}
                    My Results
                  </Link>
                  <Link className="navbar-brand" to="/healthforms">
                    {' '}
                    Health Form
                  </Link>
                  <Link className="navbar-brand" to="/journalform">
                    {' '}
                    Journal
                  </Link>
                  <Link className="navbar-brand" to="/register">
                    {' '}
                    Register
                  </Link>
                </div>
        </nav>
    )
}
}
export default Navbar;



