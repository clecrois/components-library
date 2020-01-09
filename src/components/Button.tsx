import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 24px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  background-color: palegoldenrod;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background: palevioletred;
    color: palegoldenrod;
    border-color: palegoldenrod;
  }
`;

const Button: React.FC<{ label: string }> = ({ label }) => <StyledButton>{label}</StyledButton>;

export default Button;
