import React from "react";

import {
  MDBCard,
  MDBAvatar,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer
} from "mdbreact";

const ContactPage = () => {
  return (
    <MDBContainer>
      <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">About Me</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Self-motivated computer science student looking to leverage my
            strengths and increase my skills and in programming, applications,
            and customer support.
          </p>
          <MDBAvatar
            tag="img"
            src="https://roman-mondello-web-dev-media.imgix.net/profilePhoto.jpg?w=512&exp=1"
            className="rounded z-depth-1-half img-fluid"
            alt="Sample avatar"
          />
          <h4 className="font-weight-bold dark-grey-text my-4">
            Roman Mondello
          </h4>
          <h6 className="text-uppercase grey-text mb-3">
            Full Stack Developer
          </h6>

          <MDBBtn
            a
            href={"mailto:" + "rmnlaiacona@gmail.com"}
            tag="a"
            floating
            size="sm"
            className="mx-1 mb-0 btn-email"
          >
            <MDBIcon icon="envelope" />
          </MDBBtn>

          <MDBBtn
            href="https://www.linkedin.com/in/roman-mondello-08621b168/"
            target="_blank"
            tag="a"
            floating
            size="sm"
            className="mx-1 mb-0 btn-fb"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            href="https://github.com/integrate-your-mind"
            target="_blank"
            tag="a"
            floating
            size="sm"
            className="mx-1 mb-0 btn-git"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default ContactPage;
