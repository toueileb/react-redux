import React from 'react';
import classnames from 'classnames';

function TextInputGroup(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{props.label}</label>
            <input type={props.type} className={classnames('form-control', {'is-invalid': props.error})} value={props.value}
                   onChange={props.onChange} name={props.name}/>
                   <div className="invalid-feedback">{props.error}</div>
        </div>
    );
}

export default TextInputGroup;
