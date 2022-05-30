import React, { useState } from 'react';
import { CardImg, Card, CardImgOverlay, CardTitle, CardBody, CardText, Form, FormGroup, Label, Input,Button } from 'reactstrap';

function Gallery({ data }) {
    const [image, setImage] = useState(null);
    const [name,setUsername] = useState("");
    const [comment,setComment] = useState("");
    const [score , setScore] = useState(1);
    const handleClick = (pic) => {
        setImage(pic);
        setUsername("");
        setComment("");
        setScore(1);
    }
    const handleUsername = (e) =>{
        setUsername(e.target.value);
    }
    const handleComment = (e)=>{
        setComment(e.target.value);
    }
    const handleScore = (e) =>{
        setScore(e.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        let word = `Username : ${name}
Like Score : ${score}
Comment : ${comment}`
        alert(word);
        setUsername("");
        setComment("");
        setScore(1);
    }
    const renderSelecd = (pic) => {
        const taskvalidator = name !== "" && comment!== ""
        if (pic != null)
            return (
                <div>
                <Card>
                    <CardImg top src={pic.image} alt={pic.name} />
                    <CardBody>
                        <CardTitle>{pic.name}</CardTitle>
                        <CardText>{pic.description}</CardText>
                    </CardBody>
                </Card>
                <Form className='p-5' onSubmit={handleSubmit}>
                    <h2>commented & liked</h2>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type='text' valid={taskvalidator} invalid={!taskvalidator} placeholder='username' onChange={handleUsername}
                        value={name}>
                         
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="like">Like</Label>
                        <Input type="select" name="select" id="exampleSelect" onChange={handleScore} value={score}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">comment</Label>
                        <Input type="textarea" name="text" id="exampleText" onChange={handleComment} value={comment}/>
                    </FormGroup>
                    <Button type="submit" disabled={!taskvalidator}>submit</Button>
                </Form>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    const renderPic = data.map((e) => {
        return (
            <div className='col-12 col-md-5' >
                <Card key={e.picId} onClick={() => handleClick(e)}>
                    {/* <Link to={`/menu/${dish.id}`} > */}
                    <CardImg width="100%" src={e.image} alt="Ayuthaya" />
                    <CardImgOverlay>
                        <CardTitle>{e.name}</CardTitle>
                    </CardImgOverlay>
                    {/* </Link> */}
                </Card>
            </div>
        );
    })
    return (
        <div className='container'>
            <div className='row'>
                {renderPic}
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderSelecd(image)}
                </div>
            </div>

        </div>
    );
}
export default Gallery;