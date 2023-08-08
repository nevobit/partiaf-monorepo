import React, { FormEvent ,useEffect, useState, useRef} from 'react'
import styles from "./signUp.module.css"
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'
import Copyright from '@/components/Shared/Copyright'
import {Link, useNavigate} from 'react-router-dom'
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'
import { PrivateRoutes, PublicRoutes } from '@/constant-definitions'
import { register } from '@/redux/auth/users/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'



const SignUp = () => {

    const [country, setCountry]= useState("US")

    const {loading, success, error} = useSelector((state:AppStore) => state.auth)
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        phone: 0,
        email: '',
        password: '',
        repeat_password: '',
        method: 'email',
      });

      const [agree, setAgree] = useState<boolean>(false);

      const dispatch = useDispatch();

      const handleCheckBox =(e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setAgree(!agree)
        console.log(agree)
    }

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({...prev, [event.target.name]: event.target.value}))
      }

      const onSubmit = (event: React.FormEvent) => {
        if (!agree){
            alert("Debes aceptar lso terminos y condiciones para continuar");
            return;
        }

        if(user.password !== user.repeat_password){
            alert("Las contrasenas deben ser iguales");
            return;
        }
        event.preventDefault();
        console.log(user)
        const {repeat_password, ...registerUser} = user;
        dispatch(register(registerUser) as any)
      }

      const navigate = useNavigate();

      useEffect(() => {
        if(success){
          navigate(PrivateRoutes.BUSINESS, { replace: true })
        }
      }, [success, navigate]);
      


  return (
    <div className={styles.body}>
        <div className={styles.header}>
            <img className={styles.logo} src={logo}/>
        </div>
        <div className={styles.main}>
            <h2 className={styles.title}>Registrarse</h2>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.inputs}>
                    <Field label="Nombre">
                        <Input
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ingresa tu nombre"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Apellido">
                        <Input
                            required
                            type="text"
                            name="lastname"
                            id="last_name"
                            placeholder="Ingresa tu apellido"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Correo electronico">
                        <Input
                            required
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Ingresa tu email"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Telefono">

                        <Input
                            required
                            variant='number'
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Telefono"
                            onChange={handleChange}
                        />
                    </Field>
                   
                    <Field label="Contraseña"
                    //error={setError(error)}
                    >
                    <Input
                        required
                        name="password"
                        id="password"
                        variant='password'
                        type='password'
                        placeholder="Introduce tu Contraseña"
                        onChange={handleChange}
                    />
                    </Field>
                    <Field label="Confirmar contraseña"
                    //error={setError(error)}
                    >
                    <Input
                        required
                        name="repeat_password"
                        id="repeat_password"
                        variant='password'
                        placeholder="Repetir contraseña"
                        onChange={handleChange}
                    />
                    </Field>
                </div>
                <Input 
                        required
                        onChange={handleCheckBox}
                        variant="checkbox"
                        ><p className={styles.copy}>Acepto los<Link className={styles.terms} to="/terms-and-conditions"> terminos y condiciones </Link> de Partiaf</p></Input>
            <div className={styles.buttons}>
            <Button
            type='button'
            loading={loading}
            variant='dark'><Link to={PublicRoutes.SIGNIN}>Ir a iniciar sesion</Link></Button>
            <Button type='submit'>Registrarse</Button>
            </div>
            </form>
        </div>
    <Copyright/>
    </div>
  )
}

export default SignUp

