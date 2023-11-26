export default gql`
query getBlog($pattern: String!) {
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
    allPosts(filter: {title: {matches: {pattern: $pattern}}}) {
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