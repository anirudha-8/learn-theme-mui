import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff4081',
        },
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
    },
});

export default theme;
