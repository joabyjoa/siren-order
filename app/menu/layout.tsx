'use client'

import styled from 'styled-components'

const Wrap = styled.div`
  padding: 1rem;
`

const Title = styled.h2`
  margin: 1rem 0;
`

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrap>
      <Title>Menu</Title>
      {children}
    </Wrap>
  )
}
