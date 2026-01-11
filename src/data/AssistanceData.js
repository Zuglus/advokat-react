const AssistanceData = {
  header: 'Юридическая помощь',
  text: [
    {
      id: 1,
      paragraphBefore: 'В данной рубрике представлена информация о видах юридической помощи, оказываемой адвокатом, на предоставление которых в обязательном порядке заключается ',
      linkName: 'соглашение об оказании юридической помощи',
      linkHref: './agreement.doc',
      paragraphAfter: ' в случае участия защитника (адвоката) в уголовном судопроизводстве, соглашение об оказании юридической помощи в гражданском, конституционном производстве, в случае правового обслуживания юридических лиц на постоянной основе договор о правовом обслуживании юридических лиц.',
      target: '_blank',
      download: true,
      align: 'justify'
    },
    {
      id: 2,
      paragraph: 'Размер вознаграждения адвоката (защитника, представителя) определяется индивидуально в каждом конкретном случае с учетом объема предполагаемой юридической помощи, времени, необходимого для ее предоставления, иных факторов, влияющих на оказание квалифицированной помощи, заслуживающих внимание и соответствует квалификации, профессиональному опыту адвоката, стандарту осуществления защиты в уголовном судопроизводстве, представления интересов в гражданском, конституционном судопроизводстве.',
      align: 'justify'
    }
  ],
  buttons: [
    {
      id: '1',
      name: 'Уголовные дела',
      component: 'RouterLink',
      link: '/assistance/criminal',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '2',
      name: 'Арбитраж',
      component: 'RouterLink',
      link: '/assistance/arbitraj',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '3',
      name: 'Консультация',
      component: 'RouterLink',
      link: '/assistance/consulting',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '4',
      name: 'Гражданские дела',
      component: 'RouterLink',
      link: '/assistance/civil',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '5',
      name: 'Семейные споры',
      component: 'RouterLink',
      link: '/assistance/family',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '6',
      name: 'Наследство',
      component: 'RouterLink',
      link: '/assistance/legacy',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '7',
      name: 'Жилищные споры',
      component: 'RouterLink',
      link: '/assistance/house',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    },
    {
      id: '8',
      name: 'Налоговые споры',
      component: 'RouterLink',
      link: '/assistance/tax',
      color: 'primary',
      gridXS: 6,
      gridSM: 4
    }
  ]
}

export default AssistanceData;