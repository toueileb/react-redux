import React, {Component} from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {

    state = {
        showContactToggle: true
    };

    showContact(myMessage) {
        console.log("Salam : ", myMessage);
        this.setState({showContactToggle: !this.state.showContactToggle});
    }

   onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });


    }

    render() {
        const {id,name, phone, email} = this.props.data;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {name} <i style={{cursor: 'pointer'}} onClick={this.showContact.bind(this, name)}
                                              className="fa fa-sort-down"></i>
                                    <i style={{color: 'red', float: 'right', cursor: 'pointer'}} className="fa fa-times"
                                       onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                                </h4>
                                <p className="card-text">
                                    {
                                        (this.state.showContactToggle ? (
                                            <ul className="list-group">
                                                <li className="list-group-item">{phone}</li>
                                                <li className="list-group-item">{email}</li>
                                            </ul>
                                        ) : null)
                                    }
                                </p>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );

    }
}

Contact.defaultProps = {
    name: "My Name",
    phone: "000000000",
    email: "myemail@gmail.com"
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Contact;
