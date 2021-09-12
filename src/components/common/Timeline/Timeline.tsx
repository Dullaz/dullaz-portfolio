import { Container } from '@components/ui'
import React, { FC } from 'react'
import s from './Timeline.module.css'
import cn from 'classnames'

interface TimelineProps {
  data: any[]
  title: string
  id?: string
}

const Timeline: FC<TimelineProps> = ({ data, title, id }) => {
  return (
    <Container id={id} className="-mt-28 relative">
      <h2 className={s.title}>{title}</h2>

      <div className="flow-root">
        <div className="h-28">
          <span
            className={cn(s.line, s['dotted-line'], 'z-50 h-28')}
            aria-hidden="true"
          />
        </div>
        <ul role="list" className="mt-4">
          {data.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="pb-8">
                {eventIdx !== data.length - 1 ? (
                  <div
                    className={cn(s.line, 'bg-primary h-full !z-[-1]')}
                    aria-hidden="true"
                  />
                ) : null}

                <div className={s.dot} />

                <div className="relative flex">
                  <div className={s['data-wrapper']}>
                    <div>
                      <p className={s['data-title']}>{event.title}</p>
                      <h3 className={s['data-company']}>{event.company}</h3>
                      <time className={s['data-timeframe']}>
                        {event.timeframe}
                      </time>
                      <div className={s['work-description']}>
                        {event.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <span className={s['bottom-dot']}></span>
      </div>
    </Container>
  )
}

export default Timeline
