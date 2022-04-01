import Container from '@mui/material/Container';


import { Header } from '../partials/Header/Header'



export const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="sm" sx={{ padding: "15px 0px" }} >
                {children}
            </Container>
        </>
    )
}

