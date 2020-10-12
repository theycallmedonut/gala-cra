import React, { useRef } from 'react';
import { Form } from 'antd';
import { FormButtonsItemWrapper } from '../styles';

const FormButtonsItem = ({ qty, current, text, bindedInputFunctions }) => {
  const radioRef = useRef();

  const handleClick = () => radioRef.current.click();

  return (
    <Form.Item style={{ margin: 0 }}>
      <FormButtonsItemWrapper isActive={current === qty} onClick={handleClick}>
        <input
          ref={radioRef}
          type="radio"
          name="qty"
          value={qty}
          style={{ display: 'none' }}
          {...bindedInputFunctions}
        />
        {qty !== 'more' && <b>{qty}</b>}
        {text}
      </FormButtonsItemWrapper>
    </Form.Item>
  );
};

export default FormButtonsItem;
