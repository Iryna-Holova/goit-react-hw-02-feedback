import styled from 'styled-components';

export const ButtonsContainer = styled.div`
width: 300px;
margin: 0 auto 20px auto;
display: flex;
justify-content: space-between;
`;

export const OptionButton = styled.button`
width: 90px;
padding: 5px;
background-color: #ff000086;
border-radius: 5px;
text-align: center;
text-transform: capitalize;
font-weight: bold;

:hover, :focus {
    background-color: #ff0000;
}
`;