import socialLinks from '@config/socialLinks'
import React from 'react'
import s from './SocialLinks.module.css'

function SocialLinks() {
  return (
    <ul className={s.socialWrapper}>
      {socialLinks.map((socialLink) => (
        <li key={socialLink.href}>
          <a target="_blank" rel="noreferrer noopener" href={socialLink.href}>
            <span className="sr-only">{socialLink.href}</span>
            <socialLink.Icon className={s.socialIcon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
