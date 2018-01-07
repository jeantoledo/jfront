import React from 'react';
import PropTypes from 'prop-types';

const JSection = props => (
  <section className="section">
    <div className="container is-fluid">
      <div className="columns">
        { props.logo ?
          <div className="column is-narrow">
            <img src={props.logo} alt="" />
          </div>
        : null }
        <div className="column">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.subtitle}</h2>
        </div>
      </div>
    </div>
  </section>
);

JSection.defaultProps = {
  logo: '',
};


JSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

export default JSection;
