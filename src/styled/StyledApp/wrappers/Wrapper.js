import styled from 'styled-components';

export const ScreenWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    max-height: 40px;
    height: 100%;
    background: #262628;
    display: flex;
`
export const WindowsIconWrapper = styled.div`
    text-align: center;
    font-size: 20px;
    max-height: 617px;
    height: 100%;
    max-width: 47px;
    width: 100%;
    &:hover .fa-windows {
      color: #3d71a1;
      background: #373340;
    }
`
export const CortanaIconWrapper = styled.div`
    text-align: center;
    font-size: 16px;
    max-height: 617px;
    height: 100%;
    max-width: 47px;
    width: 100%;
    &:hover .fa-circle {
      background: #373340;
    }
`
export const ChromeIconWrapper = styled.div`
    text-align: center;
    font-size: 22px;
    max-height: 617px;
    height: 100%;
    max-width: 47px;
    width: 100%;
    &:hover .fa-chrome {
        background: #373340;
    }
`
export const WordIconWrapper = styled.div`
    text-align: center;
    font-size: 20px;
    max-height: 617px;
    height: 100%;
    max-width: 52px;
    width: 100%;
    &:hover .fa-file-word {
      background: #373340;
    }
`

export const ImgPromptIconWrapper = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 22px;
    max-height: 617px;
    height: 100%;
    max-width: 50px;
    width: 100%;
    &:hover {
        background: #373340;
    }
`

export const InputTypeHereMenuWrapper = styled.div`
    max-width: 345px;
    width: 100%;
`