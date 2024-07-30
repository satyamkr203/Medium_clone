import React from "react";
import { useState } from "react";
import { Banner, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import HeaderModal from "../ModalComponents/HeaderModal";

const Hero = () => {

    const [activeModal, setActiveModal] = useState(null)

    const openModal = (modalType) => {
        setActiveModal(modalType)
    }
    const closeModal = () => {
        setActiveModal(null);
    }

    return (
        <Banner className="flex mx-auto w-full  min-h-screen justify-between bg-bg-h ring-1 ring-black">
            <div className="w-full  ">
                <h1 className="text-6xl lg:text-9xl ml-20 mt-20 bottom-8 font-serif">Human</h1>
                <h1 className="text-6xl lg:text-9xl ml-20 font-serif ">stories & ideas</h1>
                <br />
                <p className="text-2xl ml-20 mt-4 font-serif ">A place to read, write and deepen your understanding.</p>
                <Button onClick={() => {openModal('reading')}} className="ml-20 mt-8 rounded-full  w-48 bg-green-500 sm:bg-black " color="dark">Start reading
                </Button>
            </div>
            <div className="md:order-2 w-2/4 hidden lg:block">
                <img src='../src/images/hero.webp'></img>
            </div>
            {activeModal === 'reading' && <HeaderModal show={true} onClose={closeModal}/>}
        </Banner>
    );
}

export default Hero;