import { Box, Button, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const MainContainer = styled(Box)({
    display: "flex",
   alignItems: "center",
    justifyContent: "space-around",
    height:"20vh",
    width:"15vw",
    background:"white",
    flexDirection:"column",
})
const Wrapper = styled(Box)({
    display:"flex",
    height:"100vh",
    width:"100vw",
background:"black",
alignItems: "center",
justifyContent: "center",
})

const CounterApp = () => {
    const [counterValue, setCounterValue] = useState(0);

    const handleIncrement = () => {
        setCounterValue(prev=>prev+1);
    };

    const handleDecrement = () => {
        setCounterValue(prev=>prev-1);
    };

    return (
        <Wrapper>
            <MainContainer>
                <Typography variant='h4' color={"gray"}>
                    {"Counter"}
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
                    <Button variant="contained" onClick={handleIncrement}>
                        +
                    </Button>
                    <Typography variant='h4' color={"gray"} >
                        {counterValue}
                    </Typography>
                    <Button variant="contained" onClick={handleDecrement}>
                        -
                    </Button>
                </Box>
            </MainContainer>
        </Wrapper>
    )
}

export default CounterApp
