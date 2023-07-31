import { Avatar, Grid,Paper, TextField } from '@mui/material';
import './RegisterStudent.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { Courses } from '../data/Courses';
import { Gender } from '../data/Gender';

const collectDataFromLocalStorage = () =>{
  const data = localStorage.getItem('formDetails');
  if(data){
    return JSON.parse(data)
  } else{
    return []
  }
}

export const RegisterStudent = ()=>{

  const [stuId,setStuId] = useState("")
  const [firstName,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [gender,setGender] = useState("");
  const [course,setCourse] = useState("");
 
  const [formDetails,setFormDetails] = useState(collectDataFromLocalStorage());

  const handleonsubmit = (e) =>{
    e.preventDefault()
        
    const formData = {
      stuId,
      firstName,
      lastname,
      address,
      email,
      gender,
      course
    }

    console.log(formData)

    setFormDetails([...formDetails,formData])

    setStuId("");
    setFirstName("")
    setLastName("")
    setAddress("")
    setEmail("")
    setGender("")
    setCourse("")

  }

  useEffect(() =>{
    localStorage.setItem('formDetails',JSON.stringify(formDetails));
 },[formDetails]);

    const paperStyle = {padding: 20, 
      height:'105vh',width: '60vw',margin:'80px auto'}
    return(
        
        <Grid className='main-outer'>
            <form onSubmit = {handleonsubmit}>
          <Paper 
          elevation={10} 
          style={paperStyle}
          className="stu-detail-form"
          >
            <h1>Please fill all the fields</h1>
            <div>
            <Avatar><AccountCircleIcon/></Avatar>
            </div>

            <TextField
            className="forminput-age" 
            label = "Student Id"  
            variant="outlined" 
            type="number"
            value = {stuId}
            onChange = {(e)=>{setStuId(e.target.value)}}
            required = "required"
            />

            <TextField
            className="forminput" 
            label = "First Name"  
            variant="outlined" 
            type="text"
            value = {firstName}
            onChange = {(e)=>{setFirstName(e.target.value)}}
            required = "required"
            />

           <TextField
            className="forminput" 
            label = "Last Name"  
            variant="outlined" 
            type="text"
            value = {lastname}
            onChange = {(e)=>{setLastName(e.target.value)}}
            required = "required"
            />

            <TextField
            className="forminput"  
            label = "Address"  
            variant="outlined" 
            type="text"
            value = {address}
            onChange = {(e)=>{setAddress(e.target.value)}}
            required = "required"
            />

            <TextField
            className="forminput"  
            label = "Email"  
            variant="outlined" 
            type="email"
            value = {email}
            onChange = {(e)=>{setEmail(e.target.value)}}
            required = "required"
            />
      
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Gender"
          className='input-data'
          value= {gender}
          onChange={e => setGender(e.target.value)}
          required
        >
        <MenuItem value="Gender">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Gender.Gender1}>Male</MenuItem>
          <MenuItem value={Gender.Gender2}>Female</MenuItem>
        </Select>
    
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          className='input-data'
          label="Course"
          value={course}
          onChange={e => setCourse(e.target.value)}
          required
        >
        <MenuItem value="Course">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Courses.Course1}>CMJD</MenuItem>
          <MenuItem value={Courses.Course2}>GDSE</MenuItem>
          <MenuItem value={Courses.Course3}>DEP</MenuItem>

        </Select>
          
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="success" type='submit'>
                Save
            </Button>
            <Button variant="outlined" color="error" type='reset'>
                Reset
            </Button>
          </Stack>
          
         </Paper>
        </form>
        
   </Grid>
        
    );
}