import React, {FC, useEffect, useState} from 'react';
import {Rnd} from 'react-rnd'
import {ButtonsWrapper, TitleWrapper, MenuWrapper} from '../../styled/StyledWordComponent/Wrappers/Wrappers'
import{MaximizeIcon, MinimazeIcon, CloseIcon} from '../../styled/StyledWordComponent/icons/Icons'
import {PTag, TextAreaTag} from '../../styled/StyledWordComponent/otherTags/Tags'

interface IWordComponent{
    id: string;
    className: string,
    display: boolean,
    onClick: Function,
}

const Word : FC<IWordComponent> = ({id, className, display, onClick})=>{
    const [width, setWidth] =  useState<number>(1360)
    const [height, setHeight] = useState<number>(617)
    
    useEffect(()=>{
        console.log("Atualizado")
    },[height, width])

    if(display == true){
        return(
            <Rnd 
            id={id} className={className} display={display}
            style={{
                background:"#FFFFFF",
                cursor: "default",
                border:"rigid",
            }
            }
            default={{
                x: -486,
                y: -617,
                width: width,
                height: height,
            }}
            maxHeight={616}
            maxWidth={1360}
            minWidth={600}
            minHeight={400}
            bounds="window"
            >     
            {/* Rnd elements  */}
                {/* MENU */}
                <MenuWrapper>
                    <TitleWrapper>
                        <PTag>Bloco de Notas</PTag>
                    </TitleWrapper>
                    <ButtonsWrapper>
                        <MinimazeIcon className="far fa-window-minimize"></MinimazeIcon>
                        <MaximizeIcon onClick={
                            ()=>{
                                if(width == 1360){
                                    setWidth(600)
                                    setHeight(400)
                                }else{
                                    setWidth(1360)
                                    setHeight(617)
                                }
                            }
                        
                        } className="far fa-square"></MaximizeIcon>
                        <CloseIcon onClick={onClick} className="fas fa-times"></CloseIcon>
                    </ButtonsWrapper>
                </MenuWrapper>
                {/* END MENU */}
                {/* TEXT AREA */}
                <TextAreaTag/>
                {/* END TEXT AREA */}
            {/* End rnd elements */}
            </Rnd>
        )
    }else{
        return null;
    }
}

export default Word;