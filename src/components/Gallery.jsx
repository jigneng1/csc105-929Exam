import React, { useState } from 'react';
import { CardImg, Card, CardImgOverlay, CardTitle,CardBody,CardText } from 'reactstrap';
import { Picture } from '../Gallery/Gallery';

function Gallery({ data }) {
    const [image, setImage] = useState(null);
    const handleClick = (pic) => {
        setImage(pic);
    }
    const renderSelecd =(pic) => {
        if (pic != null)
            return(
                <Card>
                    <CardImg top src={pic.image} alt={pic.name} />
                    <CardBody>
                      <CardTitle>{pic.name}</CardTitle>
                      <CardText>{pic.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    const renderPic = data.map((e) => {
        return (
            <div className='col-12 col-md-5' >
                <Card key={e.id} onClick={()=>handleClick(e)}>
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