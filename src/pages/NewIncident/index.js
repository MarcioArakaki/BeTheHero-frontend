import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api'


export default function NewIncident() {

    const[title,setTitle] = useState('');
    const[description,setDescription] = useState('');
    const[value,setValue] = useState('');
    const data = {
        title,
        description,
        value: parseInt(value),
        ongId: parseInt(localStorage["ongId"])
    }
    const history = useHistory();
    async function handleNewIncident(e) {
        e.preventDefault();

        console.log(data);
        try {
            const response = await api.post('incident', data);
            console.log(response);            
            history.push('/'); 

        } catch (err) {
            console.log(err);
        }
    }


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

                <form onSubmit={handleNewIncident}>
                    <input value = {title} onChange = {e => setTitle(e.target.value)} placholder="Incident title" />
                    <textarea value = {description} onChange = {e => setDescription(e.target.value)} placeholder="Description" />
                    <input value = {value} onChange = {e => setValue(e.target.value)} placeholder="Value in dollars " />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}