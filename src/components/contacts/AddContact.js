import React, {Component} from 'react';
import {Consumer} from '../context';
import TextInputGroup from "../helpers/TextInputGroup";

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {

        }
    };

    onChangeInput = (e) => this.setState({[e.target.name]: e.target.value});

    submit = (dispatch, size, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        if (name == ""){
            this.setState({
                errors: {
                    name: 'The name is required'
                }
            });
            return;
        }

        if (email == ""){
            this.setState({
                errors: {
                    email: 'The email is required'
                }
            });
            return;

            if (phone == ""){
                this.setState({
                    errors: {
                        phone: 'The phone is required'
                    }
                });
                return;
            }
        }

        dispatch({
            type: 'ADD_CONTACT',
            payload: {
                id: size + 1,
                name,
                email,
                phone,
            }
        });

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {

        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add contact</h4>
                                        <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>

                                            <TextInputGroup label="Name" name="name" value={name}
                                                            onChange={this.onChangeInput} type="text" error={errors.name}/>
                                            <TextInputGroup label="Email" name="email" value={email}
                                                            onChange={this.onChangeInput} type="email" error={errors.email}/>
                                            <TextInputGroup label="Phone" name="phone" value={phone}
                                                            onChange={this.onChangeInput} type="text" error={errors.phone}/>
                                            <button type="submit" className="btn btn-success w-100">Add New Contact
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }

            </Consumer>
        );
    }
}

export default AddContact;
