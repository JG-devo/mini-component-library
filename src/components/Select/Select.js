import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import { ChevronDown, Divide } from 'react-feather';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectInput value={value} onChange={onChange}>
        {children}
      </SelectInput>
      <Chevron id={'chevron-down'} size={18} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const SelectInput = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  margin: 0;
  color: ${COLORS.gray700};
`;

const Chevron = styled(Icon)`
  position: absolute;
  margin: auto;
  top: 0px;
  bottom: 0px;
  right: 12px;
  color: ${COLORS.gray700};
  pointer-events: none;
`;

export default Select;
