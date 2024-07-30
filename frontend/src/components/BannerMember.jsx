
import React from "react"
import { useState } from "react";
import { Link } from 'react-router-dom'
import { Alert, Banner } from "flowbite-react";
import MemberModal from '../ModalComponents/MemberModal'


const BannerMember = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalType) => {
        setActiveModal(modalType);
    }
    const closeModal = () => {
        setActiveModal(null);
    }
    return (
        <Banner className="flex flex-col md:flex-row text-center justify-center h-auto  items-center gap-1 bg-gradient-to-r from-col1 to-col2  ">
            <p className="font-normal text-md font-serif1 m-0 ">Be part of a better internet.  </p>
            <p onClick={() => {openModal('member')}}  className="underline underline-offset-1 font-extralight m-0 p-1"> Get 20% off membership for a limited time</p>

            {
            activeModal === 'member' && (
                <MemberModal show={true} onClose={closeModal}/>
            )
        }
        </Banner>
        
    );
}


export default BannerMember;