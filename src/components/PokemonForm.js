import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onHandleFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });

  function handleFormData(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={(event) => onHandleFormSubmit(event, formData)}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleFormData}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleFormData}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormData}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
