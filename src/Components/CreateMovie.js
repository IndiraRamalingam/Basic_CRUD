import React from 'react'
import { Link } from 'react-router-dom'

function CreateMovie({addMovie,newMovieName,newMovieImage,newMovieLanguage,newMovieDuration,
                      newNameContentRef,handleNameChange,handleImageChange,handleLanguageChange,
                      handleDurationChange}) 
  {
  return (
    <div className='container'>
      
          <form onSubmit={addMovie}>
          <label>Movie Name&nbsp;&nbsp;</label>
          <input type="text"
          value={newMovieName}
          onChange={handleNameChange}
          ref={newNameContentRef}/><br/>
          <label>Image URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text"
          value={newMovieImage}
          onChange={handleImageChange}/><br/>
          <label>Language&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text"
          value={newMovieLanguage}
          onChange={handleLanguageChange}/><br/>
          <label>Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text"
          value={newMovieDuration}
          onChange={handleDurationChange}/><br/>
          <button variant='primary' type="submit">Create Movie</button>      
          </form>
    </div>
  )
}

export default CreateMovie