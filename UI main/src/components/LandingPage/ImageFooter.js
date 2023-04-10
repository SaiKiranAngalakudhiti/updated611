import React from 'react'
import { Image } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react';


const ImageFooter = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={"0"} marginTop={'2vh'} display={'flex'} flexWrap="wrap" justifyContent={'space-around'} bg="gray.100"
            mb="2vh">
            <Image
                src='https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                w={"50%"}
            />
            <Image
                src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                w={"50%"}
            />
        </Grid>
    )
}

export default ImageFooter
