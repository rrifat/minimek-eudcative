import React from "react";
import {
  Segment,
  Grid,
  Header,
  Table,
  Form,
  Dropdown,
} from "semantic-ui-react";

const RANKS = [
  { value: "Private", text: "Private" },
  { value: "Corporal", text: "Corporal" },
  { value: "Sergeant", text: "Sergeant" },
  { value: "Lieutenant", text: "Lieutenant" },
  { value: "Captain", text: "Captain" },
  { value: "Major", text: "Major" },
  { value: "Colonel", text: "Colonel" },
];
const MECHS = [{ value: "WHM-6R", text: "Warhammer WHM-6R" }];

const Mechs = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Mech List</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Model</Table.HeaderCell>
                <Table.HeaderCell>Weight(tons)</Table.HeaderCell>
                <Table.HeaderCell>Class</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Warhammer</Table.Cell>
                <Table.Cell>WHM-6R</Table.Cell>
                <Table.Cell>70</Table.Cell>
                <Table.Cell>Heavy</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Mech Details</Header>
          <Segment>
            <Form size="large">
              <Form.Field name="id">
                <label>ID</label>
                <input value="1" />
              </Form.Field>
              <Form.Field name="name">
                <label>Name</label>
                <input value="Warhammer" />
              </Form.Field>
              <Form.Field name="model">
                <label>Model</label>
                <input value="WHM-6R" />
              </Form.Field>
              <Grid columns={2}>
                <Grid.Column>
                  <Form.Field name="weight">
                    <label>Weight</label>
                    <input value="70" />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field name="class">
                    <label>Class</label>
                    <input value="Heavy" />
                  </Form.Field>
                </Grid.Column>
              </Grid>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Mechs;
