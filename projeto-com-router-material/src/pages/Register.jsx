import { useState } from "react"
import { TextField, Button } from "@mui/material"
import styled from "styled-components"



export const CustomerRegister = () => {

    const [form, setForm] = useState({
        name: "",
        job: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            [name]: value,
        })
    }
    console.log(form)


    return (
        <>
            <TextField label="Digite seu nome" variant="standard" name="name" value={form.name} onChange={handleInputChange} />
            <TextField label="Digite seu cargo" variant="standard" name="job" value={form.job} onChange={handleInputChange} />
            <Button variant="contained">Cadastrar</Button>

        </>
    )
}

