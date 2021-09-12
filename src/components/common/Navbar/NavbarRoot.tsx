import { FC, useState, useEffect } from 'react'
import { throttle } from 'lodash'
import cn from 'classnames'
import s from './Navbar.module.css'

const NavbarRoot: FC = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  return <div className={s.root}>{children}</div>
}

export default NavbarRoot
