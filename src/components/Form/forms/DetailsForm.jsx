import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import {
  FormButton,
  FormInput,
  FormSubtitle,
  FormTitle,
  FormWrapper,
} from '../../../styles/UI/form';
import {
  BUTTON_BACK,
  BUTTON_NEXT,
  BUTTON_SEND,
  PHONE_LABEL,
  PLACEHOLDER_NAME,
  PLACEHOLDER_NEXT,
  PLACEHOLDER_PHONE,
  STAGE_2_ANONYMOUS,
  STAGE_1_FORM_SUBTITLE,
  PLACEHOLDER_FIRST_NAME,
} from '../../../constants';
import { addLineBreaks } from '../../../utils/string';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import { Form } from 'antd';
import ActionButtons from '../components/ActionButtons';

const DetailsForm = ({ title, details, setDetails, onSubmit, onCancel }) => {
  const { qty, isAnonymous, phone, name } = details;

  const handleSetDetails = (detail) => setDetails(detail);

  return (
    <>
      <FormTitle>{addLineBreaks(title)}</FormTitle>
      <Form.Item label="">
        <Input
          type="text"
          name="phone"
          placeholder={PLACEHOLDER_PHONE}
          size="large"
          // defaultValue={currentForm.phone}
          // {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item label="">
        <Input
          type="text"
          name="name"
          defaultValue={name}
          placeholder={PLACEHOLDER_NAME}
          onChange={handleSetDetails}
        />
      </Form.Item>
      <Form.Item label="">
        <Checkbox
          label={STAGE_2_ANONYMOUS}
          name="isAnonymous"
          defaultChecked={isAnonymous}
          onChange={setDetails}
        />
      </Form.Item>

      <ActionButtons onSubmit={onSubmit} submitTitle={BUTTON_SEND} onCancel={onCancel} />
    </>
  );
};

DetailsForm.propTypes = {
  isLoading: bool,
  signInAction: func,
  t: func,
};

export default DetailsForm;
