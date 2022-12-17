'use client'

import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { LogoIcon } from '~/assets/icons'
import Navigation from './Navigation'

const Wrap = styled.header`
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  height: 72px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
  svg {
    height: 40px;
  }
`

export default function Header() {
  const [showsNavigation, setShowNavigation] = useState(true)
  const closeNavigation = () => setShowNavigation(false)

  return (
    <>
      <Wrap>
        <Link href="/" onClick={closeNavigation}>
          <LogoIcon />
        </Link>
        <button onClick={() => setShowNavigation(!showsNavigation)}>{showsNavigation ? '닫기' : '열기'}</button>
      </Wrap>
      <Navigation shows={showsNavigation} onLinkClick={closeNavigation} />
    </>
  )
}
