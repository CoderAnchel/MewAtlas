import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Start from './Start.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserDetails from './components/UserDetails.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/app/profile",
    element: <UserDetails />,
  }
])

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  console.error("Root element not found");
}
