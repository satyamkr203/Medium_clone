
import React, { act } from "react";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup} from "flowbite-react";
import { CiMail } from "react-icons/ci";
import SignUpModal from "./SignUpModal";
import { FcGoogle } from "react-icons/fc";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const SignInModal = ({ show, onClose }) => {
    const [activeModal, setActiveModal] = useState('SignInModal');

    const handleSignUpModalMailClick = () => {
        setActiveModal('SignUpModal');
    };
    const handleSignUpMailClick = () =>{
        setActiveModal('SignUp')
    }
    const handleSignInMailClick = () =>{
        setActiveModal('SignIn');
    }
    const handleCloseSignUpMail = () => {
        setActiveModal('SignInModal');
        onClose();
    };
    return (
        <>
            {activeModal === 'SignInModal' && (
                <Modal show={show} onClose={onClose} className=" w-auto  h-screen">
                <Modal.Header className="border-none " />
                <Modal.Body className="flex flex-col items-center">
                    <div className="mb-4">
                        <h1 className="text-3xl  font-thin font-serif text-center">Welcome back.</h1>
                    </div>
                    <Button.Group className="flex flex-col gap-4 mt-16">
                        <Button color="white" className="pr-14 ring-1 ring-black rounded-full">
                            <FcGoogle className="h-5 w-5 mr-14" />Sign up with Google
                        </Button>
                        <Button color="white" className="pr-8 ring-1  ring-black rounded-full">
                            <img src="../src/images/facebook.png" className="h-5 w-5 mr-14" />Sign up with Facebook
                        </Button>
                        <Button onClick={handleSignInMailClick} color="white" className="pr-16 ring-1 ring-black rounded-full">
                            <CiMail className="h-5 w-5 mr-16" />Sign up with mail
                        </Button>
                    </Button.Group>
                    <div className="mt-16 text-center ">
                        <span className="flex flex-row gap-1 text-md  justify-center">
                            <p>No account?</p>
                            <h5 onClick={handleSignUpModalMailClick} className="text-red-800 font-semibold cursor-pointer">Create one</h5>
                        </span>
                    </div>
                    <div className="p-4 max-w-md mx-auto bg-white font-normal text-sm text-opacity-70 mt-14">
                        <p className="text-center text-gray-600">
                            Click “Sign up” to agree to Medium’s
                            <span className="underline cursor-pointer"> Terms of Service</span>
                            and acknowledge that Medium’s
                            <span className="underline cursor-pointer">Privacy Policy</span>
                            applies to you.
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
            )}
            {activeModal === 'SignUp' && (
                <SignUp show={show} onClose={handleCloseSignUpMail}></SignUp>
            )}
            {activeModal === "SignUpModal" && (
                <SignUpModal show={show} onClose={handleCloseSignUpMail} />
            )};
            { activeModal ==="SignIn" && (
                <SignIn show={show} onClose={handleCloseSignUpMail}/>
            )}
        </>
    );
}


export default SignInModal