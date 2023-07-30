import { Layout } from '@/components'
import { PrivateRoutes } from '@/constant-definitions'
import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Reservation from './Reservation'
import Home from './Home'
import RoutesWithNotFound from '@/utilities/routes-with-not-found'
import Tickets from './Tickets'
import Settings from './Settings'
import Messages from './Messages'
import Collaborators from './Collaborators'
import ReservationDetails from '@/components/Shared/ReservationDetails'
import Modal from '@/components/Shared/Modal'

const Private = () => {
    // temporary path format until private access is configured
  return (
    <Layout>
        <RoutesWithNotFound>
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Home />} />
            <Route path={PrivateRoutes.TICKETS} element={<Tickets/>}>
              <Route path="tickets/:id" element={<Modal/>}/>
            </Route>
            <Route path={PrivateRoutes.RESERVATION} element={<Reservation />}>
              {/* <Route path="reservation/id" element={<Reservation/>}/> */}
            </Route>
            <Route path={PrivateRoutes.COLLABORATORS} element={<Collaborators/>} />
            <Route path={PrivateRoutes.SETTINGS} element={<Settings/>} />
            <Route path={PrivateRoutes.MESSAGES} element={<Messages/>} />

            <Route path={PrivateRoutes.MODAL} element={<Modal/>} />
        </RoutesWithNotFound>
    </Layout>

  )
}

export default Private