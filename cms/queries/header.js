export default gql`
query getHeader {
  header {
    logo {
      url
      alt
    }
    navigation {
      navslug
      navlabel
      button
    }
  }
}
`