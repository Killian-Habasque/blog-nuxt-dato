export default gql`
query MyHeader {
  header {
    logo {
      url
      alt
    }
    
    navigation {
      navslug
      navlabel
    }
  }
}
`