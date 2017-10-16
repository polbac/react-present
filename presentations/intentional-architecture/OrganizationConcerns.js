import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  return (
    <Slide>
      <Title>Organizational issues</Title>
      <Statement>Licensing and hosting costs</Statement>
      <Statement>Training and hiring requirements</Statement>
      <Statement>Implementation and maintenance effort</Statement>
    </Slide>);
}
