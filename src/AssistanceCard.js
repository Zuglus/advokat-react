import {
  Grid,
  Box,
  Card,
  Typography,
  Button
} from '@material-ui/core';

const assistanceList = [
  {
    id: '1',
    content: 'Уголовные дела',
    link: 'assistance/criminal'
  },
  {
    id: '2',
    content: 'Арбитраж',
    link: 'assistance/arbitraj'
  },
  {
    id: '3',
    content: 'Гражданские дела',
    link: 'assistance/civil'
  },
  {
    id: '4',
    content: 'Консультация',
    link: 'assistance/consulting'
  },
  {
    id: '5',
    content: 'Семейные споры',
    link: 'assistance/family'
  },
  {
    id: '6',
    content: 'Наследство',
    link: 'assistance/legacy'
  },
  {
    id: '7',
    content: 'Жилищные споры',
    link: 'assistance/house'
  },
  {
    id: '8',
    content: 'Трудовые споры',
    link: 'assistance/working'
  }
]

const AssistanceCard = assistanceList.map((item) => {
  return (
    <Grid item xs={6} sm={4} key={item.id}>
      <Card style={{ height: "100%" }}>
        <Box height={2 / 3} p={1}>
          <Typography variant="h6" align="center">
            {item.content}
          </Typography>
        </Box>
        <Box
          height={1 / 3}
          p={1}
          display="flex"
          justifyContent="flex-end">
          <Button
            variant="text"
            href={item.link}
            size="small"
            color="primary"
          >
            Подробнее &gt;&gt;
          </Button>
        </Box>
      </Card>
    </Grid >
  )
})

export default AssistanceCard;