import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, ModalBody, Label, TextInput, Button, Spinner, Alert } from "flowbite-react";
import { CiMail } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";



const SignUp = ({ show, onClose }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setErrorMessage(null);
            const responce = await fetch('http://localhost:3000/api/user/auth/signup', {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            const data = await responce.json();
            setLoading(false);
            if (responce.ok) {
                navigate('/home')
            }
            else if (responce.success === false) {
                setLoading(false);
                setLoading('something getting wrong here')
            }
            console.log(data);
        } catch (error) {
            setErrorMessage(error.errorMessage)
            setLoading(false);
        }

    }
    return (
        <Modal show={show} onClose={onClose} >
            <Modal.Header className="border-none h-10"></Modal.Header>
            <Modal.Body>
                <div className="flex flex-col text-center items-center justify-center">
                    <span className="text-3xl  font-thin font-serif"> Sign up with email</span>
                    <span className="mt-9 font-normal text-gray-800">Enter your email address to create an </span>
                    <span className="text-gray-800 ">account.</span>
                </div>
                <div className="flex flex-col items-center justify-center mt-10  ">
                    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-80 ">
                        <div>
                            <div className="mb-2 block">
                                <Label className=" font-sans text-gray-800 " htmlFor="username" value="Your username" />
                            </div>
                            <TextInput onChange={handleChange} icon={IoPersonCircleOutline} className="bg-col1" id="username" type="string" placeholder="username" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className=" font-sans text-gray-800 " htmlFor="email" value="Your email" />
                            </div>
                            <TextInput onChange={handleChange} icon={CiMail} className="bg-col1" id="email" type="email" placeholder="example@gmail.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className=" font-sans text-gray-800 " htmlFor="password" value="Your password" />
                            </div>
                            <TextInput onChange={handleChange} icon={IoIosLock} id="password" type="password" name="password" autoComplete="off" placeholder="*******" required />
                        </div>
                        <Button disabled={loading} color="dark" className="rounded-full w-auto mt-6" type="submit">
                            <>
                                {loading ? (
                                    <Spinner size="sm" >
                                        <span className="pl-3">Loading...</span>
                                    </Spinner>
                                ) : 'Sign up'}
                            </>
                        </Button>
                        { errorMessage && (
                            <Alert className="mt-2" color="failure">
                                {errorMessage}
                            </Alert>
                        )}
                    </form>
                </div>
                <div className="flex flex-col text-center items-center justify-center mt-8 ">
                    <span className="text-sm text-gray-500 ">This site is protected by reCAPTCHA Enterprise and the</span>
                    <span className="text-sm text-gray-500 underline underline-offset-2">GooglePrivacyPolicy and Terms of Service apply.</span>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export default SignUp