import * as S from './styled'

const Main = (props) => {
    const { title } = props
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
        </S.Wrapper>
    )
}

export default Main
