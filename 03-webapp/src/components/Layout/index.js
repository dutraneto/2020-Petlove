import Main from 'components/Main'

const Layout = (props) => (
    <>
        <header>{props.title}</header>
        <Main>{props.children}</Main>
        <footer>FOOTER</footer>
    </>
)

export default Layout
