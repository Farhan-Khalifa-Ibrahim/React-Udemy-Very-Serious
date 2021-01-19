import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            errorMessage: ''
        }
    }

    componentDidMount() {
        console.log("My component was rendered to the screen");
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ latitude: position.coords.latitude }) },
            (err) => { this.setState({ errorMessage: err.message }) }
        )
    }

    componentDidUpdate() {
        console.log("My component was just updated");
    }

    renderContent = () => {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} />
        }

        return <Spinner message="Please accept location request" />
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"))