import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" className="src" />
                <form>
                    <h1>Logon</h1>
                    <input placeholder="Your ID" />
                    <button className="button" type="submit">Enter</button>
                    <Link className="back-link" to ="/register">
                        <FiLogIn size={16} color="#E02041" />
                    Register
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" className="src" />
        </div>
    );
}