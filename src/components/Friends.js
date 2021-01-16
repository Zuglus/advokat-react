import { Box, Paper, Typography, Button } from '@material-ui/core';

const Friends = () => {
  return (
    <Box ml={1} mb={1}>
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