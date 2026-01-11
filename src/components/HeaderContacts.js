import { Box, Link, Button } from "@mui/material";

import DataContactList from '../data/DataContactList';
import SocialIcon from './SocialIcon';
import DataHeaderIconList from '../data/DataHeaderIconList';

const dataContact = contactName => DataContactList.find(contactData => contactData.icon === contactName);

const HeaderContacts = () => {
  const phone = dataContact('phone');
  const email = dataContact('email');
  return (
    <Box>
      <Box width={200}>
        {
          DataHeaderIconList.map(item => {
            const headerContact = dataContact(item)
            return (
              <Button key={item} href={headerContact.link} sx={{ minWidth: 61 }}>
                <SocialIcon iconName={headerContact.icon} />
              </Button>
            )
          })
        }
      </Box>
      <Box pl={1.5}>
        <Link href={phone.link}>
          <Box
            color="white"
            fontSize="1.15rem"
            fontWeight="700"
            sx={{ minWidth: 50 }}
          >
            {phone.text}
          </Box>
        </Link>
        <Link href={email.link}>
          <Box
            color="white"
            fontSize="0.9rem"
          >
            {email.text}
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default HeaderContacts;