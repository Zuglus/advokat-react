import { Box, Typography, Link } from '@material-ui/core';

export default function NotFound() {
  return (
    <Box>
      <Box p={1}>
        <Typography variant="h5">Ошибка 404</Typography>
      </Box>
      <Box p={1}>
        <Typography paragraph>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно необходимо исправить адрес.</Typography>
        <Typography paragraph>Также можно перейти на <Link href="/" underline="none">начальную страницу</Link>, и начать там.</Typography>
      </Box>
    </Box>
  )
}