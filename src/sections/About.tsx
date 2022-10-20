import React from 'react'
// import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { Skill, Section } from '../components'
import about from '../data/about.json'

// const Name = styled.div`
//   font-weight: 500;
//   font-size: 18px;
// `
export class About extends React.Component {
  render() {
    return (
      <Section id="about" title="About Me">
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <div className="text-center mb-3">
                  {/* <img src={about.avatar} alt="kiendang" style={{ width: '150px' }} /> https://www.npmjs.com/package/copy-webpack-plugin */}
                  <img src={about.avatar} alt="logo" style={{ width: '150px' }} />
                  <img src={about.fam} alt="group" style={{ width: '150px' }} />
                </div>
              </Col>
              <Col md={12}>
                {/* <Name className="text-center mb-3">
                  {about.username}
                </Name> */}
              </Col>
            </Row>
          </Col>
          <Col md={10} >
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col md={8}>
                  <div dangerouslySetInnerHTML={ { __html: about.objective } } style={{color: "#0c1a25"}} />
                </Col>
                <Col md={4}>
                  {about.skills.map(skill => (
                    <Skill key={skill.name} title={skill.name} percent={skill.confidence} backgroundColor={skill.color} />
                  ))}
                </Col>
              </Row>
              <Row>
                <Col md={12}> 
                  <div className="text-center" >
                    <a href="https://github.com/rileyvickers" className="btn btn-kd mt-1 mb-1" target="_blank" rel="noopener noreferrer">My Github</a> 
                    <a href="https://scholar.google.com/citations?user=pqm4PoMAAAAJ&hl=en&oi=ao" className="btn btn-kd ms-3 me-3 mt-1 mb-1" target="_blank" rel="noopener noreferrer">My Google Scholar</a> 
                    <a href="./docs/cv.pdf" className="btn btn-kd mt-1 mb-1" target="_blank" rel="noopener noreferrer">My CV</a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          {about.statistics.map(statistic => (
            <Counter
              key={statistic.title}
              className="col-md-3 col-sm-6"
              description={statistic.title}
              count={statistic.number}
              icon={[statistic.iconPrefix as IconPrefix, statistic.iconName as IconName]} />
          ))}
        </Row> */}
      </Section>
    )
  }
}

export default About
