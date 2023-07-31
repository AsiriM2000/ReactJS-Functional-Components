import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";

export default function StateHook(){
    const[name, setName] = useState("");
    const[address, setAddress] = useState("");
    const[contact, setContact] = useState("");

    const[allData, setAllData] = useState([{}]);

    const saveData = () =>{
        const obj={
            name,
            address,
            contact
        }
        setAllData(obj)
        clear();
        console.log(allData);
    }

    const clear = () =>{
        setName("");
        setAddress("");
        setContact("");
    }
    return(
        <div>
            <form>
                <label>
                    Name:
                </label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/><br/>
                <label>
                    Address:
                </label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text"/><br/>
                <label>
                    Contact:
                </label>
                <input value={contact} onChange={(e)=>setContact(e.target.value)} type="text"/><br/>
                
                <button type="button" onClick={()=>saveData()}>Save Data</button>
            </form>

           <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                 
                         <TableRow>
                         <TableCell align="right">{allData.name}</TableCell>
                         <TableCell align="right">{allData.address}</TableCell>
                         <TableCell align="right">{allData.contact}</TableCell>
                         </TableRow>
                    
                </TableBody>
           </Table>
        </div>
    );
}