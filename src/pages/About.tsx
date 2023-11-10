import { Card, CardBody, Container, Image } from "react-bootstrap";


export function About() {
    return (
        <>
        <h1>About Me</h1>
        <Container className="d-flex flex-direction-column justify-content-center">
            <Card className="d-flex flex-direction-column h-100 w-100 p-3" style={{maxWidth: "800px"}} border="primary">
                <Image src="public\Seth_headshot.jpg" roundedCircle height="50%" width="50%" className="align-self-center" />
                <CardBody >
                    <Card.Title className="fs-1">Seth Aker</Card.Title>
                    <Card.Subtitle className="fs-3 mb-2 text-muted">Software Devleoper</Card.Subtitle>
                    <Card.Text>I am a former music educator turned software developer. I am passionate about software development and I use my creativity, analytical thinking, and problem-solving skills that I honed as a teacher to make high-quality software. </Card.Text>
                    <Card.Text>My Skills: Java, React, Typescript, Javascript, Bootstrap, Spring, Spring Boot, Spring Security, PostgreSQL, Vue.js </Card.Text>
                    <Card.Link href="https://www.linkedin.com/in/sethaker">LinkedIn</Card.Link>
                    <Card.Link href="https://www.github.com/seth-aker">Github</Card.Link>
                    <Card.Link href="https://cardgames-webapp.vercel.app/">Cardgames Project</Card.Link>
                </CardBody>
            </Card>
        </Container>
        </>
    )
}