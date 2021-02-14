import { Box, Typography } from "@material-ui/core";
import fotoAbout from '../images/advokat.jpg';

import DataAboutText from '../data/DataAboutText';

const paragraph = DataAboutText.map((item) => {
  return (
    <Typography paragraph key={item.id} align="justify">{item.text}</Typography>
  )
})

const About = () => {
  return (
    <Box>
      <Box p={1}>
        <Typography variant="h5">
          Кынтэрец Людмила Николаевна
        </Typography>
        <Typography variant="h6">
          Адвокат
        </Typography>
      </Box>
      <img style={{ float: 'left', marginLeft: '8px', marginRight: '8px', paddingTop: '8px' }} src={fotoAbout} width="50%" alt="Фото адвоката Кынтэрец" />
      <Box p={1}>
        {paragraph}
      </Box>
    </Box>
  )
}

export default About;