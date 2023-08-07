import React, {useState}from "react";
import Books from "./Books";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const Add=()=>{

const [title,setTitle]=useState("");
const [summary,setSummary]=useState("");
const [date,setDate]=useState("");

let history=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();

    const ids=uuid();

    let uniqueId=ids.slice(0,8);

    let a=title,
    b=summary,
    c=date;

    Books.push({book_id: uniqueId,title: a,summary:b,date:c});

    history("/")
}

    return(
        <div>
            <Form>
                <FormGroup>
                    <FormControl type="text" placeholder="Enter Book Title" required onChange={(e)=>setTitle(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" placeholder="Enter Summary" required onChange={(e)=>setSummary(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Select Date</FormLabel>
                    <FormControl type="date" placeholder="Published Date" required onChange={(e)=>setDate(e.target.value)}>
                    </FormControl>
                </FormGroup>

                <Button onClick={(e)=>handleSubmit(e)} type="sum">Sumbit</Button>
            </Form>
        </div>
    )
}

export default Add;