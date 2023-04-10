import { Button, IconButton } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, HStack, Text } from '@chakra-ui/react'
import SliderMarkExample from "./SliderMarkExample"
import { useEffect, useState } from 'react'
import axios from "axios";
import "./Setting.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Settings = (props) => {

    const [pref, set_pref] = useState([]);
    localStorage.setItem("pref", "casual");
    useEffect(() => {
        async function getpreferences() {
            try {
                let res = await axios.get("http://3.82.160.30:4000/prefAPI/getPreferenceSport");
                set_pref(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getpreferences();
    }, []);
    function handleClick(e) {
        localStorage.setItem("pref", e)
        props.set_pref(e)
    }
    return (
        <Popover >
            <PopoverTrigger>
                {/* <Button w={8} h={8} variant="link" position="absolute" right="5px" top="7px" colorScheme="#FFFFFF"> */}
                    <IconButton cursor={"pointer"} as={SettingsIcon} position="absolute" right="6px" top="12px" colorScheme="#FFFFFF" w={6} h={6} />
                {/* </Button> */}
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontFamily={"Karma"} fontWeight={"600"} colorScheme="black" fontSize="lg">Please Select Your Preference</PopoverHeader>
                <PopoverBody>
                    {/* <div className='settings_pref'>
                        {pref.map((item) => (
                            <Button variant={"outline"} w={"40%"} colorScheme="black" border={"2px solid"} fontFamily={"Karma"} key={item.preference} margin="5px" h="40px" onClick={() => { handleClick(item.preference) }}>
                                {item.preference}
                            </Button>
                        ))}
                    </div> */}
                    <Tabs variant='unstyled'>
                    <TabList>
                    {pref.map((item) => (
                            <Tab _selected={{ color: 'white', bg: 'black', outline : "2px solid black" }} onClick={() => { handleClick(item.preference) }}
                            w={"100px"} outline={"2px solid"} mr={"10px"} fontFamily={"Karma"}>
                                {item.preference}</Tab>
                        ))}
                    </TabList>
                    </Tabs>
                    <Center>
                        <Text fontSize={"lg"} fontFamily="karma" mt="4vh" color={"black"}>
                            How do you feel?
                        </Text>
                    </Center>
                    <SliderMarkExample setStyle={props.setStyle} />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default Settings;