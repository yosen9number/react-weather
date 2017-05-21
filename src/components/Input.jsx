import React from 'react';

function Input({ name, type, placeholder }) {
    return (
        <div className="mdc-textfield">
            <input
                id={name}
                className="mdc-textfield__input"
                autoComplete="false"
                required
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;