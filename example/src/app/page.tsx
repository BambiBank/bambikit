'use client';

import '@bambikit/bambikit/styles.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ConnectButton } from "@bambikit/bambikit";

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>BambiKit</Typography>
            <ConnectButton />
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>BambiKit</Typography>
      </main>
    </div>
  );
}
