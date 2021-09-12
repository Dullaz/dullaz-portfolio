import React from 'react'
import s from './Header.module.css'
import cn from 'classnames'
import { Container } from '@components/ui'
import { Navbar } from '../../common'
import aboutMe from '@config/about-me.json'

function Header() {
  return (
    <header className={cn(s.wrapper)}>
      <Container>
        <div className="md:flex justify-between">
          <div className="order-2">
            <Navbar />
          </div>
          <h1 className={cn(s.title, 'order-1')}>
            Abdullah
            <br />
            Hasan
          </h1>
        </div>
        <div className={s['about-me-wrapper']}>
          <h2>About me</h2>
          <p className={s['about-me-text']}>{aboutMe.content}</p>
          <a download href="/AH_CV.pdf" className={s['download-button']}>
            Download my CV
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header
