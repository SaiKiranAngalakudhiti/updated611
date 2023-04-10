import React from 'react'
import { Image } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'

import {
    Box,
    Img,
    useColorModeValue,
} from '@chakra-ui/react';

const Info1Container = (props) => {
    function handleClick(day, id) {
        localStorage.setItem("day", day);

        var date = new Date();
        var currday = date.getDay();
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        props.setDay(day);
        if (weekday[currday] === day) {
            localStorage.setItem("day", "Today");
            props.setDay("Today")
        }
        const element = document.getElementById('cont');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function checkday() {
        if (props.day === localStorage.getItem("day")) {
            return true;
        }
        else if (props.day === "Today") {
            return true;
        }
        return false;
    }
    return (
        <Box
            // w="280px"
            mx="0vw"
            margin={"10px"}
            bg = {"#EFEFEF"}
            // bg={props.day === "Today" ? 'gray.500' : checkday() ? "gray.200" : "white"}
            // border={'1px'}
            // borderColor="black"
            >
            <div className='infocont'>
                <div className = 'infoDiv'>
                    {/* <Box h={'0px'} borderBottom={'1px'} borderColor="black">
                        <Img
                            src={
                                'https://cdn.discordapp.com/attachments/691697792195887144/1081859256229314580/image.png'
                            }
                            roundedTop={'sm'}
                            objectFit="cover"
                            h="full"
                            w="20%"
                            alt={'Blog Image'}
                            margin="auto"
                        />
                    </Box> */}
                    <Box p={1}>
                        <Box
                            px={2}
                            py={1}
                            color="black"
                            // mb={2}
                            >
                            <Text fontFamily={"Karma"} fontSize={'xl'} fontWeight="bold" textAlign="center">
                                {props.day}
                            </Text>
                        </Box>
                    </Box>
                    <Text fontFamily={"Karma"} marginLeft={"1vw"}>Feels Like: {props.weather_data.temperature}° F</Text>
                    <Text fontFamily={"Karma"} marginLeft={"1vw"}>Wind: {props.weather_data.surface_wind}Mph {props.weather_data.wind_direction}</Text>
                    <Text fontFamily={"Karma"} marginLeft={"1vw"}>Precipitation: {props.weather_data.precipitation}%</Text>
                </div>
                <div className='infoImgDiv'>
                    <Image float={"left"} src={require('./ImagesForProj/snow.png')} alt='op' h="4vh" />
                    <Text float={"left"} fontWeight="bold" pl={"5px"} fontSize={'lg'} fontFamily={"Karma"}>{props.weather_data.feels_like}°F</Text>
                    <Text float={"left"} fontFamily={"Karma"}>Feels like {props.weather_data.discription}</Text>
                </div>
            </div>
            <Button bottom="0" width={"100%"} variant="solid" colorScheme={"black"} bg="black"
                onClick={() => handleClick(props.day, props.id)}
            >
                <Text fontFamily={"Karma"} textAlign={"center"} bottom="0" bg="black" color="white" w="90%" m="auto">{props.day} recommends</Text>
            </Button>
        </Box>
    )
}

export default Info1Container
