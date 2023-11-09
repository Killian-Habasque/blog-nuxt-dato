export default gql`
query getBlog {
  blog {
    title
    slug
    backgroundimage {
      url
      alt
    }
    seo {
      twitterCard
      title
      description
      image {
        url
      }
    }
  }
  allPosts {
    id
    title
    slug
    backgroundimage {
      url
      alt
    }
  }
}
`