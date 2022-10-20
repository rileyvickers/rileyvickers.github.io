import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'
import history from '../data/history.json'

const career = history.fellowships

export class Experience extends React.Component {
  render() {

    return(
      <Section id="experience" title="Fellowships">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { career.map(c => (
                <Timeline key={c.company} time={c.period} title={c.title} icon={['fas', 'award']} left="-5px">
                  <p style={{color: "#0c1a25"}}>{c.company}</p>
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Experience
