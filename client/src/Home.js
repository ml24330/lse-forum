import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const uni_list = ["University of Birmingham", "Durham University", "University of Exeter", "Imperial College London", "King’s College London", "Lancaster University", "London School of Economics", "University College London", "University of Warwick", "York University"];

export default function Home() {
  const [motion, setMotion] = useState("");
  const [aff, setAff] = useState("");
  const [neg, setNeg] = useState("");
  const [isFinal, setIsFinal] = useState(false);

  const sanityCheck = () => ((!motion || !aff || !neg) ? false : true)

  return (
    <div className="App">
      <div className="title">
        LSESU HKPASS LSE Forum 2021 Timekeeper's Portal
      </div>
      <Form className="panel">
        <Form.Group controlId="motion" className="row">
          <Form.Label>Motion:</Form.Label><Form.Control type="text" placeholder="Affirmative motion title..." value={motion} onChange={e => setMotion(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="aff" className="row">
          <Form.Label>Affirmative:</Form.Label>
          <Form.Control as="select" value={aff} onChange={e => setAff(e.target.value)}>
          <option value="">Choose affirmative...</option>
            {uni_list.map(name => (
              <option value={name} key={name}>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="neg" className="row">
          <Form.Label>Opposition:</Form.Label>
          <Form.Control as="select" value={neg} onChange={e => setNeg(e.target.value)}>
            <option value="">Choose opposition...</option>
            {uni_list.map(name => (
              <option value={name} key={name}>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="row">
          <Form.Label>Final event?</Form.Label> <Form.Control type="checkbox" id="final" checked={isFinal} onChange={e => setIsFinal(e.target.checked)}></Form.Control>
        </Form.Group>
        <Form.Group className="row">
          <Button variant={sanityCheck() ? "warning" : "danger"} type="submit" style={{fontWeight: "bold", marginTop: "10px"}}>
            {sanityCheck() ? (<Link to={`/timer?motion=${motion}&aff=${aff}&neg=${neg}&isFinal=${isFinal}`}>Submit</Link>) : "Form incomplete!"}</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
