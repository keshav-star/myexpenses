import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Add({addleft,addright}) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const plus = (e) => {
        e.preventDefault();
        if(!title || !amount) alert("Amount or title cannot be empty")
        else addleft(title,amount);
    }
    const minus = (e) => {
        e.preventDefault();
        if(!title || !amount) alert("Amount or title cannot be empty")
        else addright(title,amount);
    }
    return (
        <div className="w-50 m-auto">
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title or description</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
                </Form.Group>
                <div className="add ">
                    <Button id='plus' onClick={plus} className='m-3' variant='success'>
                        Add Fund
                    </Button>
                    <Button id='minus' onClick={minus} className='m-3' variant='danger'>
                        Add expense
                    </Button>
                    <Button id='cleared' onClick={()=>localStorage.clear()} className='m-3' variant='light'>
                        Clear Book
                    </Button>
                </div>
            </Form>
        </div>
    )
}


// date
// separate container for expenese and income
// and map them differnetly