import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto; /*Centralizado */

padding: 2rem 1rem 12rem; /*2rem= 32px; 1rem=16px; 12rem= 12*16= 192px */
display: flex; /*logo e botão alinhados verticalmente ao centro*/
align-items: center;
justify-content: space-between; /*espaço entre a logo e o botão*/

button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; /*deixar a transição mais leve ao passar o mouse por cima */

    &:hover {
        filter: brightness(0.9); /*leve escurecida o background e a fonte quando passa o mouse no botão */
    }
}
`