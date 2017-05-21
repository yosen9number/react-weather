import React from 'react';

import Input from './Input';

function Form({ onSubmit }) {
    return (
        <form
            className="signup-form mdc-theme--dark"
            onSubmit={onSubmit}>
            <Input
                type="text"
                id="firstname"
                placeholder="Имя" />

            <Input
                type="text"
                id="lastname"
                placeholder="Фамилия" />

            <Input
                id="email"
                type="email"
                placeholder="Эл. почта" />

            <Input
                id="password"
                type="password"
                placeholder="Пароль" />

            <button className="mdc-button mdc-button--primary mdc-button--raised">
                Зарегистрироваться
            </button>
        </form>
    );
}

export default Form;