import styled from 'styled-components';

export const ProductsContainer = styled.div`
    padding: 30px 50px;
    display: flex;
`;

export const LeftContainer = styled.div`
    flex: 1;
    position: sticky;
    height: 100%;
    top: 50px;  
`;

export const FilterItem = styled.div`
    margin-bottom: 30px;

    h2 {
        font-weight: 400;
        margin-bottom: 20px;
    }
`;

export const InputItem = styled.div`
    margin-bottom: 10px;

    label {
        margin-left: 10px;
    }
`;

export const RightContainer = styled.div`
    flex: 4;
`

export const CategoryImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: 0% 15%;
    margin-bottom: 50px;
`;

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    justify-items: center;

    @media screen and (max-width: 1195px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
    }

    @media screen and (max-width: 896px) {
        grid-template-columns: repeat(1, 350px);
        grid-row-gap: 25px;
        justify-content: center;
    }
`;