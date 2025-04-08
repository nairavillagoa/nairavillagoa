'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure, Input,
  Textarea,
} from '@nextui-org/react';
import IMAGES from '@/public';
import "@/styles/landing.css";
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const Landing = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    console.log('Form Data:', formData);

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: "serviceContact",
        formValues: formData,
      }),
    });

    if (response.ok) {
      Swal.fire({

        title: "Form submitted successfully!",

        text: "Team connect with you soon",

        icon: "success"

      }).then((result) => {


      });
    } else {

    }

    onClose();
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[60vh] min-h-screen flex justify-center items-center">
      {/* Background Image */}
      <img
        src={IMAGES["28"]}
        alt="landing-bg"
        className="w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Section */}
      <div className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] py-10 lg:p-0 flex flex-col justify-center items-center absolute z-10">
      <div className="relative w-full lg:w-[80%] flex justify-center items-center h-[55%] flex-col">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-3 justify-center items-center">

          {/* Welcome - scale in */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full flex justify-center items-center mb-6"
          >
            <h1 className="text-white text-lg font-bold" style={{ letterSpacing: '0.3em' }}>
              WELCOME TO
            </h1>
          </motion.div>

          {/* Title - zoom in and fade */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
            className="w-full flex justify-center items-center"
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl" style={{ fontFamily: '"Playfair Display", serif' }}>
              Naira Villa
            </h1>
          </motion.div>

          {/* Description - fade up with slight bounce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 }}
            className="flex justify-center items-center w-full"
          >
            <p className="w-full text-center text-md md:text-lg lg:text-4xl text-white font-medium" style={{ fontFamily: '"Playfair Display", serif' }}>
              Resort & Villa Hotel
            </p>
          </motion.div>
        </div>
      </div>

      {/* Button - hover scale & fade in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
        className="w-full flex justify-center items-center mt-6 lg:mt-10"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button
            radius="full"
            className="bg-white text-black font-bold px-8 rounded-none text-xs sm:text-sm md:text-base"
            style={{ letterSpacing: '0.1em' }}
            onClick={handleOpen}
          >
            BOOK NOW
          </Button>
        </motion.div>
      </motion.div>

      {/* Modal */}
       <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Contact Form</ModalHeader>
                        <ModalBody>
                          <Input
                            type="text"
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isRequired
                          />
                          <Input
                            type="email"
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isRequired
                          />
                          <Input
                            type="tel"
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            isRequired
                          />
                          <Textarea
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            minRows={3}
                            isRequired
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onClick={onClose}>
                            Close
                          </Button>
                          <Button color="default" onClick={() => handleSubmit()}>
                            Submit
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>

    </div>
    </div>
  );
};

export default Landing;
