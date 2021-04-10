const NotFoundData = {
  header: 'Ошибка 404',
  text: [
    {
      id: 1,
      paragraph: 'Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно необходимо исправить адрес.',
      align: 'justify'
    },
    {
      id: 2,
      paragraphBefore: 'Также можно перейти на ',
      linkName: 'начальную страницу',
      linkHref: '/',
      paragraphAfter: ', и начать там.',
      align: 'justify'
    }
  ]
}

export default NotFoundData;