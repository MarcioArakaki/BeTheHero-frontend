import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './styles.css';


export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" className="src" />

                    <h1>Register</h1>
                    <p>Register to join the plataform and help people find the projects of your ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    I   don't have an account
                    </Link>
                </section>

                <form>
                    <input placeholde="ONG Name"/>
                    <input type="email" placeholde="E-mail"/>
                    <input placeholde="Phone"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width: 80}}/>
                    </div>
                     
                     <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}