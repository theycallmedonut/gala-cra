import React from 'react';
import { FormTitle } from '../../../styles/UI/form';
import { CARD_INFO, PLACEHOLDER_PHONE, PLACEHOLDER_EMAIL, PHONE_LABEL } from '../../../constants';
import Input from '../components/Input';
import { Form, Row, Col } from 'antd';
import useValidation from '../utils/useValidation';
import ActionButtons from '../components/ActionButtons';
import { sendContactApi } from '../../../api';

const ContactForm = ({ errors, currentForm, bindedInputFunctions, bindedSubmit, onCancel }) => {
  return (
    <>
      <FormTitle>{PHONE_LABEL}</FormTitle>

      <Form.Item {...errors.phone} label="">
        <Input
          name="phone"
          size="large"
          placeholder={PLACEHOLDER_PHONE}
          defaultValue={currentForm.phone}
          style={{ margin: '12px 0 0' }}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.email} label="">
        <Input
          name="email"
          size="large"
          placeholder={PLACEHOLDER_EMAIL}
          defaultValue={currentForm.email}
          style={{ marginBottom: 0 }}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <ActionButtons onCancel={onCancel} onSubmit={bindedSubmit} style={{ margin: 0 }} />
    </>
  );
};

export default ContactForm;
