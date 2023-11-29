export default gql`
query getHomepage {
  homepage {
    content {
      ... on BlockMultipleRecord {
        id
        gridNumber
        blocks {
          ... on RichtextBlockRecord {
            id
            richtext(markdown: true)
            cardStyle
          }
          ... on MediaBlockRecord {
            id
            media {
              url
              alt
            }
          }
        }
      }
      ... on MediaBlockRecord {
        id
        media {
          alt
          url
        }
      }
      ... on RichtextBlockRecord {
        id
        richtext(markdown: true)
        cardStyle
      }
      ... on RichtextMediaBlockRecord {
        id
        reverse
        richtextComponent {
          richtext(markdown: true)
        }
        mediaComponent {
          media {
            alt
            url
          }
        }
      }
      ... on BlockRelationPostRecord {
        id
        relationPosts {
          title
          slug
          backgroundimage {
            url
            alt
          }
        }
      }
    }
    seo {
      description
      title
      image {
        alt
        url
      }
      twitterCard
    }
  }
}
`