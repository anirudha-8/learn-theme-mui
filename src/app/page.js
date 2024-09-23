'use client';

import { Typography, Button, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" color="primary" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple Next.js app using Material UI.
      </Typography>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
        Secondary Button
      </Button>
    </Container>
  );
}
