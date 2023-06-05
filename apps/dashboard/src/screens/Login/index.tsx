import React, { FormEvent ,useEffect, useState} from 'react'
import styles from "./login.module.css"
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({...prev, [event.target.name]: event.target.value}))
      }

      const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(user)
        //dispatch(login({email: user.email, password: user.password}) as any)
      }
    
  return (
    <div className={styles.body}>
        <img className={styles.logo} src={logo}>
        </img>
        <form className={styles.form} onSubmit={onSubmit}>
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
            //error={setError(error)}
            >
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Introduce tu Contraseña"
                onChange={handleChange}
            />
            </Field>
            <Button
            type='submit'
            variant='dark'
            >Entrar</Button>
            <div className={styles.form_options}>
                <div className={styles.rememberMe}>
                    <Input 
                    type="checkbox"
                    variant="checkbox"/>
                    <p>Recuerdame</p>
                </div>
                <p>¿Has olvidado tu contraseña?</p>

            </div>
            <Button
            type='button'
            variant='gray'
            >Ir a registrarse</Button>
        </form>
    </div>
  )
}

export default Login