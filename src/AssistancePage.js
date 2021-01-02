import { Box, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import AssistancePagesData from './AssistancePagesData';

const find = (id) => AssistancePagesData.find(item => item.id === id);

const AssistancePage = () => {
  let { id } = useParams();
  let page = find(id);

  return (
    <Box>
      <Typography variant="h5" align="center">{page.header}</Typography>
      <List>
        {
          page.list.map(item => (
            <ListItem divider={item.divider} >
              <Box>
                <ListItemText key={item.id}> {item.text ? item.text : item.subheader}</ListItemText>
              </Box>
            </ListItem>
          ))
        }
      </List>
    </Box >
  )
}

export default AssistancePage;