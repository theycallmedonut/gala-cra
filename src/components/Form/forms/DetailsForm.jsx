import React from 'react';
import { bool, func } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Form } from 'antd';

import { FormTitle } from '../../../styles/UI/form';
import {
  BUTTON_SEND,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PHONE,
  STAGE_2_ANONYMOUS,
} from '../../../constants';
import { addLineBreaks } from '../../../utils/string';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import ActionButtons from '../components/ActionButtons';

const DetailsForm = ({
  bindedInputFunctions,
  bindedSubmit,
  currentForm,
  onCancel,
  errors,
  title,
  t,
}) => {
  return (
    <>
      <FormTitle>{addLineBreaks(title)}</FormTitle>
      <Form.Item {...errors.phone} label="">
        <Input
          type="text"
          name="phone"
          placeholder={t('PLACEHOLDER_PHONE')}
          defaultValue={currentForm.phone}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.name} label="">
        <Input
          type="text"
          name="name"
          placeholder={t('PLACEHOLDER_NAME')}
          defaultValue={currentForm.name}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.isAnonymous} label="">
        <Checkbox
          label={t('STAGE_2_ANONYMOUS')}
          name="isAnonymous"
          defaultChecked={currentForm.isAnonymous}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <ActionButtons onSubmit={bindedSubmit} submitTitle={t('BUTTON_SEND')} onCancel={onCancel} />
    </>
  );
};

DetailsForm.propTypes = {
  isLoading: bool,
  signInAction: func,
  t: func,
};

export default withTranslation()(DetailsForm);
