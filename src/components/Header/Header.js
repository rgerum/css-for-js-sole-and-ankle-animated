import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = ({ children, ...delegated}) => {
  return <NavLinkComponent {...delegated}><NavDouble1>{children}</NavDouble1><NavDouble>{children}</NavDouble></NavLinkComponent>;
}

const NavLinkComponent = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  padding-top: 3px;
  height: calc(3px + 1.5rem + 3px);
  overflow: hidden;
  position: relative;
  
  &:first-of-type {
    color: var(--color-secondary);
  }
  
  &:after {
    content: '';
    display: block;
    width: 30%;
    height: 3px;
    background-color: var(--color-secondary);
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scale(0);
    transform-origin: 0% 50%;
    transition: transform 500ms ease-in-out;
  }
  &:hover:after {
    transform: scale(1);
    transition: transform 300ms 200ms ease-in-out;
  }

  &:before {
    content: '';
    display: block;
    width: 30%;
    height: 3px;
    background-color: var(--color-secondary);
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0);
    transform-origin: 100% 50%;
    transition: transform 500ms ease-in-out;
  }
  &:hover:before {
    transform: scale(1);
    transition: transform 300ms 200ms ease-in-out;
  }
`;

const NavDouble1 = styled.span`
  display: block;
  transition: transform 500ms 300ms ease-in-out;

  ${NavLinkComponent}:hover & {
    transform: translateY(-100%);
    transition: transform 300ms ease-in-out;
  }
`

const NavDouble = styled(NavDouble1)`
  font-weight: 700;
  pointer-events: none;
`

export default Header;
