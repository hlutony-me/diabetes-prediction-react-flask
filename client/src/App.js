import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Alert, Button, Container, Nav, Navbar } from "react-bootstrap"
import "./App.css"
import DiabetePredict from "./components/DiabetePredict"

function App() {
	const [show, setShow] = useState(true)
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Home</Navbar.Brand>
				</Container>
			</Navbar>
			<Alert show={show} variant="info">
				<Alert.Heading>Disclaimer</Alert.Heading>
				<p>
					Please be advised that all of the information on this website is
					provided for informational purposes only. It is not a substitute for
					professional medical advice, diagnosis or treatment. If you have or
					suspect you have a health problem, consult your family physician. If
					you have or suspect you are experiencing a health emergency, please
					visit a hospital Emergency Department in your area.
				</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button
						onClick={() => setShow(false)}
						variant="info"
					>
						Close
					</Button>
				</div>
			</Alert>

			<DiabetePredict />
		</div>
	)
}

export default App
