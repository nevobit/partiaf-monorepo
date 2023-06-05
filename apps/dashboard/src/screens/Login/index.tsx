import React, { FormEvent ,useEffect, useState} from 'react'
import styles from "./login.module.css"
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'
import Copyright from '@/components/Shared/Copyright'

const Login = () => {

    const [remember, setRemeber] = useState<boolean>(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({...prev, [event.target.name]: event.target.value}))
      }

      const handleCheckBox =(e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setRemeber(!remember)
        console.log(remember)
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
                name="password"
                id="password"
                variant='password'
                placeholder="Introduce tu Contraseña"
                onChange={handleChange}
            />
            </Field>
            <Button
            type='submit'
            variant='dark'
            >Entrar</Button>
            <div className={styles.form_options}>
                    <Input 
                    onChange={handleCheckBox}
                    variant="checkbox"
                    type='checkbox'
                >Recuerdame</Input>
                <p>¿Has olvidado tu contraseña?</p>
            </div>
            <Button
            type='button'
            variant='gray'
            >Ir a registrarse</Button>
        </form>
        <Copyright/>
    </div>
  )
}

export default Login