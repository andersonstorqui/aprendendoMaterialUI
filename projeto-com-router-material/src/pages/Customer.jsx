import { useState, useEffect } from "react"
import axios from "axios"
import { CardCustomer } from "../components/CardCustomer"


export const Customer = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get("https://reqres.in/api/users").then((res) => {
            const { data } = res.data
            setUsers(data)
        })
        console.log(users)
    }, [])



    return (
        <>
            <h1>Customer</h1>
            {
                users.map(item => {
                    return (
                        <CardCustomer nome={item.first_name} sobrenome={item.last_name} email={item.email} avatar={item.avatar} />
                    )
                })
            }
        </>
    )

}