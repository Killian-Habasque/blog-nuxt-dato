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
    }
  }
}
`