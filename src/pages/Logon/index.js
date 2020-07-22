import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    
    const [id,setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.get(`ong/${id}`); 
            console.log(response);
            localStorage.setItem("ongId", response.data.id);
            localStorage.setItem("ongName", response.data.name);

            history.push("/profile");
        } catch (error)
        {
            console.log(error);
            alert('login failed');
        }                   
    }


    return (
        <div  className="logon-container">
            <section onSubmit={handleLogin}  className="form">
                <img src={logoImg} alt="Be The Hero" className="src" />
                <form>
                    <h1>Logon</h1>
                    <input value={id} onChange={e => setId(e.target.value)} placeholder="Your ID" />
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