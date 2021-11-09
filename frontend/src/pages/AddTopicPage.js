import React from "react";
import diaryAPI from "../api/diaryAPI";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function AddTopicPage() {
  const [redirect, setRedirect] = React.useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const topicObject = {
      name: event.target.elements[0].value,
    };

    try {
      await diaryAPI.addTopic(topicObject);
      setRedirect(true);
    } catch (err) {
      console.error("error occurred posting topic: ", err);
    }
  };

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <div style={{ padding: "20px" }}>
      <h3>Add a Topic</h3>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
