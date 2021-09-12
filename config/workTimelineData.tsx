import { nanoid } from 'nanoid'

const workTimelineData = [
  {
    title: 'Software Engineer',
    company: 'CloudPay',
    timeframe: '2021/04 - present',
    description: (
      <div>
        In addition to previous responsibilities...
        <ul className="">
          <li>
            Developed a Python based platform to quickly view trends in support
            incidences
          </li>
          <li>
            Responsible for adding new features into the Spring Boot Java
            application
          </li>
          <li>
            Carried out bugfixes and extended Java unit tests using JUnit and
            Mockito
          </li>
          <li>Carried out investigations into support incidences</li>
          <li>Helped train newly onboarded engineers</li>
          <li>Created and revised technical documentation on Confluence</li>
          <li>Created and deployed microservices into AWS Lambda</li>
          <li>Carried out code analysis to improve code base using PMD</li>
          <li>
            Created SQL scripts to quickly identify data-related issues within
            database
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Graduate Software Engineer',
    company: 'CloudPay',
    timeframe: '2020/11 - 2021/04',
    description: (
      <ul className="">
        <li>
          Responsible for investigating and resolving live support incidences
          and ensuring payroll flow meets deadlines
        </li>
        <li>Responsible for fixing incidences via SQL scripts when possible</li>
        <li>
          Introduced the use of statistical analysis to understand support
          incident trends
        </li>
        <li>Responsible for helping manage high priority incident response</li>
      </ul>
    ),
  },
  {
    title: 'Part time IT Engineer',
    company: 'ITSurveillance, Luton, UK',
    timeframe: '2015 - 2020',
    description: (
      <p>
        United Kingdom
        <ul className="">
          <li>Initially level one tech support</li>
          <li>
            Assisted on research and development for redeployable camera systems
          </li>
          <li>
            Contracted out to help complete projects for various other companies
          </li>
        </ul>
      </p>
    ),
  },
  {
    title: 'Teaching Assistant',
    company: 'Queen Mary University of London, London, UK',
    timeframe: '2017 - 2020',
    description: (
      <p>
        London, England, United Kingdom Initially carried out basic teaching
        assistant duties including helping and guiding students. This later
        transformed into senior teaching assistant duties for specific modules
        such as Big Data Processing and Security Engineering
      </p>
    ),
  },
]

export default workTimelineData.map((el) => ({ id: nanoid(), ...el }))
