import React from 'react';
import PropTypes from 'prop-types';

const JSection = props => (
  <section className="section2">
    <div className="container2 is-fluid">
      <h1 className="title2">{props.title}</h1>
      <h2 className="subtitle2">{props.subtitle}</h2>
    </div>
  </section>
);

JSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default JSection;
