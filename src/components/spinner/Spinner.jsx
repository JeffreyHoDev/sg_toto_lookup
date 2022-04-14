import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box 
    width="100%" height="100%" 
    alignItems="center"
    justifyContent="center"
    >
      <CircularProgress color="success" />
    </Box>
  );
}

export default Spinner