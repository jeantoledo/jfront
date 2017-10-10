import React from 'react';
import PropTypes from 'prop-types';

const JSection = props => (
  <section className="section">
    <div className="container is-fluid">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  </section>
);

JSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default JSection;
