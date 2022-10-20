import React from 'react'

interface Props {
  title: string
  percent: number
  backgroundColor?: string
}

interface State {
  completed: number
  loaded: boolean
}

export class Skill extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      completed: 0,
      loaded: false
    }
  }

  onChange = (isVisible: boolean) => {
    if (isVisible && !this.state.loaded) {
      this.setState({
        completed: this.props.percent,
        loaded: true
      })
    }
  }

  render() {
    const props = this.props

    const bgColor = props.backgroundColor ? props.backgroundColor : '#f1f1f1'

    return(
      <div className="skill-item mb-4">
          <div className="skill-info clearfix">
            <h4 className="float-start mb-3 mt-0">{props.title}</h4>
          </div>
        <div className="progress">
          <div className="progress-bar data-background" style={{ width: `${this.state.completed}%`, backgroundColor: `${bgColor}` }} />
        </div>
      </div>
    )
  }
}

export default Skill
