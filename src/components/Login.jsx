import React, { Fragment } from 'react';


class Login extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    emptyItem = {
        username: '',
        password: ''
    }

    state = {
        item:this.emptyItem
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        await fetch('/parqueadero/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.item),
        });
        this.props.history.push('/');
    }




    render(){
        return(
            <Fragment>
                <div className="container">
                    
                    <div className="row mt-3 ">
                        <h1 className="offset-lg-1 mt-5 text-primary">Login</h1>
                        <div className="col-lg-5 offset-lg-1 border border-primary rounded bg-light mb-3">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mt-3 m-2 mr-2 mb-2 ">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text" className="form-control" onChange={this.handleChange} id="username" name="username" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                                </div>
                                <div className="form-group  mt-3 m-2 mr-2 mb-2">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" onChange={this.handleChange} id="password" name="password"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-3 m-2 mr-2 mb-2">Submit</button>
                                
                            </form>
                        </div>
                        <div>

                        </div>
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}

export default Login;