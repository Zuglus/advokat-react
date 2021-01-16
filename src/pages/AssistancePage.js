import { Box, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import DataAssistancePages from '../data/DataAssistancePages';

const subheader = subheader => {
  return (
    <Box mt={3}>
      <Typography variant="subtitle2" color="textSecondary">{subheader}</Typography>
    </Box>
  )
}

const find = (id) => DataAssistancePages.find(item => item.id === id);

const AssistancePage = () => {
  const { id } = useParams();
  const page = find(id);

  return (
    <Box>
      <Typography variant="h5" align="center">{page.header}</Typography>
      <List>
        {
          page.list.map(item => (
            <ListItem key={item.id} divider={(item.notDivider) ? false : true} >
              <Box>
                <ListItemText> {item.text ? item.text : subheader(item.subheader)}</ListItemText>
              </Box>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default AssistancePage;