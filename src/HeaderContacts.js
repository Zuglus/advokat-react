import { Box, Link, Typography, Button, makeStyles } from "@material-ui/core";

import DataContactList from './DataContactList';
import SocialIcon from './SocialIcon';

const useStyles = makeStyles({
  phone: {
    color: 'white',
    fontSize: '1.15rem',
    fontWeight: '700',
    minWidth: '50px'
  },
  email: {
    color: 'white',
    fontSize: '0.9rem'
  },
  socialIcon: {
    minWidth: '61px'
  }
});

const dataContact = contactName => DataContactList.find(contactData => contactData.icon === contactName);

const HeaderContacts = () => {
  const classes = useStyles();
  const phone = dataContact('phone');
  const email = dataContact('email');
  const telegram = dataContact('telegram');
  const viber = dataContact('viber');
  const whatsapp = dataContact('whatsapp');
  return (
    <Box>
      <Box width={200}>
        <Button href={telegram.link} className={classes.socialIcon}>
          <SocialIcon iconName={telegram.icon} />
        </Button>
        <Button href={viber.link} className={classes.socialIcon}>
          <SocialIcon iconName={viber.icon} />
        </Button>
        <Button href={whatsapp.link} className={classes.socialIcon}>
          <SocialIcon iconName={whatsapp.icon} />
        </Button>
      </Box>
      <Box>
        <Link href={phone.link}>
          <Typography className={classes.phone}>
            {phone.text}
          </Typography>
        </Link>
        <Link href={email.link}>
          <Typography className={classes.email}>
            {email.text}
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default HeaderContacts;