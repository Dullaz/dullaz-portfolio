import { Container } from '@components/ui'
import React, { FC } from 'react'
import { Line } from 'rc-progress'
import s from './Skills.module.css'

interface SkillsProps {
  data: any[]
  title: string
}

const Skills: FC<SkillsProps> = ({ data, title }) => {
  return (
    <Container id="skills">
      <h2 className={s.title}>{title}</h2>
      <div className="sm:grid grid-cols-2 gap-8 md:gap-12 space-y-8 sm:space-y-0">
        {data.map((skill) => (
          <div key={skill.title}>
            <div className="flex justify-between mb-1">
              <p className={s['skill-title']}>{skill.title}</p>
              <p className={s['skill-vote']}>{skill.vote}</p>
            </div>
            <Line strokeColor="#0070F3" percent={skill.vote * 10} />
            <p className={s['skill-description']}>{skill.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Skills
