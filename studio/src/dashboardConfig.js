export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e588957653231edbb4efaf8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jayx5a6b',
                  apiId: '9e00b534-7e9d-4de0-bce6-dd9976913e38'
                },
                {
                  buildHookId: '5e588957b1957ece3451b9cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-se1jmaig',
                  apiId: 'f11c3472-7bee-479b-b136-58cc714ad5a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nieto1705/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-se1jmaig.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
