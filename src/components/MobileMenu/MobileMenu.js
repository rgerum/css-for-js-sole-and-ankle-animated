/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {keyframes} from "styled-components";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay data-open={isOpen} isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink style={{"--delay": "0"}} href="/sale">Sale</NavLink>
          <NavLink style={{"--delay": "1"}} href="/new">New&nbsp;Releases</NavLink>
          <NavLink style={{"--delay": "2"}} href="/men">Men</NavLink>
          <NavLink style={{"--delay": "3"}} href="/women">Women</NavLink>
          <NavLink style={{"--delay": "4"}} href="/kids">Kids</NavLink>
          <NavLink style={{"--delay": "5"}} href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn2 = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  30% {
    transform: translateX(0px);
  }
  to {
    opacity: 1;
  }
`;

const SlideIn = keyframes`
  from {
    transform: rotateY(-90deg);//translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  animation: ${FadeIn} 500ms ease-in-out forwards;
  perspective: 1000px;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-origin: 100% 100%;
  
  @media (prefers-reduced-motion: no-preference) {
      //animation: ${SlideIn} 500ms 300ms cubic-bezier(.31,.01,.68,1.23) both;
    animation: ${SlideIn} 500ms 300ms linear both;
  }

`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  animation: ${FadeIn2} 500ms calc(400ms + var(--delay) * 100ms) linear both;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;

  animation: ${FadeIn} 500ms 500ms ease-in-out both;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
