import { Box, Paper, Typography, Button } from '@mui/material';

const Friends = () => {
  return (
    <Box mb={1} ml={{ xs: 0, md: 1 }} mt={{ xs: 1, md: 0 }}>
      <Paper>
        <Typography variant="h6" align="center">Друзья</Typography>
        <Box color="red" align="center" pb={1}>
          <Button color="inherit" variant="contained" href="https://xn--18-6kci4ddh.xn--p1ai/">
            Детективное агентство "Право"
        </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default Friends;