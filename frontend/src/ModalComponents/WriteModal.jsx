import React, { useState } from "react";
import { Button, Modal, ButtonGroup } from "flowbite-react";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import SignUp from '../pages/SignUp';
import SignInModal from "./SignInModal";

const SignUpModal = ({ show, onClose }) => {
    const [activeModal, setActiveModal] = useState('SignUpModal');

    const handleSignUpMailClick = () => {
        setActiveModal('SignUp');
    };

    const handleSignInModalMailClick = () => {
        setActiveModal('SignInModal');
    };

    const handleCloseSignUpMail = () => {
        setActiveModal('SignUpModal');
        onClose();
    };
    const handleClose = () => {
        setActiveModal('SignUpModal');
        onClose();
    };
    return (
        <>
        {activeModal === 'SignUpModal' && (
            <Modal show={show} onClose={onClose} className=" w-auto  h-screen">
            <Modal.Header className="border-none " />
            <Modal.Body className="flex flex-col items-center">
                <div className="mb-4">
                    <h1 className=" text-2xl  font-thin font-serif text-center">Create an account to start writing.</h1>
                </div>
                <Button.Group className="flex flex-col gap-4 mt-16">
                    <Button color="white" className="pr-14 ring-1 ring-black rounded-full">
                        <FcGoogle className="h-5 w-5 mr-14" />Sign up with Google
                    </Button>
                    <Button color="white" className="pr-8 ring-1  ring-black rounded-full">
                        <img src="../src/images/facebook.png" className="h-5 w-5 mr-14" />Sign up with Facebook
                    </Button>
                    <Button onClick={handleSignUpMailClick} color="white" className="pr-16 ring-1 ring-black rounded-full">
                        <CiMail className="h-5 w-5 mr-16" />Sign up with mail
                    </Button>
                </Button.Group>
                <div className="mt-16 text-center ">
                    <span className="flex flex-row gap-1 text-md  justify-center">
                        <p>Already have an account?</p>
                        <h5 onClick={handleSignInModalMailClick} className="text-red-800 font-semibold ">Sign in</h5>
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
                <SignUp show={true} onClose={handleClose} />
            )}
            {activeModal === 'SignInModal' && (
                <SignInModal show={true} onClose={handleClose} />
            )}
        </>
    );
};

export default SignUpModal;
