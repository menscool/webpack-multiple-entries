import React from 'react';
import {useStore} from "effector-react";
import {increase, decrease, counter$} from "../store";
import {
    Button,
    ContainerButtons,
    ContainerHeader,
    ContainerImage,
    ContainerNumber,
    ContainerPage,
    Number
} from "./styled";
import {Links} from "../../../common/components/links";

export const IndexPage = () => {
    const counter = useStore(counter$)
    return (
        <ContainerPage>
            <ContainerHeader>project-yellow</ContainerHeader>
            <Links />
            <ContainerImage>
                <img alt="Cat's image" src={'/images/cat.jpg'}/>
            </ContainerImage>
            <ContainerNumber>
                <Number>{counter}</Number>
            </ContainerNumber>
            <ContainerButtons>
                <div><Button onClick={decrease}>-</Button></div>
                <div><Button onClick={increase}>+</Button></div>
            </ContainerButtons>
        </ContainerPage>
    );
};
