import location from '../images/location.svg';
import email from '../images/email.svg';
import phone from '../images/phone.svg';
import telegram from '../images/telegram.svg';
import whatsapp from '../images/whatsapp.svg';
import viber from '../images/viber.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

import { Box } from '@material-ui/core';

const images = [
  {
    name: 'location',
    img: location
  },
  {
    name: 'email',
    img: email
  },
  {
    name: 'phone',
    img: phone
  },
  {
    name: 'telegram',
    img: telegram
  },
  {
    name: 'whatsapp',
    img: whatsapp
  },
  {
    name: 'viber',
    img: viber
  },
  {
    name: 'facebook',
    img: facebook
  },
  {
    name: 'instagram',
    img: instagram
  }
]

const SocialIcon = ({ iconName }) => {
  if (iconName) {
    const finding = images.find(item => item.name === iconName)
    return (
      <Box mr={1}>
        <img src={finding.img} width="35px" alt={iconName} />
      </Box>
    )
  } else {
    return false
  }
}

export default SocialIcon;