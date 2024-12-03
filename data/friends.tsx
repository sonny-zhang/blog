export const Friends: Friend[] = [
  {
    title: '【程序员】Python猫(豌豆花下猫)',
    description: '公众号Python猫，专注于python领域',
    website: 'https://pythoncat.top/',
    avatar: '/img/friend/python_cat.jpg',
  },
  {
    title: '【程序员】kuizuo',
    description: 'TS全栈开发',
    website: 'https://kuizuo.cn/',
    avatar: '/img/friend/kuizuo.png',
  },
  {
    title: '【程序员】Pincman',
    description: '中年老码农,专注于TS全栈开发与教学',
    website: 'https://3rcd.com/',
    avatar: '/img/friend/pincman.png',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
