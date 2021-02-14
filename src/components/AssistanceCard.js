import {
  Grid,
  Box,
  Typography,
  Link,
} from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";

import DataAssistanceList from '../data/DataAssistanceList';

const AssistanceCard = DataAssistanceList.map((item) => {
  return (
    <Grid
      item xs={6}
      sm={4}
      key={item.id}
    >
      <Link
        component={RouterLink}
        to={item.link}
        color="inherit"
        variant="subtitle1"
        underline="none"
      >
        <Box bgcolor="primary.main" height={60} p={1} color="white">
          <Typography variant="h6" align="center">
            {item.content}
          </Typography>
        </Box>
        <Box
          height={1 / 3}
          p={1}
          display="flex"
          justifyContent="flex-end"
          color="white"
          bgcolor="primary.main"
        >
          Подробнее &gt;&gt;
        </Box>
      </Link>
    </Grid>
  )
})

export default AssistanceCard;