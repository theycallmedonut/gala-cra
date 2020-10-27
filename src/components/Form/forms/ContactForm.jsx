import React from 'react';
import { Form } from 'antd';
import { withTranslation } from 'react-i18next';

import { FormTitle } from '../../../styles/UI/form';
import Input from '../components/Input';
import ActionButtons from '../components/ActionButtons';

const ContactForm = ({ errors, currentForm, bindedInputFunctions, bindedSubmit, onCancel, t }) => {
  return (
    <>
      <FormTitle>{t('PHONE_LABEL')}</FormTitle>

      <Form.Item {...errors.phone} label="">
        <Input
          name="phone"
          size="large"
          placeholder={t('PLACEHOLDER_PHONE')}
          defaultValue={currentForm.phone}
          style={{ margin: '12px 0 0' }}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.email} label="">
        <Input
          name="email"
          size="large"
          placeholder={t('PLACEHOLDER_EMAIL')}
          defaultValue={currentForm.email}
          style={{ marginBottom: 0 }}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <ActionButtons onCancel={onCancel} onSubmit={bindedSubmit} style={{ margin: 0 }} />
    </>
  );
};

export default withTranslation()(ContactForm);
