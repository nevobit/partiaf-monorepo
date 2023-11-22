import { Layout } from '@/components'
import React from 'react'

const Success = () => {
  return (
    <Layout title='Soonoro Fest'>
        <h2 style={{
            fontSize: 26,
            color: "#fff",
            textAlign: 'center',
            marginTop: 100,
            paddingBottom: 150,
            maxWidth: "90%",
            marginInline: "auto"
        }}>¡Excelente, ya tienes tus tickets, pronto te los enviaremos al correo!</h2>
    </Layout>
  )
}

export default Success