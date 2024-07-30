
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Button, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from 'flowbite-react'
import SignUpModal from "../ModalComponents/SignUpModal";
import SignInModal from "../ModalComponents/SignInModal";
import WriteModal from "../ModalComponents/WriteModal";

const Header = () => {
    const [activeModal, setActiveModal] = useState(null)

    const openModal = (modalType) => {
        setActiveModal(modalType)
    }
    const closeModal = () => {
        setActiveModal(null);
    }
    return (
        <Navbar className="border-b-2 bg-bg-h  ring-black " >
            <Navbar.Brand as={Link} to="/" className="">
                <img src="../src/images/medium_icon.png" className=" h-16 " alt="medium logo"></img>
                <span className="self-center whitespace-normal text-5xl  font-serif dark:text-white">Medium</span>
            </Navbar.Brand>
            <div className="flex md:order-2 ml-4 sm:flex-row">
                <Button className="text-white rounded-full" color="dark"
                    onClick={() => { openModal('signup') }}>Get started</Button>
                <Navbar.Toggle className="hidden md:block lg:hidden xl:hidden" />
            </div>
            <Navbar.Collapse className="ml-auto gap-4">
                <Navbar.Link as={Link} to="/story">Our story</Navbar.Link>
                <Navbar.Link as={Link} to="/member">Membership</Navbar.Link>
                <Navbar.Link onClick={() => { openModal('write') }} >Write</Navbar.Link>
                <Navbar.Link onClick={() => { openModal('signin') }}>Sign in</Navbar.Link>
            </Navbar.Collapse>
            {activeModal === 'signup' && <SignUpModal show={true} onClose={closeModal} />}
            {activeModal === 'signin' && <SignInModal show={true} onClose={closeModal} />}
            {activeModal === 'write' && <WriteModal show={true} onClose={closeModal} />}
        </Navbar>
    );
}


export default Header