import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

export function DefaultLayout() {
  return (
    <header>
      <Header />
      <Outlet />
    </header>
  )
}