import React from "react";

import Directory from '../../components/directory/directory.component';

import {HomePageContainer} from './homepage.styles'; 

//Functional Component
const HomePage = ({ history }) => (
  <HomePageContainer>
    <Directory history={history} />
  </HomePageContainer>
);

export default HomePage;
