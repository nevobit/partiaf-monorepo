import React, { FormEvent ,useEffect, useState} from 'react'
import styles from "./signUp.module.css"
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'
import Copyright from '@/components/Shared/Copyright'
import {Link} from 'react-router-dom'


const SignUp = () => {

    const [user, setUser] = useState({
        name: '',
        last_name: '',
        phone: 0,
        email: '',
        password: '',
        repeat_password: '',
        date: 0,
        age: 0,
        newsletter: true,
        method: 'email'
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
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Indicar nombre completo"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Apellido">
                        <Input
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Indicar nombre completo"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Correo electronico">
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Indicar aqui tu email"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Telefono">
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Telefono"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Fecha de nacimiento">
                        <Input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="DD/MM/AA"
                            onChange={handleChange}
                        />
                    </Field>
                    <Field label="Edad">
                        <Input
                            type="text"
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
                        name="repeat_password"
                        id="repeat_password"
                        variant='password'
                        placeholder="repetir contraseña"
                        onChange={handleChange}
                    />
                    </Field>
                </div>
                <Input 
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

