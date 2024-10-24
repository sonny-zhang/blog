import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'Python全栈工程师',
    }),
    description: (
      <Translate>
        作为一名 Python 全栈工程师，钻研源码技术，提高代码质量和开发效率。
      </Translate>
    ),
    header: <WebDeveloperSvg className={'h-auto w-full'} height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: translate({
  //     id: 'homepage.feature.spider',
  //     message: '会点逆向 & 爬虫',
  //   }),
  //   description: (
  //     <Translate>
  //       作为一名曾学习与实践逆向工程两年半的开发者，对于逆向工程有着浓厚的兴趣，同时造就了超凡的阅读代码能力。没有看不懂的代码，只有不想看的代码。
  //     </Translate>
  //   ),
  //   header: <SpiderSvg className={'h-auto w-full'} height={150} role="img" />,
  // },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    description: (
      <Translate>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </Translate>
    ),
    header: <OpenSourceSvg className={'h-auto w-full'} height={150} role="img" />,
  },
]

export default FEATURES
