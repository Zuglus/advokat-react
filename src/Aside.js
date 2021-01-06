import { Box, Typography, Paper, List, ListItem } from '@material-ui/core';

import Gallery from './Gallery';
import Friends from './Friends';
import externalLink from './externalLink.svg';

const listUsefullLinks = [
  {
    id: "1",
    name: "Верховный суд РФ",
    link: "http://vsrf.ru"
  },
  {
    id: "2",
    name: "Арбитражный суд Санкт-Петербурга и Ленинградской области",
    link: "http://spb.arbitr.ru"
  },
  {
    id: "3",
    name: "Тринадцатый арбитражный апелляционный суд",
    link: "http://13aas.arbitr.ru"
  },
  {
    id: "4",
    name: "Санкт-Петербургский городской суд",
    link: "http://sankt-peterburgsky.spb.sudrf.ru"
  },
  {
    id: "5",
    name: "Адвокатская палата Санкт-Петербурга",
    link: "http://www.apspb.ru"
  },
  {
    id: "6",
    name: "Нотариальная палата Санкт-Петербурга",
    link: "https://78.notariat.ru"
  },
]

const usefullLinks = listUsefullLinks.map((item) => {
  return (
    <ListItem button component="a" key={item.id} href={item.link}>
      <img width="10px" src={externalLink} alt="externalLink" />
      {item.name}
    </ListItem>
  )
})

const Aside = () => {
  return (
    <Box>
      <Friends />
      <Gallery />
      <Box m={1}>
        <Paper>
          <Typography variant="h6" align="center">Полезные ссылки</Typography>
          <List>
            {usefullLinks}
          </List>
        </Paper>
      </Box>
    </Box>
  )
}

export default Aside;