import React from 'react'
import {
    Button,
    Text,
    Image
} from '@chakra-ui/react'
const TimeContainerInner = (props) => {
    return (
        <Button w="70px" bg='#EFEFEF' p={1} color='black' mx="0.2rem">
            <Text fontFamily={"Karma"} textAlign={"center"}>
                {props.time}
            </Text>
            <Image
                boxSize='40px'
                objectFit='cover'
                src={require('./ImagesForProj/snow.png')}
                alt='Dan Abramov'
                margin={"auto"}
            />
            <Text fontFamily={"Karma"} textAlign={"center"}>
                26°F
            </Text>
        </Button>
    )
}

export default TimeContainerInner
