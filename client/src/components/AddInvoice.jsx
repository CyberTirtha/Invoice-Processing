import { Box, Typography,TextField,Button,styled} from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";
const Component=styled(Box)({
        marginTop:20,
        '&> p':{
            fontSize:26,
            marginBottom:10
        },
        '&>div>div':{
            marginRight:20,
            minWidth:200
        }
})
const deafaultObj={
    vendor:'',
    product:'',
    amount:0,
    date:'',
    action:'pending'
}
const AddInvoice=({setAddInvoice})=>{
    const[invoice,setInvoice]=useState(deafaultObj);
    const onValueChange=(e)=>{
        setInvoice({...invoice,[e.target.name]:e.target.value});
    }
const addNewInvoice=async()=>{
    await saveInvoice({...invoice, amount:Number(invoice['amount'])});
    setAddInvoice(false);

}
        return(
        <Component>
            <Typography>
                Add Invoice
            </Typography>
            <Box>
                <TextField 
                variant="standard"
                placeholder="Enter vendor name"
                onChange={(e)=>onValueChange(e)}
                name="vendor"/>
                
                <TextField 
                variant="standard"
                placeholder="Enter product name"
                onChange={(e)=>onValueChange(e)}
                name="product"/>

                <TextField 
                variant="standard"
                placeholder="Enter amount (in Rs)"
                type="number"
                onChange={(e)=>onValueChange(e)}
                name="amount"/>

                <TextField 
                type="date"
                variant="standard"
                placeholder="Enter date"
                onChange={(e)=>onValueChange(e)}
                name="date"/>
                <Button 
                onClick={()=>addNewInvoice()}
                variant="contained" >
                        Add Invoice
                </Button>
            </Box>
        </Component>
    )

}
export default AddInvoice;