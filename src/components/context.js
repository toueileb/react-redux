import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id != action.payload)
            };
        case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {id: 1, name: "MOHAMED TOUEILEB", phone: "0623453870", email: "toueilebmohamed@gmail.com"},
            {id: 2, name: "CHEIKH TOUEILEB", phone: "0623453780", email: "toueilebcheikh@gmail.com"},
            {id: 3, name: "AICHETOU TOUEILEB", phone: "0623458936", email: "toueilebaichetou@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    };
    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
};

export const Consumer = Context.Consumer;
