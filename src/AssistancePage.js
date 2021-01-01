import { useParams } from 'react-router-dom';

const assistancePages = [
  {
    id: 'criminal',
    head: 'Оказание юридической помощи по уголовным делам',
    list: [
      {
        id: 1,
        text: 'Ведение уголовного дела на стадии предварительного расследования'
      },
      {
        id: 2,
        text: 'Ведение уголовного дела на стадии рассмотрения судом первой инстанции'
      }
    ]
  }
]

const find = (id) => assistancePages.find(item => item.id === id);

const AssistancePage = () => {
  let { id } = useParams();
  let page = find(id);

  return (
    <div>
      <div>{page.head}</div>
      <ul>
        {
          page.list.map(item => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default AssistancePage;