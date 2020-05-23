export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ec95c18d2193eab248e0155',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5no4jd1y',
                  apiId: '2de4a006-be8b-44ac-a296-335563357761'
                },
                {
                  buildHookId: '5ec95c19f5ea88d6abd60c78',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-6gkyytqv',
                  apiId: '1fbe1e06-209e-4d02-948e-a7bdd528634b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakubjanousek/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-6gkyytqv.netlify.app', category: 'apps'}
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
