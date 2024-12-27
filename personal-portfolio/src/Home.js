import CardGrid from "./Components/CardGrid/CardGrid";
import Cell from "./Components/Cell/Cell";
import Container from "./Components/Container/Container";
import Row from "./Components/Row/Row";
import Section from "./Components/Section/Section";
import Typography from "./Components/Typography/Typography";
import mySkills from "./Data/Skills";
import MyImage from "./Assets/Images/Me.jpg";
import './Home.css'
import Image from "./Components/Image/Image";

function Home() {
    return (
        <Container>
            <Section>
                <Row>
                    <Cell xs={12}>
                        <Typography type="title">
                            Juan Pablo Pineda - Computer Science Engineer
                        </Typography>
                    </Cell>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Cell style={{display: "flex", justifyContent: "center"}} xs={6} md={4}>
                        <Image fit="cover" style={{borderRadius: "50%"}} width={300} height={300} src={MyImage} alt="Juan Pablo Pineda" className="image" />
                    </Cell>
                    <Cell xs={6} md={6}>
                        <Typography type="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Cell>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Cell xs={12}>
                        <Typography type="title">
                            Skills
                        </Typography>
                    </Cell>
                </Row>
                <Row>
                    <CardGrid data={mySkills} />
                </Row>
            </Section>
        </Container>
    )
}

export default Home;