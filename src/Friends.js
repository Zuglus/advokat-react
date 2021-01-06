import { Box, Paper, Typography, Button } from '@material-ui/core';

const Friends = () => {
  return (
    <Box m={1} mt={0}>
      <Paper>
        <Typography variant="h6" align="center">Друзья</Typography>
        <Button fullWidth href="https://xn--18-6kci4ddh.xn--p1ai/">Детективное агентство "Право"</Button>
      </Paper>
    </Box>
  )
}

export default Friends;