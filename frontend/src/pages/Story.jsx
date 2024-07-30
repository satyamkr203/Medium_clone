
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navbar, NavbarBrand, Button, Card, Footer, FooterBrand } from 'flowbite-react';
import { BsArrowRight } from "react-icons/bs";
import SignUp from './SignUp';
import SignUpModal from '../ModalComponents/SignUpModal';
import WriteModal from '../ModalComponents/WriteModal';
import SignInModal from '../ModalComponents/SignInModal';

const Story = () => {
  const[activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) =>{
    setActiveModal(modalType);
  }
  const closeModal = (modalType) =>{
    setActiveModal(null);
  }

  return (
    <>
      <Navbar className='flex justify-end border-b-2 text-white border-white bg-bg-2 '>
        <Navbar.Brand className='flex justify-center items-center font-serif mt-2'>
          <img src="../src/images/icons8-medium-50.png" ></img>
          <span className='self-center whitespace-nowrap text-3xl font-semibold dark:text-white'>Medium</span>
        </Navbar.Brand>
        <div className='flex gap-8 '>
          <Button  onClick={() => {openModal('SignInModal')}}   className='bg-bg-2 ring-1 h-10  ring-white rounded-full'>Sign in</Button>
          <Button onClick={() => {openModal('SignUpModal')}} className='bg-white h-10  text-black ring-1 ring-white rounded-full'>Sign up</Button>
        </div>
      </Navbar>
      <div className='flex flex-row  w-full justify-between bg-bg-2'>
        <div className=' mt-8 w-full md:w-1/2 ' >
          <Card className='border-none shadow-none text-white bg-bg-2 font-serif'>
            <h1 className='p-8 text-8xl'>Everyone has story to tell.</h1>

            <p className='text-xl mt-4 text-col-3 opacity-90'>Medium is a home for human stories and ideas.
              Here, anyone can share insightful perspectives,
              useful knowledge, and life wisdom with the world—without
              building a mailing list or a following first. The internet
              is noisy and chaotic; Medium is quiet yet full of insight.
              It’s simple, beautiful, collaborative, and helps you find the
              right audience for whatever you have to say.</p>

            <p className='text-xl text-col-3 opacity-90 mt-2'>
              We believe that what you read and write matters.
              Words can divide or empower us, inspire or discourage
              us. In a world where the most sensational and surface-level
              stories often win, we’re building a system that rewards depth,
              nuance, and time well spent. A space for thoughtful conversation
              more than drive-by takes, and substance over packaging.
            </p>

            <h2 className='text-3xl mt-2 text-white font-serif1' >
              Ultimately, our goal is to deepen our collective
              understanding of the world through the power of writing.
            </h2>
            <p className='mt-2 text-xl  text-col-3 opacity-90 '>
              Over 100 million people connect and share their wisdom on Medium every month.
              Many are professional writers, but just as many aren’t — they’re CEOs, computer
              scientists, U.S. presidents, amateur novelists, and anyone burning with a story
              they need to get out into the world. They write about what they’re working on,
              what’s keeping them up at night, what they’ve lived through, and what they’ve
              learned that the rest of us might want to know too.
            </p>

            <p className='mt-2 text-xl  text-col-3 opacity-90 '>
              Instead of selling ads or selling your data,
              we’re supported by a growing community of Medium
              members who align with our mission. If you’re new here, start
              exploring. Dive deeper into whatever matters to you. Find a post
              that helps you learn something new, or reconsider something
              familiar—and then share your own story.
            </p>
          </Card>
        </div>
        <div className='hidden lg:block md:w-1/2 bg-bg-2'>

        </div>
      </div>
      <div className='flex flex-col text-lefts'>
        <div  onClick={() => {openModal('SignUpModal')}} className='w-full bg-bg-2 hover:bg-white h-auto text-left text-white p-16 hover:text-black text-6xl ring-1 ring-white'>Start reading
          <BsArrowRight />
        </div>
        <div onClick={() =>{ openModal('write')}} className='w-full bg-bg-2 hover:bg-white h-auto text-left text-white p-16 hover:text-black ring-1 text-6xl ring-white'>Start writing
          <BsArrowRight />
        </div>
        <div className='w-full bg-bg-2 hover:bg-white h-auto text-left text-white p-16 hover:text-black  ring-1 text-6xl ring-white'>Become a member
          <BsArrowRight />
        </div>
      </div>
      <Footer container>
        <div className="w-full gap-0">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <div className='flex items-center justify-center gap-0 '>
              <img
                src="../src/images/medium_icon.png"
                alt="Flowbite Logo"
                name="Flowbite"
              />
              <span className='text-3xl whitespace-nowrap font-serif self-center '>Medium</span>
            </div>
            <Footer.LinkGroup className='sm:text-center'>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </Footer>
      { activeModal === 'SignUpModal' && <SignUpModal show={true} onClose={closeModal}></SignUpModal>}
      { activeModal === 'write' && <WriteModal show={true} onClose={closeModal}/>}
      { activeModal === 'SignInModal' && <SignInModal show={true} onClose={closeModal}/>}
    </>
  );
};

export default Story;
