const path = require("path")
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const result = await graphql (`
    {
        allContentfulBlogPost {
    nodes {
      content {
        json
      }
      title
      createdAt(fromNow: true)
    }
  }
    }
    
    `)

    console.log(result)
    result.data.allContentfulBlogPost.nodes.forEach((data) => {
        createPage({
        path: `/blogs/${data.title}`,
        component: path.resolve('./src/template/template.tsx'),
        context: {
            data: data
        }
    })
    })
    
}