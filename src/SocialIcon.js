import location from './location.svg';
import email from './email.svg';
import phone from './phone.svg';
import telegram from './telegram.svg';
import whatsapp from './whatsapp.svg';
import viber from './viber.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';

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
  const finding = images.find(item => item.name === iconName)
  return (
    <div>
      <img src={finding.img} width="35px" alt={iconName} />
    </div>
  )
}

export default SocialIcon;