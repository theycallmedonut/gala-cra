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

const DetailsForm = ({
  errors,
  currentForm,
  bindedSubmit,
  bindedInputFunctions,
  title,
  onCancel,
}) => {
  return (
    <>
      <FormTitle>{addLineBreaks(title)}</FormTitle>
      <Form.Item {...errors.phone} label="">
        <Input
          type="text"
          name="phone"
          placeholder={PLACEHOLDER_PHONE}
          defaultValue={currentForm.phone}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.name} label="">
        <Input
          type="text"
          name="name"
          placeholder={PLACEHOLDER_NAME}
          defaultValue={currentForm.name}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.isAnonymous} label="">
        <Checkbox
          label={STAGE_2_ANONYMOUS}
          name="isAnonymous"
          defaultChecked={currentForm.isAnonymous}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <ActionButtons onSubmit={bindedSubmit} submitTitle={BUTTON_SEND} onCancel={onCancel} />
    </>
  );
};

DetailsForm.propTypes = {
  isLoading: bool,
  signInAction: func,
  t: func,
};

export default DetailsForm;
