import React, { FormEvent ,useEffect, useState} from 'react'
import styles from "./signin.module.css"
import {Link} from 'react-router-dom'
import logo from "../../../public/logo-partiaf-neg.svg"
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import Button from '@/components/Shared/Button'
import Copyright from '@/components/Shared/Copyright'


const Signin = () => {

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
        <div className={styles.header}>
            <img className={styles.logo} src={logo}/>
            <h2 className={styles.title}>Registrarse con nosotros</h2>
            <Button variant='google'> Registrarse con Google</Button>
            <Button variant='facebook'>Registrarse con Facebook</Button>
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
                <Input 
                    onChange={handleCheckBox}
                    variant="checkbox"
                    type='checkbox'
                >Recuerdame</Input>
                <Button type='submit'><p className={styles.button_text}>Registrarse</p></Button>
            </form>
        </div>
    </div>
  )
}

export default Signin
