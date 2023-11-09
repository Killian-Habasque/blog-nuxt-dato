// export default gql`
// query getPost {
//   post {
//     heroBlock {
//       title
//       slug
//       backgroundImage {
//         url
//         alt
//       }
//     }
//     content {
//       ... on MediaBlockRecord {
//         id
//         media {
//           url
//           alt
//         }
//       }
//       ... on RichtextBlockRecord {
//         id
//         richtext
//       }
//     }
//   }
// }
// `

// export default gql`
// query getPostBySlug($slug: String) {
//   post(filter: {slug: {eq: $slug}}) {
//     heroBlock {
//       title
//       slug
//       backgroundImage {
//         url
//         alt
//       }
//     }
//     content {
//       ... on MediaBlockRecord {
//         id
//         media {
//           url
//           alt
//         }
//       }
//       ... on RichtextBlockRecord {
//         id
//         richtext
//       }
//       ... on RichtextMediaBlockRecord {
//         id
//         layout
//         richtextComponent {
//           richtext
//         }
//         mediaComponent {
//           media {
//             url
//             alt
//           }
//         }
//       }
//     }
//     slug
//   }
// }
// `

export default gql`
query getPostBySlug($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    content {
      ... on MediaBlockRecord {
        id
        media {
          url
          alt
        }
      }
      ... on RichtextBlockRecord {
        id
        richtext
      }
      ... on RichtextMediaBlockRecord {
        id
        richtextComponent {
          richtext
        }
        mediaComponent {
          media {
            url
            alt
          }
        }
        reverse
      }
    }
    slug
    backgroundimage {
      url
      alt
    }
    title
    seo {
      twitterCard
      title
      description
      image {
        url
      }
    }
  }
}
`