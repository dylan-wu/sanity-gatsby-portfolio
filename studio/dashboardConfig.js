export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d818eead6037801881db57d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aaz2gck4',
                  apiId: '7407125d-c468-45d1-829e-f66d20f47612'
                },
                {
                  buildHookId: '5d818eeaa9573601819c6919',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k8486ba5',
                  apiId: '7dafa509-ee65-4979-af4c-f9da244fc26d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dylan-wu/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k8486ba5.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
