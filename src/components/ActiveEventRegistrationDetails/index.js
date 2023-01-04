import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderYetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="active-event-image"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </>
  )

  renderRegistered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="active-event-image"
        alt="registered"
      />
      <h1 className="active-text-bold">
        You have already registered for the event
      </h1>
    </>
  )

  renderRegistrationsClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="active-event-image"
        alt="registrations closed"
      />
      <h1 className="active-text-bold">Registrations are closed now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </>
  )

  renderInitial = () => (
    <>
      <p className="active-text-bold">
        Click on an event, to view its registration details
      </p>
    </>
  )

  render() {
    const {activeEvent} = this.props
    switch (activeEvent) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()

      case 'REGISTERED':
        return this.renderRegistered()

      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationsClosed()

      default:
        return this.renderInitial()
    }
  }
}

export default ActiveEventRegistrationDetails
