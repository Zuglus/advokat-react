import React from 'react';
import { Box, Divider, List, ListItem, ListItemText, Typography, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import TablePrice from '../components/TablePrice';

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
  const [tabIndex, setTabIndex] = React.useState();

  const tab1Name = "victim";
  const tab2Name = "witness";
  const tab3Name = "accused";

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
      <Box height="100%">
        <Typography variant="h5" align="center">{page.header}</Typography>
        <Box p={1}>
          <Typography paragraph align="justify">
            Адвокат оказывает юридическую помощь всем участникам уголовного судопроизводства: подозреваемым/обвиняемым/подсудимым/осужденным, потерпевшим (физическим и юридическим лицам), законным представителям потерпевших, свидетелям.
            </Typography>
          <Typography paragraph align="justify">
            Для подозреваемых/обвиняемых/подсудимых/осужденных Адвокат выступает в качестве защитника.
            </Typography>
          <Typography paragraph align="justify">
            Для потерпевших, законных представителей потерпевших, свидетелей Адвокат является представителем.
            </Typography>
        </Box>
        <Box display="flex" justifyContent="center" flexDirection={{ xs: 'column', sm: 'row' }}>
          <Box p={1} display="flex" justifyContent="center">
            <Button variant={(tabIndex === tab1Name) ? "outlined" : "contained"} color="primary" onClick={() => setTabIndex(tab1Name)}>Потерпевший</Button>
          </Box>
          <Box p={1} display="flex" justifyContent="center">
            <Button variant={(tabIndex === tab2Name) ? "outlined" : "contained"} color="primary" onClick={() => setTabIndex(tab2Name)}>Свидетель</Button>
          </Box>
          <Box p={1} display="flex" justifyContent="center">
            <Button variant={(tabIndex === tab3Name) ? "outlined" : "contained"} color="primary" onClick={() => setTabIndex(tab3Name)}>Обвиняемый</Button>
          </Box>
        </Box>
        <Box hidden={tabIndex !== tab1Name} p={1}>
          <Typography paragraph align="justify">
            Потерпевшим является лицо, которому преступлением причинен физический, нравственный, имущественный вред.
        </Typography>
          <Typography paragraph align="justify">
            В соответствии со ст. 42 УПК РФ потерпевший вправе иметь представителя, в качестве которого в силу ст. 45 УПК РФ могут выступать адвокаты.
            </Typography>
          <Typography paragraph align="justify">
            Право на защиту интересов у потерпевшего возникает фактически на стадии доследственной проверки, с момента, когда причинен вред преступлением.
            </Typography>
          <Typography paragraph variant="subtitle2" align="justify">
            Адвокат Кынтэрец Л.Н. сопровождает потерпевшего со стадии подготовки и подачи заявления в правоохранительные органы, представляет его интересы на стадиях дознания, предварительного следствия, в суде.
            </Typography>
          <Typography paragraph align="justify">
            Стоимость услуг адвоката, выступающего в качестве представителя потерпевшего, зависит от конкретного объема работы.
            Возможно разовое представление интересов на конкретном процессуальном, следственном действии, судебном заседании, подготовки отдельных заявлений, ходатайств, жалоб, исковых заявлений о возмещении причиненного преступлением вреда, либо заключение соглашения на комплексное сопровождение дела на всех стадиях судопроизводства.
            </Typography>
          <Divider />
          <TablePrice tabName={tab1Name} />
        </Box>
        <Box hidden={tabIndex !== tab2Name} p={1}>
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
        <Box hidden={tabIndex !== tab3Name} p={1}>
          <Typography paragraph align="justify">
            Вам необходима профессиональная юридическая помощь, если Вы или Ваш близкий человек подверглись уголовному преследованию.
          </Typography>
          <Box fontStyle="italic">
            <Typography paragraph align="justify" variant="body2">
              В силу ст. 48 Конституции Российской Федерации:
            </Typography>
            <Typography align="justify" variant="body2">
              1. Каждому гарантируется право на получение квалифицированной юридической помощи. В случаях, предусмотренных законом, юридическая помощь оказывается бесплатно.
            </Typography>
            <Typography paragraph align="justify" variant="body2">
              2. Каждый задержанный, заключенный под стражу, обвиняемый в совершении преступления имеет право пользоваться помощью адвоката (защитника) с момента соответственно задержания, заключения под стражу или предъявления обвинения.
          </Typography>
          </Box>
          <Typography paragraph align="justify" variant="subtitle2">
            Адвокат Кынтэрец Л.Н. в режиме 24/7 осуществляет защиту подозреваемых/обвиняемых/осужденных во всех правоохранительных органах (полиции, следственных отделах следственного комитета, налоговой инспекции и иных органах) непосредственно с момента обращения доверителя.
            </Typography>
          <Typography paragraph align="justify" variant="subtitle2">
            Выезд к месту задержания, обыска составляет не более часа с момента заключения Соглашения, в исключительных случаях не терпящих отлагательств, с момента обращения.
          </Typography>
          <Typography paragraph align="justify">
            При принятии обязательства по осуществлению защиты на стадии дознания, предварительного следствия, в суде, Адвокат вырабатывает тактику защиты, составляет и подает в соответствующие инстанции заявления, ходатайства, жалобы.
          </Typography>
          <Typography paragraph align="justify">
            При необходимости по согласованию с доверителем привлекает к участию в деле специалистов соответствующей квалификации.
            </Typography>
          <Typography paragraph align="justify">
            В случае заключения доверителя под стражу, регулярно с определенной периодичностью, навещает своего доверителя в пенитенциарном учреждении, в том числе и с целью выявления фактов нарушения условий содержания, определения состояния здоровья в случае отказа в предоставлении медицинской помощи.
            </Typography>
          <Typography paragraph align="justify">
            Стоимость услуг Адвоката зависит от различных факторов, но не влияет на качество оказания юридической помощи (защиты) доверителю.
            </Typography>
          <Typography paragraph align="justify">
            Как правило, стоимость зависит от объема предъявленного обвинения (1 преступление или несколько преступлений (составов), тяжесть совершенного (подсудно дело мировому суду, районному суду, военному суду, городскому (областному) суду, суду присяжных заседателей), количество привлекаемых лиц и иные обстоятельства.
            </Typography>
          <Typography paragraph align="justify">
            Ниже представлена примерная стоимость вознаграждения Адвоката за оказываемую юридическую помощь по уголовным делам.
            </Typography>
          <Divider />
          <TablePrice tabName={tab3Name} />
        </Box>
      </Box>
    )
  }
}

export default AssistancePage;