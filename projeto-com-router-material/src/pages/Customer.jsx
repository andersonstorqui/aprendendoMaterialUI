import { useState, useEffect } from "react"
import axios from "axios"
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

import { CardCustomer } from "../components/CardCustomer"


export const Customer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then((res) => {
            setUsers([...res.data.data])
        })
        // console.log(users)
    }, [])



    return (
        <Grid container spacing={6}>
            {
                users.map(item => {
                    return (
                        <Grid item xs={12} sm={6} md={6} >
                            <Paper>
                                <CardCustomer nome={item.first_name} sobrenome={item.last_name} email={item.email} avatar={item.avatar} />

                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>

    )

}