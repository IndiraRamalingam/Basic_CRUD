import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router,Link, useParams } from 'react-router-dom';

function Read({m,editfun,deletefun})
{
 const styles={
  visibility:'hidden',
   display:'inline',
 }
  return(
    <>
    <div className='col-sm-6' style={{ width: '18rem' }}>
             <Card className='m-2 text-center'>
              <Card.Img variant="top" src={m.img} />
              <Card.Body>
                <Card.Title><p style={styles}>{m.id}</p>{m.movieName}</Card.Title>
                <Card.Text>
                  {/* <p>{m.id}</p> */}
                  <p>{m.language}</p>
                  <p>{m.duration}</p>
                </Card.Text>               
              </Card.Body>
              <Card.Footer className="text-muted">
              <div className="row">
                <div className="col-sm-6">
                {/* <Link to={`/editmovie/${m.id}`}> */}
                <Button variant="warning" onClick={(()=>{
                  editfun(m);
                  console.log("Clicked ",m)
                })}>Edit</Button>
                {/* </Link> */}
                </div>
                <div className="col-sm-6">
           
                <Button variant="danger" onClick={(() => {
                deletefun(m.id);
                console.log(m);
              })}>Delete</Button>
              
                </div>
                </div> 
  
              </Card.Footer>
            </Card>
          </div>
    </>
  )
}

function ReadMovies({movieList,editfun,deletefun}) {
  return (
    <>
    <div className='row'>
        {movieList.map(m =>
           <Read key={m.id} m={m} editfun={editfun} deletefun={deletefun}/>      
        )}
    </div>
    </>
  )
}

export default ReadMovies

