import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import '../style//Contacts.css';

function Contacts() {
    const {userCredentials} = useContext(AuthContext)
    const [user, setUser] = useState({
        id: '',
        email: ''
    })
    const [contacts, setContacts] = useState([]);

    const id = '1'
    const apiGetResquest = () =>{
        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

        api.get(`contatos/usuario-${id}`).then((res) => {
            setContacts(res.data)
        })
        
    }
    useEffect(() => {
        apiGetResquest()
    },[])
    return(
        <>
            <div className="contatos">
                <h1>Contatos</h1>
                {contacts.map(contact => (
                    <ul key={contact.id}>
                        <li><>Nome: </>{contact.nome}</li>
                        <li><>Email: </>{contact.email}</li>
                        <li><>Telefone: </>{contact.contatoCel}</li>                        
                        <li><hr/></li>
                    </ul>                    
                ))}
            </div>
        </>
    );
}

export default Contacts;