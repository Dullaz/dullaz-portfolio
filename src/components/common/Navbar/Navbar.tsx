import { FC, PointerEvent, useRef } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import cn from 'classnames'
import NavbarRoot from './NavbarRoot'
import navbarLinks from '@config/navbarLinks'
import socialLinks from '@config/socialLinks'
import SocialLinks from '../SocialLinks/SocialLinks'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const underlineRef = useRef(null)

  const handlePointerEnter = (e: PointerEvent<HTMLLIElement>) => {
    if (underlineRef?.current) {
      //@ts-ignore
      const newPos = underlineRef.current.offsetLeft - e.target.offsetLeft
      //@ts-ignore
      underlineRef.current.style.transform = `translateX(-${newPos}px)`
    }
  }

  return (
    <NavbarRoot>
      <div className={cn(s.container, 'group')}>
        <ul className={s.nav}>
          {navbarLinks.map((navlink) => (
            <li
              onPointerEnter={handlePointerEnter}
              className={s.navlink}
              key={navlink.href}
            >
              <a href={navlink.href}>{navlink.label}</a>
            </li>
          ))}
        </ul>
        <div
          ref={underlineRef}
          className={cn(s.underline, 'group-hover:opacity-100')}
        />
        <SocialLinks />
      </div>
    </NavbarRoot>
  )
}

export default Navbar
