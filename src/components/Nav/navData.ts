export interface INavData {
  id: number
  title: string
  url: string
}

export const navData: INavData[] = [
  {
    id: 1,
    title: 'Пример 1',
    url: '/',
  },
  {
    id: 2,
    title: 'Пример 2',
    url: '/example2',
  },
  {
    id: 3,
    title: 'Пример 3',
    url: '/example3',
  },
]
