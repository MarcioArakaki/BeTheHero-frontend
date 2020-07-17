import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';



export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" className="src" />
                <span>Bem vinda, ONGZERA</span>

                <Link className="button" to="/incidents/new">                    
                    Register new Incident
                </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Incidents</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Incident test</p>

                    <strong>Descripton</strong>
                    <p>Test description</p>

                    <strong>VALUE:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>);
}
