import * as S from './styled'

import links from './content'
import Icons from './icons'

const SocialIcons = () => {
    return (
        <S.SocialIconsWrapper className='u-d-flex u-justify-center'>
            {links.map((link, index) => {
                const Icon = Icons[link.label]
                return (
                    <S.IconLink
                        key={index}
                        href={link.url}
                        title={link.label}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <S.IconWrapper>
                            <Icon />
                        </S.IconWrapper>
                    </S.IconLink>
                )
            })}
        </S.SocialIconsWrapper>
    )
}

export default SocialIcons
