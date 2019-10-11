import React from "react";
import { withRouter } from "react-router-dom";

import {MenuItemContainer, 
BackgroundImageContainer, 
ContentContainer, 
TitleContainer, 
SubtitleContainer} from "./menu-item.styles";

//This is the exact same thing as writing props.value but instead
//the title value can be used whenever we want
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <ContentContainer className="content">
      <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer className="subtitle">SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
