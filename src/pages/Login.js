import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../api';
import {useHistory} from 'react-router-dom';
import styles from '../style/LoginForm.module.css';

function Login() {
    const {setToken, userCredentials,setUserCredentials} = useContext(AuthContext)
    const history = useHistory();
    
    const handleLogin = (event) => {
        event.preventDefault();
        api.post('login', userCredentials).then((res) => {
            const { data } = res
            setToken({data})
            history.push('/contatos')
        })
    }

    const handleChange = (event) =>{
        event.preventDefault();
        const name = event.target.name;
        setUserCredentials({
            ...userCredentials,
            [name]: event.target.value
        });
    }
    return(
        <>        
            <form className={styles.form} onSubmit={handleLogin} >      
                <h1 className="title">Login</h1>
                <Input label="Usuário" type="text" name="username" placeholder="Email" onChange={handleChange} />
                <Input label="Senha" type="password" name="password" placeholder="Password" onChange={handleChange} />
                
                <Button>Entrar</Button>       
            </form>          
        </>
    );
}

export default Login;