import React, {useEffect, useState}from "react";
import Books from "./Books";
import {Link,useNavigate} from 'react-router-dom'
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const Edit=()=>{
    const [title,setTitle]=useState("");
    const [summary,setSummary]=useState("");
    const [date,setDate]=useState("");
    const [id,setID]=useState("");

    let history=useNavigate();
    
    var index =Books.map((e)=>{
        return e.id
     }).indexOf(id);


    useEffect(()=>{
        setTitle(localStorage.getItem("title"))
        setSummary(localStorage.getItem("summary"))
        setDate(localStorage.getItem("date"))
        setID(localStorage.getItem("book_id"))   
    },[])
    
     const handleSubmit=(e)=>{
        e.preventDefault();
        let a=Books[index];
        a.title=title;
        a.summary=summary;
        a.date=date;
        debugger
        history("/")
    }

    

     return(
        <div>
        <Form>
            <FormGroup>
                <FormControl type="text" placeholder="Enter Book Title" value={title} required onChange={(e)=>setTitle(e.target.value)}>
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl type="text" placeholder="Enter Summary"value={summary} required onChange={(e)=>setSummary(e.target.value)}>
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormLabel>Select Date</FormLabel>
                <FormControl type="date" placeholder="Published Date" value={date}  required onChange={(e)=>setDate(e.target.value)}>
                </FormControl>
            </FormGroup>

            <Button onClick={(e)=>handleSubmit(e)} type="submit">Update</Button>
        </Form>
    </div>
     );
}

export default Edit;