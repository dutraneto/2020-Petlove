import { ButtonWrapper } from './styled'

const Button = ({ children, onClick, buttonStyle }) => {
    return (
        <ButtonWrapper className={buttonStyle} onClick={onClick}>
            {children}
        </ButtonWrapper>
    )
}

export default Button
