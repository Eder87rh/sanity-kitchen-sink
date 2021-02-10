export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602428d06a42611df6f49261',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sjigp1kk',
                  apiId: 'd923b348-9e8d-45a2-9a79-f15c9f30715d'
                },
                {
                  buildHookId: '602428d103fd9e1cf8d28845',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jkowez3f',
                  apiId: 'd98ad46b-a2f6-49ec-8c79-9c8eac4afb19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Eder87rh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jkowez3f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
