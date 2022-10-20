import React from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

const particleStyle = {
  position: 'absolute',
  width: '100%',
  height: ' 100vh',
  top: 0
} as React.CSSProperties

export class ParticlesContainer extends React.Component {

  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadSlim(engine);
  }

  render() {
    return(
      <>
        <Particles
          style={particleStyle}
          init={this.customInit}
          id="tsparticles"
          options={{
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              },
              modes: {
                push: {
                  quantity: 3
                },
                grab: {
                  distance: 50,
                  line_linked: {
                    opacity: 0.1
                  }
                },
                "repulse": {
                  "distance": 100,
                  "duration": 0.8,
                  "factor": 3,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-back"
                },
              }
            },
            particles: {
              color: {
                value: '#ffffff'
              },
              links: {
                color: '#ffffff',
                distance: 50,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                drift: .01,
                direction: 'right',
                enable: true,
                outModes: {
                  default: 'out'
                },
                decay: .0001,
                random: false,
                speed: 2,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 200
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: ['circle','triangle','square']
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          }}
        />
      </>
    )
  }
}