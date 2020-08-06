import React, {useState, useEffect } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from "../../services/api"


export default function Profile() {
    const [incidents, setIncidents] = useState('');

    // Trigger function when something happens to the Component
    // When something from the array changes, the funciton is executed
    // ex  useEffect(() =>  {handleProfile}, [ongname]) when ongname changes
    useEffect(handleProfile, [])

    async function handleProfile() {

        try {
            const response = await api.get(`incident/index/${localStorage.getItem("ongId")}/1`);
            console.log(response);

            setIncidents(response.data);


        } catch (error) {
            console.log(error);
            alert('login failed');
        }
    }

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
            {incidents && incidents.map((incident, index) => {
                return (
                    <li key={index}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descripton</strong>
                        <p>{incident.description}</p>

                        <strong>VALUE:</strong>
                        <p>{incident.value}</p>

                        <button type="button">
                            <FiTrash2 size={20}  color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                )
            })}
            </ul>
        </div >);
}
