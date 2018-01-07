import React from 'react';
import PropTypes from 'prop-types';

const JSection = props => (
  <section className="section">
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-narrow">
          <img src={props.logo} />
        </div>
        <div className="column">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.subtitle}</h2>
        </div>
      </div>
    </div>
  </section>
);

JSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  logo: PropTypes.string
};

export default JSection;
