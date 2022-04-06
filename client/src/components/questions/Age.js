import React from "react"
import { Button, Card, Form } from "react-bootstrap"
function Age({ prevStep, nextStep, handleInputChange, info }) {
	return (
		<div>
			<Card>
				<Card.Header>Age</Card.Header>
				<Card.Body>
					<Card.Text>
						<Form>
							<Form.Group size="lg" controlId="userName">
								<Form.Label>Please indicate your age</Form.Label>
								<Form.Control
									type="number"
									step="any"
									name="Age"
									value={info.Age}
									onChange={(e) => handleInputChange(e)}
									required
								></Form.Control>
							</Form.Group>
						</Form>
					</Card.Text>

					<div class="d-flex justify-content-between">
						<Button variant="secondary" onClick={() => prevStep()}>
							Previous
						</Button>
						<Button variant="secondary" onClick={(e) => nextStep(e)}>
							Next
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Age
