import React, {FC, useState} from 'react';
import imgWindows from './assets/img/windowsbg.jpg'
import imgPrompt from './assets/img/promptIcon.jpg'
import {ImgWindowsBg, ImgPromptIcon} from './styled/StyledApp/img/Imgs'
import {WordIconWrapper, ImgPromptIconWrapper ,ChromeIconWrapper ,InputTypeHereMenuWrapper, CortanaIconWrapper, WindowsIconWrapper, ScreenWrapper, MenuWrapper} from './styled/StyledApp/wrappers/Wrapper'
import {WordIcon, ChromeIcon ,CortanaIcon, WindowsIcon} from './styled/StyledApp/icons/Icons'
import {InputTypeHereMenu} from './styled/StyledApp/inputs/Inputs'
import WordScreenComponent from './components/WordComponent/WordScreenComponent'

const App : FC<any> = () => {
  const [display, setDisplay] = useState<boolean>(false)
  return (
    <>
      <ScreenWrapper className="MainScreen">
        <ImgWindowsBg src={imgWindows}/>
      </ScreenWrapper>
      <MenuWrapper className="MenuBar">
        <WindowsIconWrapper><WindowsIcon className="fab fa-windows"></WindowsIcon></WindowsIconWrapper>
        <InputTypeHereMenuWrapper><InputTypeHereMenu type="text" className="form-control" placeholder={ `${<i className="fal fa-search"></i>} Digite aqui para pesquisar`} aria-label="Username" aria-describedby="basic-addon1"/></InputTypeHereMenuWrapper>
        <CortanaIconWrapper><CortanaIcon className="far fa-circle"></CortanaIcon></CortanaIconWrapper>
        <ChromeIconWrapper><ChromeIcon className="fab fa-chrome"></ChromeIcon></ChromeIconWrapper>
        <WordIconWrapper><WordIcon onClick={()=>{setDisplay(true)}} className="far fa-file-word"></WordIcon>
          <WordScreenComponent id="modal" className="modal" display={display} onClick={()=> setDisplay(false)}></WordScreenComponent>
        </WordIconWrapper>
        <ImgPromptIconWrapper><ImgPromptIcon src={imgPrompt}/></ImgPromptIconWrapper>
      </MenuWrapper>
    </>
  );
}

export default App;
