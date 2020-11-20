import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const genius = Object.assign({}, this.state);
        this.props.processForm(genius);
    }

    render(){
        return(
            
            <div className= "form_bg">

                <p className='signin-text'>Sign In</p>
                <button className='demo-user'><img className='glogo' src="assets/3.png" alt="Genius Logo"></img> <p> Sign in with DemoUser</p></button>

                <div className= 'form-container2'>

                    <form onSubmit={ this.handleSubmit} className='form-input'>
                        <p>{this.props.errors ? this.props.errors : null}</p>   
                        {/* <br/> */}
                        <label> Genius Name:
                            <input className= 'input-fields' type= 'text'
                         autoFocus
                            value={this.state.username}
                            onChange={this.update('username')}
                            
                            />
                        </label>

                        <label>  Password:
                            <input className='input-fields'  type= 'password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                    </label>
                        <button className='session-submit' value={this.props.formType}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;