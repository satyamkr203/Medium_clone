import React from "react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";


const FooterComponent = () => {
    return (
        <Footer className=" relative bg-black ring-1 rounded-none ring-black h-auto bottom-0 md:bg-bg-h md:text-white">
            <Footer.LinkGroup className="flex p-6 text-center mx-auto gap-1 text-sm bottom-0 " >
                <Footer.Link as={Link} to="/">Help</Footer.Link>
                <Footer.Link as={Link} to="/" >Status</Footer.Link>
                <Footer.Link as={Link} to="/" >About</Footer.Link>
                <Footer.Link as={Link} to="/" >Carrer</Footer.Link>
                <Footer.Link as={Link} to="/" >Press</Footer.Link>
                <Footer.Link as={Link} to="/" >Blog</Footer.Link>
                <Footer.Link as={Link} to="/" >Privacy</Footer.Link>
                <Footer.Link as={Link} to="/" >Terms</Footer.Link>
                <Footer.Link as={Link} to="/" >Text to speech</Footer.Link>
                <Footer.Link as={Link} to="/" >Teams</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}


export default FooterComponent;