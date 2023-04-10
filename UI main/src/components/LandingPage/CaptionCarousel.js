import React from 'react'
import { Text, Button, Image } from '@chakra-ui/react'
import "./CaptionCarousel.css"
const CaptionCarousel = (props) => {
  function handleClick() {
    localStorage.setItem("day", "Today");
    props.setDay(localStorage.getItem("day"))
    console.log(props.day)
  }

  let clothes_data = props.clothes_data;
  let clothes_name = clothes_data !== null && clothes_data.split(",");
  console.log(clothes_name)
  return (
    <>
      {clothes_data === null ?
        <div className='cont' id="cont">
          <div>
            <Text pl={"2vh"} fontSize={"xl"} fontFamily={"Karma"} float={"left"} textAlign="center">
              {props.day + " suggestions for workout and running " + props.style + " " + props.pref + " preference"}
            </Text>
            <Button display={"block"} float={"right"} onClick={() => handleClick()}>Today's Preference</Button>
          </div>
          <div className='containerX'>
            <div className='container1'>
              <div className='container2'>
                {/* <img alt="NONE" src='https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' className='imginslider'></img> */}
                <img alt="NONE" src={require('./ImagesForProj/long-sleeve.png')} className='imginslider'></img>
                <Text fontFamily={"Karma"} textAlign={"center"}>Long Sleeve</Text>
                {/* <img alt="NONE" src='https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' className='imginslider'></img> */}
                <img alt="NONE" src={require('./ImagesForProj/sweater.png')} className='imginslider'></img>
                <Text fontFamily={"Karma"} textAlign={"center"}>Heavy Top</Text>
              </div>
            </div>
            <div className='container1'>
              <img alt="NONE" src='https://images.unsplash.com/photo-1602573991155-21f0143bb45c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80' className='imginslider1'></img>
              <Text fontFamily={"Karma"} textAlign={"center"}>Long Pants</Text>
            </div>
            <div className='container1'>
              <div className='container2'>
                <img alt="NONE" src='https://images.unsplash.com/photo-1586867764343-c1e7ca23b3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='imginslider'></img>
                <Text fontFamily={"Karma"} textAlign={"center"}>Face Mask</Text>
                <img alt="NONE" src='https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='imginslider'></img>
                <Text fontFamily={"Karma"} textAlign={"center"}>Heavy Cap</Text>
              </div>
            </div>
            <div className='container1'>
              <div className='container2'>
                <img alt="NONE" src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='imginslider'></img>
                <Text fontFamily={"Karma"} textAlign={"center"}>Heavy Boots</Text>
                <img alt="NONE" src='https://images.unsplash.com/photo-1515273283790-38b8a1dc851e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='imginslider'></img>
                <Text fontFamily={"Karma"} textAlign={"center"}>Heavy Mittens</Text>
              </div>
            </div>
          </div>
        </div>

        :

        <div id="cont">
          <Text fontSize={"2xl"} textAlign="center">
            {props.day + " suggestions for workout and running " + props.style + " " + props.pref + " preference"}
          </Text>
          <div className='received'>
            {clothes_name.map((item) => (

              item === "Heavy Top" ?
                <div className='received_items'><Image src={require('./ImagesForProj/sweater.png')} alt='op' h="30vh" display={"block"} margin={"auto"} /><Text>{item}</Text></div> : item === "Long-Sleeve" ?
                  <div className='received_items'><Image src={require('./ImagesForProj/long-sleeve.png')} alt='op' h="30vh" display={"block"} margin={"auto"} /><Text>{item}</Text></div> : item === "Heavy Socks" ?
                    <div className='received_items'><Image src={require('./ImagesForProj/socks.png')} alt='op' h="30vh" display={"block"} margin={"auto"} /><Text>{item}</Text></div> :
                    <></>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default CaptionCarousel
