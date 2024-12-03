import Translate, { translate } from '@docusaurus/Translate'
import BreakFastSvg from '@site/static/svg/undraw_breakfast_psiw.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import UnderConstructionSvg from '@site/static/svg/undraw_under_construction_-46-pa.svg'
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
  },
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
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '私厨美食',
    }),
    description: (
      <Translate>
        家里有2个小宝，对于健康饮食有迫切的需求，且正在做私厨，可以提供各种美味的食物，仅小区供应
      </Translate>
    ),
    header: <BreakFastSvg className={'h-auto w-full'} height={150} role="img" />,
  },
  ,
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '装修ing',
    }),
    description: (
      <Translate>
        准备学习室内装修，自己的房子自己去装修，装修过程中的所有问题达到都可以自己解决，并可以给粉丝装修房屋
      </Translate>
    ),
    header: <UnderConstructionSvg className={'h-auto w-full'} height={150} role="img" />,
  },
]

export default FEATURES
