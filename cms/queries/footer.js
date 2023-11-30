
export default gql`
query getFooter {
    footer {
      copyright(markdown: true)
    }
  }
  `