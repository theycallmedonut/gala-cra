import React from 'react';
import Button from '../components/Button';
import { FormSubtitle, FormTitle, FormWrapper } from '../../../styles/UI/form';
import {
  BUTTON_NEXT,
  BUTTON_SEND,
  PHONE_LABEL,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NEXT,
  PLACEHOLDER_PHONE,
  STAGE_1_FORM_SUBTITLE,
} from '../../../constants';
import FormButtons from '../components/FormButtons';
import { addLineBreaks } from '../../../utils/string';
import Input from '../components/Input';
import ActionButtons from '../components/ActionButtons';
import ContactForm from './ContactForm';
import { Form } from 'antd';

const QtyFrom = ({ currentForm, errors, bindedInputFunctions, goToNextStage, onSubmit, title }) => {
  const { qty } = currentForm;
  const isCustomQty = qty === 'more';

  return (
    <>
      <FormTitle>{addLineBreaks(title)}</FormTitle>
      <FormSubtitle>{addLineBreaks(STAGE_1_FORM_SUBTITLE)}</FormSubtitle>
      <FormButtons current={qty} bindedInputFunctions={bindedInputFunctions} />

      {!isCustomQty ? (
        <>
          <Form.Item {...errors.qty} label="">
            <Input name="qty" placeholder={PLACEHOLDER_NEXT} {...bindedInputFunctions} />
          </Form.Item>
          <ActionButtons onSubmit={onSubmit} submitTitle={BUTTON_NEXT} style={{ margin: 0 }} />
        </>
      ) : (
        <ContactForm afterSubmitAction={goToNextStage} />
      )}
    </>
  );
};

QtyFrom.propTypes = {};

export default QtyFrom;
