import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';


export default function Register() {

    // One state for each field of the form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            contact,
            city,
            uf
        }

        console.log(data);

        try {
            const response = await api.post('ong', data);
            console.log(response);
            alert(`Your access ID is ${response.data.id}`);
            
            history.push('/'); 

        } catch (err) {
            console.log(err);
        }
    }

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

                <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="ONG Name" />
                    <input type={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                    <input type={contact} onChange={e => setContact(e.target.value)} placeholder="Phone" />

                    <div className="input-group">
                        <input type={city} onChange={e => setCity(e.target.value)} placeholder="Cidade" />
                        <input type={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}