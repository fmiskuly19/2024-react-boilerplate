import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

import MainPage from './routes/mainPage.tsx';
import { SnackbarProvider } from 'notistack';
import { useAppSelector } from './hooks.tsx';
import DefaultTheme from './themes/defaultTheme.tsx'

import { useEffect, useState } from 'react';
import AboutPage from './routes/aboutPage.tsx';
import ContactPage from './routes/contactPage.tsx';
import InfoPage from './routes/infoPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/info",
        element: <InfoPage />,
      },
    ]
  },

]);

const Main = () => {

  const currentThemeName = useAppSelector((state) => state.themeSlice.currentThemeName);
  const themes = useAppSelector((state) => state.themeSlice.themes);
  const [theme, setTheme] = useState(DefaultTheme.theme);
  const maxSnackbarShown = 4;

  useEffect(() => {
    let theme = themes.find(x => x.name == currentThemeName).theme;
    setTheme(theme);
  }, [currentThemeName])

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <SnackbarProvider maxSnack={maxSnackbarShown}>
            <RouterProvider router={router} />
          </SnackbarProvider>
      </ThemeProvider>
  )
}

export default Main;