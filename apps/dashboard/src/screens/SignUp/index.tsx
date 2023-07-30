import React, { FormEvent ,useEffect, useState, useRef} from 'react'
import styles from "./signUp.module.css"
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'
import Copyright from '@/components/Shared/Copyright'
import {Link} from 'react-router-dom'
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'



const SignUp = () => {

    const [country, setCountry]= useState("US")

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        phoneCountry: {country},
        phone: 0,
        email: '',
        password: '',
        repeat_password: '',
        birth_date: 0,
        age: 0,
        newsletter: true,
        method: 'email',
        identification: ''
      });

      const [agree, setAgree] = useState<boolean>(false);

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
            alert
        }
        event.preventDefault();
        console.log(user)
        //dispatch(register(user) as any)
      }


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
                            placeholder="Indicar nombre completo"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Apellido">
                        <Input
                            required
                            type="text"
                            name="lastname"
                            id="last_name"
                            placeholder="Indicar nombre completo"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Correo electronico">
                        <Input
                            required
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Indicar aqui tu email"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Telefono">
                        <PhoneInput
                         type="number"
                         name="phoneCountry"
                         id="phoneCountry"
                         placeholder={country}
                         country={country}
                         value={country}
                         onChange={(value: any)=>setCountry(value)}
                        />
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
                    <Field label="Fecha de nacimiento">
                        <Input
                            required
                            variant='date'
                            type="date"
                            name="birth_date"
                            id="birth_date"
                            // placeholder="DD/MM/AA"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Edad">
                        <Input
                            required
                            variant='number'
                            type="number"
                            name="age"
                            id="age"
                            placeholder="0"
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
                        placeholder="Introduce tu Contraseña"
                        onChange={handleChange}
                    />
                    </Field>
                    <Field label="Repetir contraseña"
                    //error={setError(error)}
                    >
                    <Input
                        required
                        name="repeat_password"
                        id="repeat_password"
                        variant='password'
                        placeholder="repetir contraseña"
                        onChange={handleChange}
                    />
                    </Field>
                    <Field label="Identificacion personal"
                    //error={setError(error)}
                    >
                    <Input
                        required
                        name="identification"
                        id="identification"
                        placeholder="Colocar su identificacion personal"
                        onChange={handleChange}
                    />
                    </Field>
                </div>
                <Input 
                        required
                        onChange={handleCheckBox}
                        variant="checkbox"
                        ><p>Acepto los<Link className={styles.terms} to="/terms-and-conditions"> terminos y condiciones</Link> de Partiaf</p></Input>
            <div className={styles.buttons}>
            <Button
            type='button'
            variant='dark'><p className={styles.button_text}><Link to="/login">Ir a iniciar sesion</Link></p></Button>
            <Button type='submit'><p className={styles.button_text}>Registrarse</p></Button>
            </div>
            </form>
        </div>
    <Copyright/>
    </div>
  )
}

export default SignUp

