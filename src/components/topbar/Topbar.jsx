import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Topbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
            <Toolbar style={{ background: 'red' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                This is just for fun and merely references. It is not sponsored by any parties, just personal hobby project. All data are recorded manually by myself, might have a bit error. All the information provided on this website is provided on an “as is” and “as available” basis and you agree that you use such information entirely at your own risk.
                </Typography>
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Topbar;