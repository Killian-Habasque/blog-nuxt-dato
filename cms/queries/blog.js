export default gql`
query getBlog {
  blog {
    heroBlock {
      title
      backgroundImage {
        alt
        url
      }
      slug
    }
  }
  allPosts {
    id
    heroBlock {
      title
      backgroundImage {
        url
        alt
      }
      slug
    }
  }
}
`