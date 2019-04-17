import React from 'react';

const PrimaryButton = props => (
  <div style={{
    padding: '0.5rem',
  }}>
    <button
      style={{
        padding: '0.5rem',
        width: '600px',
      }}
    >
      {props.title.toUpperCase()}
    </button>
  </div>
);

export default PrimaryButton;
