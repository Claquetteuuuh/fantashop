import styled from 'styled-components'

const BigTitle = styled.h1 `
    font-size: 8rem;
    color: #fff;
    text-decoration: underline #246FFF;

    @media screen and (max-width: 1430px) {
        font-size: 6rem;
    }

    @media screen and (max-width: 1090px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 700px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 3rem;
    }
`

const MediumTitle = styled.h1`
    font-size: 6rem;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 3rem;
    }
`

const SmallTitle = styled.h2 `
    font-size: 4rem;
    color: #fff;
    text-decoration: underline #AEB4EA;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media screen and (max-width: 1090px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 700px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

export { BigTitle, MediumTitle ,SmallTitle }