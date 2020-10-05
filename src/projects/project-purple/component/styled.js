import styled from 'styled-components';

const margin = 'margin: 16px auto;'
const font = 'font: 32px "Fira Sans", sans-serif'

export const ContainerHeader = styled.div`
    ${margin}
    ${font}
`;
export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ContainerImage = styled.div`
    ${margin}
`;
export const ContainerNumber = styled.div`
    ${margin}
`;
export const Number = styled.div`
    ${font}
`;
export const ContainerButtons = styled.div`
    ${margin}
    display: flex;
    width: 200px;
    justify-content: space-between;
`;
export const Button = styled.button`
    ${font}
`;
