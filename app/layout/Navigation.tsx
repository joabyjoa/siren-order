'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import styled from 'styled-components'

const Mask = styled(motion.div)`
  background: #000;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`

const Wrap = styled(motion.nav)`
  position: fixed;
  top: 72px;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 80vw;
  padding: 1rem;
  background-color: #fff;
`

type Props = {
  shows: boolean
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function Navigation({ shows, onLinkClick }: Props) {
  return (
    <>
      <Mask
        initial={{ opacity: 0, display: 'none' }}
        animate={{ opacity: shows ? 0.38 : 0, display: shows ? 'block' : 'none' }}
        transition={{ type: 'spring' }}
      />
      <Wrap animate={{ x: shows ? 0 : '100%' }} transition={{ ease: 'easeOut' }} initial={{ x: '100%' }}>
        <Link href="/menu" onClick={onLinkClick}>
          메뉴
        </Link>
      </Wrap>
    </>
  )
}
