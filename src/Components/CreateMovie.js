import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateMovie({addMovie,newMovieName,newMovieImage,newMovieLanguage,newMovieDuration,
                      newNameContentRef,handleNameChange,handleImageChange,handleLanguageChange,
                      handleDurationChange}) 
  {
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
          <Form onSubmit={addMovie}>
              <Form.Group className="mb-3">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" 
                  value={newMovieName}
                  onChange={handleNameChange}
                  ref={newNameContentRef}
                  placeholder="Enter a Movie Name"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Movie Image URL</Form.Label>
                <Form.Control type="text" 
                  value={newMovieImage}
                  onChange={handleImageChange}
                  placeholder="Enter a Movie Image URL" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Movie Language</Form.Label>
                <Form.Control type="text" 
                  value={newMovieLanguage}
                  onChange={handleLanguageChange}
                  placeholder="Enter a Movie Language" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Movie Duration</Form.Label>
                <Form.Control type="text" 
                  value={newMovieDuration}
                  onChange={handleDurationChange}
                  placeholder="Enter a Movie Duration" />
              </Form.Group>
              <div className="col text-center mb-2">
              <Button variant="success" size="lg" type="submit" onClick={myFunction}>
                Create Movie
              </Button>
              </div>
          </Form>
          <br/>
          <div className="col text-center" id="myDIV" style={{ display: 'none' }}>
          <Form.Text className="text-muted">
                  Your movie has been created. Click the button below to view the movies.
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

export default CreateMovie