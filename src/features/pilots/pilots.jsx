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

const Pilots = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Pilot List</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Rank</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Skill</Table.HeaderCell>
                <Table.HeaderCell>Mech</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Natasha Kerensky</Table.Cell>
                <Table.Cell>Colonel</Table.Cell>
                <Table.Cell>34</Table.Cell>
                <Table.Cell>2/3</Table.Cell>
                <Table.Cell>WHM-6R</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Pilot Details</Header>
          <Segment>
            <Form size="large">
              <Form.Field name="name">
                <label>Name</label>
                <input value="Natasha Kerensky" />
              </Form.Field>
              <Form.Field name="rank">
                <label>Rank</label>
                <Dropdown selection fluid options={RANKS} value="Colonel" />
              </Form.Field>
              <Form.Field name="age" width={6}>
                <label>Age</label>
                <input placeholder="Age" value="34" />
              </Form.Field>
              <Form.Field name="gunnery" width={6}>
                <label>Gunnery</label>
                <input value="2" />
              </Form.Field>
              <Form.Field name="piloting" width={6}>
                <label>Piloting</label>
                <input value="3" />
              </Form.Field>
              <Form.Field name="mech" width={16}>
                <label>Mech</label>
                <Dropdown fluid selection options={MECHS} value="WHM-6R" />
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Pilots;
