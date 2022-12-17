'use client'

import styled from 'styled-components'
import { LogoIcon } from '~/assets/icons'

const Wrap = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  height: 72px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
  svg {
    height: 40px;
  }
`

export function Header() {
  return (
    <Wrap>
      <LogoIcon />
      <h1>Siren Order</h1>
    </Wrap>
  )
}
