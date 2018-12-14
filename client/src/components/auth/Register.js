import React, { Component } from 'react'; 
import axios from 'axios'; 
import classnames from 'classnames'; 
import { connect } from 'react-redux'; 

class Register extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            name: '', 
            email: '', 
            password: '', 
            password2: '', 
            errors: {}
        };

        this.onChange = this.onChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
    }

render() {

    const { errors } = this.state;
    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo}} />
      } else {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Healthy Living account</p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.name
                                        })} 
                                        placeholder="Name" 
                                        name="name" 
                                        value={this.state.name} 
                                        onChange={this.onChange}
                                    />
                                    {errors.name && (<div className="invalid-feeback">{errors.name}</div>)}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.email
                                        })}  
                                        placeholder="Email Address" 
                                        name="email" value={this.state.email} 
                                        onChange={this.onChange} 
                                    />
                                    {errors.email && (<div className="invalid-feeback">{errors.email}</div>)}
                                    
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.password
                                        })}  
                                        placeholder="Password" 
                                        name="password" value={this.state.password} 
                                        onChange={this.onChange}
                                    />
                                    {errors.password && (<div className="invalid-feeback">{errors.password}</div>)}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.password2
                                        })}  
                                        placeholder="Confirm Password" 
                                        name="password2" 
                                        value={this.state.password2} 
                                        onChange={this.onChange}
                                    />
                                    {errors.password2 && (<div className="invalid-feeback">{errors.password2}</div>)}
                                </div>
                                <input type="submit" className="btn ojbtn btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
}

export default Register;