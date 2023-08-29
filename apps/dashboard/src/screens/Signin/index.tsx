import React, { FormEvent ,useEffect, useState} from 'react'
import styles from "./signin.module.css"
import {Link, useNavigate} from 'react-router-dom'
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'
import Copyright from '@/components/Shared/Copyright'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { resetStores } from '@/redux/states/stores/slice'
import { createStore, getStoresByAdmin } from '@/redux/states'
import { Store } from '@partiaf/entities'
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { login } from '@/redux/auth/users/thunks'
import { PrivateRoutes } from '@/constant-definitions'


const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {loading, success, user: auth, error} = useSelector((state: AppStore) => state.auth);
  
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({...prev, [event.target.name]: event.target.value}))
  }
    const [remember, setRemeber] = useState<boolean>(false);

    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      dispatch(login({email: user.email, password: user.password}) as any)
    }
    
      const handleCheckBox =(e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setRemeber(!remember)
        console.log(remember)
    }

        
  const handleGoogleSuccess = async(credentialsResponse: CredentialResponse) => {
    if(credentialsResponse.credential){
      const token_id = credentialsResponse.credential;
    }
  }

  const handleGoogleError = () => {

  }
 
  useEffect(() => {
    if(success){
      dispatch(getStoresByAdmin(auth?.token) as any);
      navigate(PrivateRoutes.BUSINESS, { replace: true });
    }
  }, [success, navigate]);


  return (
    <div className={styles.body}>
        <div className={styles.header}>
            <img className={styles.logo} src={logo}/>
            <div className={styles.google_btn}>
            <GoogleLogin  width="1000px" size='large' useOneTap onError={handleGoogleError} onSuccess={handleGoogleSuccess} />
            </div>
        </div>
        <div className={styles.hr}>
            <div className={styles.line}>
            </div>
            <p className={styles.center_hr}>O inicia sesion con</p>
            <div className={styles.line}>
            </div>
        </div>
        <div className={styles.main}>
            <form onSubmit={onSubmit}>
                <Field label="Correo Electronico">
                    <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Introduce tu correo electronico"
                        onChange={handleChange}
                    />
                </Field>
                <Field label="Contraseña"
                    error={error}
                    >
                    <Input
                        name="password"
                        id="password"
                        variant='password'
                        placeholder="Introduce tu Contraseña"
                        onChange={handleChange}
                    />
                </Field> 
                <Input 
                    onChange={handleCheckBox}
                    variant="checkbox"
                    type='checkbox'
                ><p className={styles.copy}>Recuerdame</p></Input>
                <div className={styles.buttons}>
                    <Button loading={loading} className={styles.button_submit} type='submit'>Entrar</Button>
                    <p><Link className={styles.terms} to="">Olvide mi contraseña</Link></p>
                    <p className={styles.copy}>¿No tienes cuenta?<Link className={styles.terms} to="/signup"> Registrate</Link></p>
                </div>
            </form>
            <Copyright/>
        </div>
    </div>
  )
}

export default Signin
