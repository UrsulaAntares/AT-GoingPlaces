import React from 'react'

class LodgingOption extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{this.props.lodging ? this.props.lodging.name : null}</p>
                        <p className="subtitle is-6">Cost: {this.props.lodging ? this.props.lodging.cost : null}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default LodgingOption