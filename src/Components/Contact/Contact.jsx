import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast
} from '@chakra-ui/react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form Data:', formData);
    toast({
      title: "Mensaje enviado.",
      description: "Hemos recibido tu mensaje, te responderemos pronto.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
 
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Box maxW="500px" mx="auto" p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input id="name" name="name" onChange={handleChange} value={formData.name} />
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <Textarea id="message" name="message" onChange={handleChange} value={formData.message} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Enviar</Button>
      </form>
    </Box>
  );
}

export default Contact;
