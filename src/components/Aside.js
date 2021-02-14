import { Box, Typography, Paper, List, ListItem } from '@material-ui/core';

import Gallery from './Gallery';
import Friends from './Friends';
import externalLink from '../images/externalLink.svg';
import DataUsefullLinksList from '../data/DataUsefullLinksList';

const Aside = () => {
  return (
    <Box>
      <Friends />
      <Gallery />
      <Box mt={1} ml={{ xs: 0, md: 1 }}>
        <Paper>
          <Typography variant="h6" align="center">Полезные ссылки</Typography>
          <List>
            {DataUsefullLinksList.map(item => {
              return (
                <ListItem button component="a" target="_blank" rel="noopener" key={item.id} href={item.link}>
                  <img width="10px" src={externalLink} alt={item.name} />
                  {item.name}
                </ListItem>
              )
            })}
          </List>
        </Paper>
      </Box>
    </Box>
  )
}

export default Aside;