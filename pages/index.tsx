import { Skills } from '@components/common/Skills'
import Timeline from '@components/common/Timeline'
import Header from '@components/sections/Header'
import educationTimelineData from '@config/educationTimelineData'
import workTimelineData from '@config/workTimelineData'
import type { NextPage } from 'next'
import skills from '@config/skills.json'
import language from '@config/language.json'
import { Footer } from '@components/common'
import Contacts from '@components/sections/Contacts'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Timeline data={workTimelineData} title="Work experience" id="work" />
      <div className="my-48" />
      <Timeline data={educationTimelineData} title="Education" id="education" />
      <div className="my-28" />
      <Skills data={skills} title="Skills" />
      <div className="my-20" />
      <Skills data={language} title="Language" />
      <div className="my-28" />
      <Contacts />
      <div className="my-20" />
      <Footer />
    </>
  )
}

export default Home
