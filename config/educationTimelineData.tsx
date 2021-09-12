import { nanoid } from 'nanoid'

const educationTimelineData = [
  {
    title:
      'Postgraduate - MSc Machine Learning for Visual Data Analytics - Merit',
    company: 'Queen Mary University of London',
    timeframe: '2019 - 2020',
    description: (
      <div>
        <ul>
          <li>
            Merit grade in a Masters degree with a focus on computer vision
          </li>
          <li>
            Completed MSc project on the &quot;Detection of Intracranial
            Hemorrhages using CNNs&quot;
          </li>
          <li>
            Significant modules include
            <ul>
              <li>Deep Learning and Computer Vision</li>
              <li>Machine Learning</li>
              <li>Image Processing</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Undergraduate - BSc Computer Science - First Class',
    company: 'Queen Mary University of London',
    timeframe: '2016 - 2019',
    description: (
      <ul>
        <li>First class degree with honours</li>
        <li>
          Project was on &quot;The modernization of politics through mobile
          applications&quot;
        </li>
        <li>
          Significant modules include
          <ul>
            <li>Advanced data structures in an object oriented framework</li>
            <li>Software Engineering</li>
            <li>Big Data Processing</li>
            <li>Embedded Systems</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: 'A Levels',
    company: 'Luton Sixth Form College',
    timeframe: '2014 - 2016',
    description: <p>Statistical Maths, Biology, Computing</p>,
  },
]

export default educationTimelineData.map((el) => ({ id: nanoid(), ...el }))
