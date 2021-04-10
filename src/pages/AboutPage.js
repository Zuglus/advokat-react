import React from 'react';
import { Box } from "@material-ui/core";
import fotoAbout from '../images/advokat.jpg';

import AboutData from '../data/AboutData';

import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';

export default class AboutPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={AboutData.header} subHeading={AboutData.subHeader} />
        <img style={{ float: 'left', marginLeft: '16px', marginRight: '8px', paddingTop: '16px' }} src={fotoAbout} width="50%" alt="Фото адвоката Кынтэрец" />
        <BlockOfText paragraphs={AboutData.text} />
      </Box >
    )
  }
}
