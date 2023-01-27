import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr); /*3 colunas de tamanhos iguais, que poderia ser 1fr 1fr 1fr */
 gap: 2rem; /*espaço entre os grids */
 margin-top: -10rem;

 div {
    background: var(--shape); /*ficar com fundo branco a div com os valores */
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);


    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block; /*por padrão o strong vem com display:inline e por isso não funciona se não colocar o display: block */
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background {
        background: var(--green);
        color: #FFF;
    }
 }
 `;