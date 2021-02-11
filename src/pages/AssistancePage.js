import React from 'react';
import { Box, List, ListItem, ListItemText, Tab, Tabs, Typography } from '@material-ui/core';
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
  const [tabIndex, setTabIndex] = React.useState("0");
  const handleChange = (event, newIndex) => setTabIndex(newIndex);

  if (page.id !== 'criminal') {
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
  } else {
    return (
      <Box>
        <Typography variant="h5" align="center">{page.header}</Typography>
        <Tabs
          variant="fullWidth"
          value={tabIndex}
          onChange={handleChange}
        >
          <Tab label="Потерпевший" value="0" />
          <Tab label="Свидетель" value="1" />
          <Tab label="Обвиняемый" value="2" />
        </Tabs>
        <Box hidden={tabIndex !== "0"}>
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
        <Box hidden={tabIndex !== "1"} m={1}>
          <Typography paragraph align="justify">
            В соответствии со ст. 56 УПК РФ свидетель имеет право явиться на допрос с адвокатом.
          </Typography>

          <Typography paragraph align="justify">
            Данное право необходимо принять во внимание, если Вы понимаете, что следователь, пригласив Вас на допрос, в последующем может изменить статус свидетеля на подозреваемого.
          </Typography>

          <Typography paragraph align="justify">
            Присутствие адвоката на допросе, по меньшей мере, гарантирует допрашиваемому избежать неудобных вопросов, либо ответить на них без негативных последствий в будущем.
          </Typography>

          <Typography variant="subtitle2" paragraph align="justify">
            Адвокат Кынтэрец Л.Н. сопровождает свидетелей на допрос в любой правоохранительный орган, налоговый орган, суд.
            </Typography>

          <Typography paragraph align="justify">
            Стоимость услуг адвоката зависит от конкретного процессуального, следственного действия, объема проведения подготовительной работы (к примеру ознакомление с финансовыми документами перед допросом в налоговом органе).
          </Typography>

          <Typography paragraph align="justify">
            Как правило, стоимость одного дня (вечера, ночи) участия адвоката составляет от 5 000 руб. до 10 000 руб. независимо от затраченного времени, и адвокат участвует во всех следственных действиях в этот день (например: допрос, очная ставка, следственный эксперимент и тому подобное)
          </Typography>

          <Typography paragraph align="justify">
            Выезд в пригороды Санкт-Петербурга компенсируется дополнительно (как правило, оплачивается стоимость потраченного бензина).
          </Typography>

        </Box>
        <Box hidden={tabIndex !== "2"}>
          В разработке
        </Box>
      </Box>
    )
  }
}

export default AssistancePage;