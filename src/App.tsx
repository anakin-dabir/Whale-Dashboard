/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

import { useEffect } from 'react';
import { Affiliate } from './pages/Affiliate/Affiliate';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Deposit } from './pages/Deposit/Deposit';
import { Deposit1 } from './pages/Deposit/Deposit1';
import { Deposit2 } from './pages/Deposit/Deposit2';
import { Withdraw } from './pages/Deposit/Withdraw';
import { Login } from './pages/Login/Login';
import { Settings } from './pages/Settings/Settings';
import { TradeHistory } from './pages/TradeHistory/TradeHistory';

import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  useNavigate,
} from "react-router-dom";

const ToLogin= () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
};

const router = createHashRouter([
  { path: "/", element: <ToLogin />, },

  { path: "/login", element: <Login />, },
  { path: "/dashboard", element: <Dashboard />, },
  { path: "/affiliate", element: <Affiliate />, },
  { path: "/trade", element: <TradeHistory />, },
  { path: "/settings", element: <Settings />, },
  { path: "/dep", element: <Deposit />, },
  { path: "/dep-1", element: <Deposit1 />, },
  { path: "/dep-2", element: <Deposit2 />, },
  { path: "/withdraw", element: <Withdraw />, },
]);


export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
