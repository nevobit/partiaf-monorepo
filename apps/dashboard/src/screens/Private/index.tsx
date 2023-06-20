import { Layout } from '@/components'
import { PrivateRoutes } from '@/constant-definitions'
import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Reservation from './Reservation'
import Home from './Home'
import RoutesWithNotFound from '@/utilities/routes-with-not-found'

const Private = () => {
    // temporary path format until private access is configured
  return (
    <Layout>
        <RoutesWithNotFound>
            <Route path={PrivateRoutes.RESERVATION} element={<Reservation />} />
            <Route path={PrivateRoutes.HOME} element={<Reservation />} />
            <Route path={PrivateRoutes.TICKETS} element={<div>Tickets Screen</div>} />

        </RoutesWithNotFound>
    </Layout>

  )
}

export default Private