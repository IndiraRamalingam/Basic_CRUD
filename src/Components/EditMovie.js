import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditMovie({ setEditing, updateUser, currentuserdata }) {

const[moviesEdit,setMoviesEdit]=useState(currentuserdata);

 useEffect(() =>{
  setMoviesEdit(currentuserdata)
},[currentuserdata] )

const handleChage = (event) => {
  const { name, value } = event.target;
  setMoviesEdit({ ...moviesEdit, [name]: value });
};

const myFunction= () => {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

 
  return (
    
    <div className='container'>
        <Form onSubmit={event => {
          event.preventDefault();
          updateUser(moviesEdit.id,moviesEdit);
        }}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="movieName">Movie Name</Form.Label>
              <Form.Control type="text" 
                 value={moviesEdit.movieName}
                  name='movieName'
                  onChange={handleChage}
                placeholder="Enter a Movie Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="img">Movie Image URL</Form.Label>
              <Form.Control type="text" 
                value={moviesEdit.img}
                name='img'
                onChange={handleChage}
                placeholder="Enter a Movie Image URL" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="language">Movie Language</Form.Label>
              <Form.Control type="text" 
                 value={moviesEdit.language}
                  name='language'
                  onChange={handleChage}
                placeholder="Enter a Movie Language" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="duration">Movie Duration</Form.Label>
              <Form.Control type="text" 
                value={moviesEdit.duration}
                name='duration'
                onChange={handleChage}
                placeholder="Enter a Movie Duration" />
            </Form.Group>
            <div className="col text-center mb-2">
            <Button variant="warning" size="lg" type="submit" onClick={myFunction}>
              Update Movie
            </Button>
            </div>
        </Form>
        <br/>
      <div className="col text-center" id="myDIV" style={{ display: 'none' }}>
        <Form.Text className="text-muted">
                Your changes has been updated. Click the button below to view the movies.
        </Form.Text>
        <br/>
        <Link to="/">
          <button className="btn btn-primary" type="button">
              View Movies
          </button>
        </Link>
      </div>
    </div>
  )
}

export default EditMovie