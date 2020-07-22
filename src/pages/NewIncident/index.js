import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';


export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" className="src" />

                    <h1>New Incident</h1>
                    <p>Register to join the plataform and help people find the projects of your ONG.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back
                    </Link>
                </section>

                <form>
                    <input placeholder="Incident title" />
                    <textarea placeholder="Description" />
                    <input placeholder="Value in dollars " />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}