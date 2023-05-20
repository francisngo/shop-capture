import styled from 'styled-components';

export const ProductContainer = styled.div`
    padding: 20px 50px;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 1195px) {
        flex-direction: column;
        gap: 25px;
    }
`;

export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    gap: 20px;
`;

export const ImagesContainer = styled.div`
    flex: 1;

    @media screen and (max-width: 1195px) {
        display: none;
    }

    img {
        width: 100%;
        object-fit: contain;
        cursor: pointer;
        margin-bottom: 10px;

        @media screen and (max-width: 1195px) {
            height: 150px;
        }
    }
`;

export const MainImage = styled.div`
    flex: 2;

    img {
        width: 100%;
        max-height: 800px;
        object-fit: cover;
    }
`;

export const RightContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 10px;

    p {
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
    }

    hr {
        border: 1px solid rgb(238, 237, 237);
    }
`;

export const Price = styled.span`
    font-size: 30px;
    color: black;
    font-weight: 500;
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;

        &:hover {
            background-color: lightgray;
            border: none;
        }

    }
`;

export const ButtonsContainer = styled.div`
    width: 310px;
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: black;
    font-size: 14px;    
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: gray;
    font-size: 14px;
    margin-top: 30px;

    hr {
        width: 200px;
        border: 1px solid rgb(238, 237, 237);
    }
`;

