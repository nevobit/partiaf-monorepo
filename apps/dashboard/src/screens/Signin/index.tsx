import React, { FormEvent ,useEffect, useState} from 'react'
import styles from "./signin.module.css"
import {Link} from 'react-router-dom'
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

    //   TODO: esto es REDUX

    //   const [store, setStore] = useState<Store>({
    //     name: '',
    //     email: '',
    //     password: ''
    //   })

    //   const { success, result, loading, error } = useSelector((state: AppStore) => state.stores);


    //  const dispatch = useDispatch();

    //  const onSubmitCreateStore = () => {
    //     dispatch(createStore(store) as any)
    //  }
    //   useEffect(() => {
    //     if(success){
    //         dispatch(resetStores())
    //     }
    //     dispatch(getStoresByAdmin({ }) as any)
    //   }, [dispatch, success])

  return (
    <div className={styles.body}>
        <div className={styles.header}>
            <img className={styles.logo} src={logo}/>
            <h2 className={styles.title}>Registrarse con nosotros</h2>
            <Button variant='google'> Registrarse con Google</Button>
            <Button variant='facebook'>Registrarse con Facebook</Button>
        </div>
        <div className={styles.hr}>
            <div className={styles.line}>
            </div>
            <p className={styles.center_hr}>O</p>
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
                <div className={styles.buttons}>
                    <Button className={styles.button_submit} type='submit'><p className={styles.button_text}>Entrar</p></Button>
                    <p><Link className={styles.terms} to="">Olvide mi contraseña</Link></p>
                    <p>¿No tienes cuenta?<Link className={styles.terms} to="/signup"> Ir a registrarse →</Link></p>
                </div>
            </form>
            <Copyright/>
        </div>
    </div>
  )
}

export default Signin
