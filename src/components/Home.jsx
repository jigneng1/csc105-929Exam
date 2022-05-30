import React from 'react'
import "./Home.css"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, Button } from "reactstrap";
function Home() {
    return (
      <div className='body'>
            <div className="container">
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="assets/yellow.jpeg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Yellow guys
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                           this picture taked at Sarasas Witead Bangbuathong School in colour sport festival.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="assets/breaking-news.jpeg"
                        top
                        width="100%"

                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Breking News
                        </CardTitle>
                        <CardText>
                          News Report
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="/assets/child.jpeg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Young Child
                        </CardTitle>
                        <CardText>
                            I take this picture when I was young.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
      </div>
    );
}
export default Home