import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  it: [
    'it/introduction',
    {
      label: 'Python',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['Django',],
      },
      items: [
        {
          label: 'Django',
          type: 'category',
          link: {
            type: 'doc',
            id: 'it/python/Django/django-orm-ForeignKey-on_delete',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'it/python/Django',
            },
          ],
        },
      ],
    },

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
            id: 'it/db/PostgreSQL/postgresql-common-commands',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'it/db/PostgreSQL',
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
          dirName: 'it/docker',
        },
      ],
    },

    {
      label: 'Vue',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['Vue', 'FastCrud',],
      },
      items: [
        {
          label: 'FastCrud',
          type: 'category',
          link: {
            type: 'doc',
            id: 'it/vue/FastCrud/fast-crud',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'it/vue/FastCrud',
            },
          ],
        },
      ],
    },

    {
      label: '自动化',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'it/自动化',
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
          dirName: 'it/mac',
        },
      ],
    },
    

  ],
  decoration: [
    'decoration/introduction',
  ],
  delicacy: [
    'delicacy/introduction',
  ],
}

module.exports = sidebars
