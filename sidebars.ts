import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  skill: [
    'skill/introduction',
    {
      label: '数据库DB',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch', 'postgresql'],
      },
      items: [
        {
          label: 'PostgreSQL',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/db/PostgreSQL/postgresql-common-commands',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/db/PostgreSQL',
            },
          ],
        },
      ],
    },
    {
      label: 'Docker',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/docker',
        },
      ],
    },
    {
      label: 'Mac',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/mac',
        },
      ],
    },
  ],
}

module.exports = sidebars
