import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={props.position}>
                <Toolbar style={{ "backgroundImage": "linear-gradient(to right, #000000, #e74c3c )" }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.content}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;