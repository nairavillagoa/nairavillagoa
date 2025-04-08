"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure, Input,
  Textarea, Divider
} from "@nextui-org/react";
import { siteConfig } from "@/config/siteconfig";
import { Link } from "@nextui-org/link";

import { usePathname } from "next/navigation";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { today, getLocalTimeZone } from "@internationalized/date";
import Swal from 'sweetalert2';

export default function Footer() {
  const pathname = usePathname();

  let defaultDate = today(getLocalTimeZone());
  const nextDay = defaultDate.add({ days: 1 });

  const formatDateee = (date) => {
    const day = String(date.day).padStart(2, "0");
    const month = String(date.month).padStart(2, "0");
    const year = String(date.year);
    return `${day}-${month}-${year}`;
  };

  const [checkindate, setCheckindate] = useState(formatDateee(defaultDate));
  const [checkoutdate, setCheckoutdate] = useState(formatDateee(nextDay));

  const itemClasses = {
    base: "w-full",
    title: "text-base xl:text-2xl text-black/60",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-primary-100 rounded-lg h-14 2xl:h-20 flex items-center",
    indicator: "text-small xl:text-large text-black/60",
    content: "text-small xl:text-medium px-2",
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const currentDate = getCurrentDate();
  const hotelName = "Ocean's Pearl Resort";

  const addOneDay = (dateString) => {
    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    return formatDate(date);
  };

  // Function to format the date as "DD-MM-YYYY"
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const checkoutDate = addOneDay(currentDate);



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
    <footer className="w-full h-fit relative bg-white text-black mb-10 lg:mt-16">
      <div className="w-[95%] mx-auto">
        <div className="mx-auto lg:flex w-full items-center justify-between py-2">
          <div className="md:flex items-center md:justify-between gap-4">
            <p className="text-3xl lg:text-4xl text-[#333333] font-semibold antialiased"
              style={{
                fontFamily: "Times New Roman, Georgia, serif",
                fontWeight: "bold",
              }}
            >
              {siteConfig.name}
            </p>
          </div>
          <div className="flex mt-6 lg:mt-0 justify-between items-center gap-4 text-white">
            <h4 className="text-gray-600">Let&apos;s Retreat Together!</h4>

            <button className="border border-black-900 bg-[#F5F5DC] px-8 py-2  lg:py-2 rounded-full text-[#333333] flex-1 font-medium hover:bg-red-900 hover:text-white" onClick={() => handleOpen()}>
              Book Now
            </button>


          </div>
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
        <Divider className="w-full" />


        <div className="flex justify-center items-center text-center pt-4 gap-2">
          <div className="p-2">
            <p className="text-black/50  text-start">
              {siteConfig.description}
            </p>
          </div>
        </div>
        <Divider className="w-full mt-4" />

        <div className="py-5 grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-15 place-content-center">
          <div className=" flex flex-col gap-5 p-5 lg:py-5">
            <h2 className="text-xl font-medium text-[#333333]">
              Contact Information:
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <h4 className="text-gray-500">Villa</h4>
                <span className="text-gray-500">-</span>
                <p className="text-gray-500">
                  108, Tranquil Building, H.No, 3/166, Near Bank of India, Saligao, Saligao, Goa 403521
                </p>
              </div>

              <div className="flex gap-3">
                <h4 className="text-gray-500">Phone</h4>
                <span className="text-gray-500">-</span>
                <div className="flex flex-col">
                  <Link href="tel:9898309244" className="text-gray-500">
                    +91 - 77209 44672,
                  </Link>
                  <Link href="tel:7285899244" className="text-gray-500">
                    +91 - 77209 44672
                  </Link>
                  {/* <Link href="tel:9136434899" className="text-gray-500">
                    +91 - 9136434899
                  </Link> */}
                </div>
              </div>

              <div className="flex gap-3">
                <h4 className="text-gray-500">Email</h4>
                <span className="text-gray-500">-</span>
                <Link
                  href="mailto:hotelrajdhani22@gmail.com"
                  className="text-gray-500"
                >
                  nairavillagoa@gmail.com
                </Link>
              </div>

              <div className="flex gap-3">
                <h4 className="text-gray-500">Website</h4>
                <span className="text-gray-500">-</span>
                <Link
                  href="www.nairavilla.com"
                  className="text-gray-500"
                >
                  www.nairavilla.com
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-5 p-5">
            <h2 className="text-xl font-medium text-[#333333]">Quick Links:</h2>
            {siteConfig.navItems.map((item) => (
              <div key={item.label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = item.href;
                  }}
                  className="text-gray-500 hover:underline"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div> */}

          <div className=" flex flex-col gap-5 p-5">
            <h2 className="text-xl font-medium text-[#333333]">Socials:</h2>
            <div className="flex  items-center gap-5">
              {siteConfig.socialItems.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-800 hover:text-blue-500 transition-colors bg-[#F5F5DC] p-2 rounded-full "
                >
                  <Icon className="w-6 h-6 text-[#333333]" />
                </Link>
              ))}
            </div>
          </div>


          <div className="flex flex-col gap-5 p-5 lg:col-span-3">
            <h2 className="text-xl font-medium text-[#333333]">
              Location:
            </h2>
            <div className="w-full h-auto aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.9574135998216!2d73.78815209919739!3d15.547259999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1d5fecab593%3A0xc794d25a0a519e81!2sBank%20of%20India%20-%20Saligao%20Branch!5e0!3m2!1sen!2sin!4v1744020923750!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>


        </div>
        <Divider className="w-full mt-4" />
        <div className="flex py-5">
          <span className="text-gray-500">
            2025@Naira Villa. All rights reserved.{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}