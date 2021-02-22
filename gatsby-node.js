const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createWpPosts = new Promise((resolve, reject) => {
    const articleQuery = graphql(`
      {
        allWordpressPost(
          filter: { categories: { elemMatch: { name: { eq: "Articles" } } } }
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    const sermonQuery = graphql(`
      {
        allWordpressPost(
          filter: { categories: { elemMatch: { name: { eq: "Sermons" } } } }
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    articleQuery.then((result) => {
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }
      const postEdges = result.data.allWordpressPost.edges

      postEdges.forEach((edge) => {
        createPage({
          path: `articles/${edge.node.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    }) // query.then

    sermonQuery.then((result) => {
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }
      const postEdges = result.data.allWordpressPost.edges

      postEdges.forEach((edge) => {
        createPage({
          path: `sermons/${edge.node.slug}`,
          component: path.resolve(`./src/templates/sermons.js`),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  }) // createWpPosts

  return Promise.all([createWpPosts])
} // createPages
