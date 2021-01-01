import { Box, Button, Typography, Grid } from '@material-ui/core';

import location from './location.svg'

const contactsList = [
  {
    id: 1,
    name: "Адрес:",
    text: "198264, город Санкт-Петербург, проспект Ветеранов, дом 171",
    link: "",
    source: './location.svg',
    gridMD: 12,
    gridSM: 12
  },
  {
    id: 2,
    name: "Телефон:",
    text: "+7 (911) 985-50-36",
    link: "tel:+79119855036",
    gridMD: 4,
    gridSM: 6
  },
  {
    id: 3,
    name: "Email:",
    text: "lkynteretc@gmail.com",
    link: "mailto:lkynteretc@gmail.com",
    gridMD: 4,
    gridSM: 6
  },
  {
    id: 4,
    name: "Telegram:",
    text: "Lkynteretc",
    link: "tg://resolve?domain=Lkynteretc",
    gridMD: 4,
    gridSM: 6
  },
  {
    id: 5,
    name: "Viber:",
    text: "+7 (911) 985-50-36",
    link: "viber://chat?number=+79119855036",
    gridMD: 4,
    gridSM: 6
  },
  {
    id: 6,
    name: "WhatsApp:",
    text: "+7 (911) 985-50-36",
    link: "whatsapp://send?phone=79119855036",
    gridMD: 4,
    gridSM: 6
  },
  {
    id: 7,
    name: "Facebook:",
    text: "id=100056061102769",
    link: "https://www.facebook.com/profile.php?id=100056061102769",
    gridMD: 4,
    gridSM: 6
  }
]

const contactItems = contactsList.map((item) => {
  return (
    <Grid item xs={12} sm={item.gridSM} md={item.gridMD} key={item.id}>
      <Box m={1}>
        <Button href={item.link} variant="contained" key={item.id} fullWidth>
          <Box>
            <Box display="flex" flexDirection="row">
              <Box>
                <img src={location} alt="location" />
              </Box>
              <Box ml={1}>
                <Typography
                  style={{
                    textTransform: 'none',
                  }}
                  variant="h6">
                  {item.name}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                style={{
                  textTransform: 'none',
                }}
                variant="subtitle1">
                {item.text}
              </Typography>
            </Box>
          </Box>
        </Button>
      </Box>
    </Grid>
  )
})

const Contacts = () => {
  return (
    <Box>
      <Box p={1}>
        <Typography variant="h5">Контактная информация</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Адвокат, учредивший адвокатский кабинет, Кынтэрец Л.Н.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Регистрационный номер 18/676 в реестре адвокатов УР.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Удостоверение 696, выданное 15 августа 2005 года УФРС России по УР</Typography>
      </Box>
      <Grid container>
        {contactItems}
      </Grid>
      <Box p={1}>
        <Typography align="justify">В соответствии со ст. 9 Федерального закона от 27.07.2006 г. № 152 «О персональных данных» при посещении сайта адвоката Кынтэрец Л.Н., использовании форм обратной связи даете свое согласие на использование, обработку своих персональных данных, исключительно в целях получения квалифицированной юридической помощи, а также на хранение данных об этих результатах на электронных носителях.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Настоящее согласие предоставляется на осуществление действий в отношении персональных данных, которые необходимы
        для достижения указанных выше целей, включая (без ограничения) сбор, систематизацию, накопление, хранение,
        уточнение (обновление, изменение), использование, передачу третьим лицам для осуществления действий по обмену
        информацией, обезличивание, блокирование персональных данных, а также осуществление любых иных действий,
        предусмотренных действующим законодательством Российской Федерации.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Адвокат Кынтэрец Л.Н. информирует посетителей сайта, что гарантирует обработку размещенных на сайте (форме
        обратной связи) персональных данных в соответствии с действующим законодательством Российской Федерации как
        неавтоматизированным, так и автоматизированным способами.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Согласие действует до достижения целей обработки персональных данных или в течение срока хранения информации.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Согласие может быть отозвано в любой момент по заявлению разместившего свои персональные данные.</Typography>
      </Box>
      <Box p={1}>
        <Typography align="justify">Заполняя форму обратной связи, Вы подтверждаете, что, давая такое согласие, действуете по собственной воле и в
        своих интересах.</Typography>
      </Box>
    </Box>
  )
}

export default Contacts;