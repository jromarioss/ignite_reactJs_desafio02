import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { CheckInfo } from './pages/CheckInfo'
import { CheckSend } from './pages/CheckSend'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkinfo' element={<CheckInfo />} />
        <Route path='/checkconfirmed' element={<CheckSend />} />
      </Route>
    </Routes>
  )
}