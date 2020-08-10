import Main from 'components/Main'
import Header from 'components/Header'

const Layout = (props) => (
    <>
        <Header {...props}>{props.title}</Header>
        <Main>{props.children}</Main>
        <footer>FOOTER</footer>
    </>
)

export default Layout
