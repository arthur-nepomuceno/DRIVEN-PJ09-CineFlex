import styled from "styled-components";
import Text from "../components/Text";

export default function Bottom({src, title, date}){
    return(
        <Section>
            <Figure>
                <img src={src} alt="movie cover"></img>
            </Figure>
            <div>
                <Text text={title}/>
                <Text text={date}/>
            </div>
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    height: 118px;
    padding: 14px 10px 14px 10px;
    background-color: #DFE6ED;

    position: sticky;
    bottom: 0;

    display: flex;
    align-items: center;
`

const Figure = styled.figure`
    width: 64px;
    height: 90px;
    margin-right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;

    img {
        width: 48px;
        height: 72px;
    }
`;