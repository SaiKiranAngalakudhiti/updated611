import React, { useEffect, useState } from 'react'
import { Input, InputGroup, InputRightAddon, Button, Grid, GridItem } from '@chakra-ui/react'
import { Text, Flex, Box, Image } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons';
import Settings from './Setting';
import './Search.css'
import axios from "axios";

const Search = (props) => {

    const [inputs, setInputs] = useState({
        searchip: "",
    });
    const [weather_data, set_weather_data] = useState(null);
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const today = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let curr_day_idx = today.getDay();
    const day_list = []
    day_list.push(weekday[curr_day_idx])
    let temp1 = (curr_day_idx + 1) % 7;

    while (temp1 !== curr_day_idx) {
        day_list.push(weekday[temp1]);
        temp1 = (temp1 + 1) % 7;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem("searchip", inputs.searchip);
        props.setSearchip1(inputs.searchip);
        try {
            let res = await axios.get("http://localhost:4000/weatherAPI/getWeatherData/" + inputs.searchip);
            res.data.sort(function (a, b) {
                return day_list.indexOf(a.day) - day_list.indexOf(b.day);
            });
            set_weather_data(res.data[0])
        } catch (err) {
            console.log(err)
        }
    };

    const [send_search, set_send_search] = useState(props.act_data[0]);

    useEffect(() => {
        let day = localStorage.getItem("day");
        for (let i = 0; i < 7; i++) {
            if (day === "Today") {
                set_send_search(props.act_data[0]);
                return;
            }
            let temp = weekday[today.getDay()];
            if (temp === props.act_data[i].day) {
                set_send_search(props.act_data[i]);
            }
        }
    }, [])
    return (
        <div className='searchdiv'>
            <Settings position="absolute" top="0" right="0" setStyle={props.setStyle} set_pref={props.set_pref} />
            <Flex alignItems={"center"} justifyContent="center" pt="4vh" width={"40vw"} margin="auto">
                <InputGroup size='lg'>
                    <Input name="searchip" fontFamily={"Karma"} placeholder="Enter your postal code / city" h={"5vh"} onChange={handleChange} background="rgba(255,255,255,0.6)" color="black" />
                    <InputRightAddon children={<Button onClick={handleSubmit} ><Search2Icon width={"-moz-max-content"} /></Button>} h={"5vh"} />
                </InputGroup>
            </Flex>
            <Text textAlign={"center"} fontSize="3xl" color={"white"} mt={"1vh"} fontFamily={"Karma"} >Buffalo</Text>
            <Grid templateColumns='repeat(2, 1fr)' marginTop={'1vh'} display={'flex'} flexWrap="wrap" justifyContent={'space-around'}>
                <GridItem mb="2vh">
                    <Box p={4}>
                        <Box
                            px={2}
                            py={1}
                            color="black"
                            mb={2}
                            className="text_bkg_box"
                        >
                            <div className='startcontimg'>
                                <Image src={require('./ImagesForProj/cloudy.png')} alt='op' h="4vh" />
                                <Text fontSize={'xl'} fontFamily={"Karma"} fontWeight="medium" textAlign="center">
                                    {(props.send_search.temperature !== '15' && props.send_search.temperature) || (weather_data && weather_data.temperature) || (18)} ° F
                                </Text>
                            </div>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem mb="2vh">
                    <Box p={4}>
                        <Box
                            px={2}
                            py={1}
                            color="black"
                            mb={2}
                            className="text_bkg_box"
                        >
                            <div className='startcontimg'>
                                <Image src={require('./ImagesForProj/cloudy.png')} alt='op' h="4vh" />
                                <Text fontSize={'xl'} fontFamily={"Karma"} fontWeight="medium" textAlign="center">
                                    {(props.send_search.discription !== "Cloudy" && props.send_search.discription) || (weather_data && weather_data.discription)
                                        || ("Sunny")
                                    }
                                </Text>
                            </div>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem mb="2vh">
                    <Box p={4}>
                        <Box
                            px={2}
                            py={1}
                            color="black"
                            mb={2}
                            className="text_bkg_box"
                        >
                            <div className='startcontimg'>
                                <Image src={require('./ImagesForProj/wind (1).png')} alt='op' h="4vh" />
                                <Text fontSize={'xl'} fontFamily={"Karma"} fontWeight="medium" textAlign="center">
                                    {(props.send_search.surface_wind != "10" && props.send_search.surface_wind) || (weather_data && weather_data.surface_wind) || (10)}
                                    mph {(props.send_search.wind_direction !== "WS" && props.send_search.wind_direction) || (weather_data && weather_data.wind_direction) || ("NW")}
                                </Text>
                            </div>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem mb="2vh">
                    <Box p={4}>
                        <Box
                            px={2}
                            py={1}
                            color="black"
                            mb={2}
                            className="text_bkg_box"
                        >
                            <div className='startcontimg'>
                                <Image src={require('./ImagesForProj/temperature.png')} alt='op' h="4vh" />
                                <Text fontSize={'xl'} fontFamily={"Karma"} fontWeight="medium" textAlign="center">
                                    {(props.send_search.feels_like !== "15" && props.send_search.feels_like) || (weather_data && weather_data.feels_like) || (!weather_data && 13)}° F
                                </Text>
                            </div>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem mb="2vh">
                    <Box p={4}>
                        <Box
                            px={2}
                            py={1}
                            color="black"
                            mb={2}
                            className="text_bkg_box"
                        >
                            <div className='startcontimg'>
                                <Image src={require('./ImagesForProj/snow.png')} alt='op' h="4vh" />
                                <Text fontSize={'xl'} fontFamily={"Karma"} fontWeight="medium" textAlign="center">
                                    8% High Chance Of Rain
                                </Text>
                            </div>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Search
