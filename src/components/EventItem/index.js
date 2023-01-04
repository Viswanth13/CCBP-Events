import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  eventClicked = () => {
    const {eventDetails, updateStateEventClicked} = this.props
    const {registrationStatus} = eventDetails
    console.log('Event Clicked!')
    console.log(registrationStatus)
    updateStateEventClicked(registrationStatus)
  }

  render() {
    const {eventDetails} = this.props
    const {imageUrl, name, location} = eventDetails

    return (
      <li>
        <button type="button">
          <img
            src={imageUrl}
            alt="event"
            className="event-image"
            onClick={this.eventClicked}
          />
          <p>{name}</p>
          <p>{location}</p>
        </button>
      </li>
    )
  }
}

export default EventItem
