import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg } from 'reactstrap';
function About() {
    return (
        <div className='container m-5'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-6">
                    <Card className='w-75'>
                        <CardImg  
                        alt="Card image cap"
                        src="assets/avartar.jpeg"
                        top
                        width="200%"/>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-4">Your time is limited, so don’t waste it living someone else’s life</p>
                                <footer className="blockquote-footer">Steve Jobs,
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 my-4">
                    <Card className='mb-3'>
                        <CardBody className="bg-faded">
                           <h2 className='text-center'>Education</h2>
                           <ul>
                               <li>
                                   <em>2021-present king mongkut's university of technology thonburi </em>
                               </li>
                               <li>
                                   <em>High school at Sarasas Witead Bangbuathong</em>
                                 
                               </li>
                               <li>
                               <em>Elementary school at Sarasas Witead Bangbuathong</em>
                               </li>
                           </ul>
                        </CardBody>
                    </Card>
                    <Card className='mb-3'>
                        <CardBody className="bg-faded">
                           <h2 className='text-center'>Favorite Subject</h2>
                           <ul>
                               <li>
                                   <p>CSC102 introduce programing <br></br>
                                   <em>I like this subject because I don't know hot to write 
                                       program and I know how to write program with this class 
                                       and I have to pass the do or die exam this is a good experience.
                                   </em>
                                   </p>
                               </li>
                               <li>
                               <p>CSC209 data structure <br></br>
                                   <em>I interested the content in this class because this class teach how to 
                                       manage a lot of data with many argorithm 
                                   </em>
                                   </p>
                                 
                               </li>
                               <li>
                               <p>CSC103 Com architech <br></br>
                                   <em>This class I have learned architech in computer how to computer compute data 
                                       and learned component of computer such as ram cpu and disk storage
                                   </em>
                                   </p>
                               </li>
                           </ul>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="bg-faded">
                           <h2 className='text-center'>Favorite movie</h2>
                           <ul>
                               <li>
                                   <p>Avengers <br></br>
                                   <em>Because this movie is a superhero movie and I really like iron man.
                                   </em>
                                   </p>
                               </li>
                               <li>
                               <p>Star wars <br></br>
                                   <em>It's a legendary movie, the story tells the story of the war in the first movie to use cg. It's very beautiful and futuristic.
                                   </em>
                                   </p>
                                 
                               </li>
                               <li>
                               <p>Back to the future <br></br>
                                   <em>This class I have learned architech in computer how to computer compute data 
                                       and learned component of computer such as ram cpu and disk storage
                                   </em>
                                   </p>
                               </li>
                           </ul>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>
    );
}
export default About;