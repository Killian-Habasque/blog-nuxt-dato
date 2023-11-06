export default gql`
query getNavbar {
  homepage {
    navbar {
      navigationLabel
      navigationSlug
    }
  }
}
`