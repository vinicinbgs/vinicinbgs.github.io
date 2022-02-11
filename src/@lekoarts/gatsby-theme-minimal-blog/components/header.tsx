/** @jsx jsx */
import { jsx, useColorMode, Flex } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title"
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [4] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <img src="/photo.jpeg" sx={{
          display: `inline-block`,
          marginBottom: 0,
          borderRadius: `50%`,
          backgroundClip: `padding-box`,
          width: `10%`,
          border: `3px solid white`,
          boxShadow: `0px 0px 10px #c6c6c6`
        }} />

        <HeaderTitle />

        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </div>
    </header>
  )
}

export default Header
