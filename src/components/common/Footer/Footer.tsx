import { FC } from 'react'
import cn from 'classnames'
import s from './Footer.module.css'
import { Container } from '@components/ui'
import socialLinks from '@config/socialLinks'
import SocialLinks from '../SocialLinks/SocialLinks'

interface Props {
  className?: string
}

const Footer: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className)

  return (
    <footer className="bg-primary pb-8 pt-24">
      <Container>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
        <p className="mt-8 text-center text-base text-white">
          &copy; 2021 Abdullah Hasan
        </p>
      </Container>
    </footer>
  )
}

export default Footer
