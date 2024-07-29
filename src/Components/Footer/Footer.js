import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import './Footer.css';

function Footer() {
    return (
        <Flex
          as="footer"
          justify="center"
          align="center"
        
          color="white"
          p={3}
          zIndex={13}
          position="relative" 
          width="100%"
          minHeight="50px" 
        >
            <Box textAlign="center">
                <Text className='footer_line'>© 2024 Mi Sitio Web. Todos los derechos reservados.</Text>
            </Box>
        </Flex>
    );
}

export default Footer;
