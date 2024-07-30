
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, TextInput } from "flowbite-react";
import { CiMail } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { response } from "express";



const SignIn = ({ show, onClose }) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({})
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            setErrorMessage(null);
            setLoading(true);
            const reponse  = await fetch('http://localhost:3000/api/user/auth/signin', {
                method:"POST", 
                body:JSON.stringify(formData),
                headers:{
                    'Content-Type':"application/json"
                }
            })
            const data = await reponse.json();
            console.log(data);
            if(!reponse.ok){
                setErrorMessage('failed to sign in')
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            return setErrorMessage(error.message)
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
                                <Label className=" font-sans text-gray-800 " htmlFor="email" value="Your email" />
                            </div>
                            <TextInput onChange={handleChange}  icon={CiMail} className="bg-col1" id="email" type="email" placeholder="example@gmail.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className=" font-sans text-gray-800 " htmlFor="password" value="Your password" />
                            </div>
                            <TextInput  onChange={handleChange}  icon={IoIosLock} id="password" type="password" name="password" autoComplete="off" placeholder="*******" required />
                        </div>
                        <Button color="dark" className="rounded-full w-auto mt-6" type="submit">Submit</Button>
                    </form>
                </div>
                <div className="flex flex-col text-center items-center justify-center mt-4 ">
                    <span className="text-sm text-gray-500 ">This site is protected by reCAPTCHA Enterprise and the</span>
                    <span className="text-sm text-gray-500 underline underline-offset-2">GooglePrivacyPolicy and Terms of Service apply.</span>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export default SignIn;