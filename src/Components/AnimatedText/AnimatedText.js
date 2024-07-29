import React from 'react';
import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import './AnimatedText.css';

function AnimatedText() {
  return (
    <ChakraProvider>
     <CSSReset /> 
      <Box className='animated-text'
        
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Full Stack Developer")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Pasión por la tecnología")
              .pauseFor(1500)
              .start();
          }}
          options={{
            loop: true,
            autoStart: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      
      </Box>
    </ChakraProvider>
  );
}

export default AnimatedText;
