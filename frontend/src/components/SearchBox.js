import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { renderMatches, useNavigate } from 'react-router-dom'

function SearchBox() {

    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
       if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(navigate(window.location.pathname))
        }
    }

      return (
        <Form className='d-flex' onSubmit={submitHandler} >
            <FormControl
                type='search'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='me-2'
            ></FormControl>

            <Button
                type='submit'
                variant='outline-success'
                className='p-1'
                onClick={submitHandler}
            >
                Submit
            </Button>
 
        </Form>
  )
} 

export default SearchBox