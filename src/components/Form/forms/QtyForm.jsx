import React, { useState } from 'react';
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
  STAGE_2_TITLE,
} from '../../../constants';
import FormButtons from '../components/FormButtons';
import { addLineBreaks } from '../../../utils/string';
import Input from '../components/Input';
import ActionButtons from '../components/ActionButtons';
import ContactForm from './ContactForm';
import { Form } from 'antd';
import DetailsForm from './DetailsForm';

const QtyFrom = (props) => {
  const { currentForm, errors, bindedInputFunctions, goToNextStage, goToPrevStage, title } = props;
  const { qty } = currentForm;
  const isCustomQty = qty === 'more';

  const [isShowDetails, setShowDetails] = useState(false);

  const showDetails = () => setShowDetails(true);
  const hideDetails = () => setShowDetails(false);

  return isShowDetails ? (
    <DetailsForm title={STAGE_2_TITLE} onCancel={hideDetails} {...props} />
  ) : (
    <>
      <FormTitle>{addLineBreaks(title)}</FormTitle>
      <FormSubtitle>{addLineBreaks(STAGE_1_FORM_SUBTITLE)}</FormSubtitle>
      <FormButtons current={qty} bindedInputFunctions={bindedInputFunctions} />

      {!isCustomQty ? (
        <>
          <Form.Item {...errors.qty} label="">
            <Input
              name="qty"
              placeholder={PLACEHOLDER_NEXT}
              value={currentForm.qty}
              {...bindedInputFunctions}
            />
          </Form.Item>
          <ActionButtons onSubmit={showDetails} submitTitle={BUTTON_NEXT} style={{ margin: 0 }} />
        </>
      ) : (
        <ContactForm afterSubmitAction={goToNextStage} />
      )}
    </>
  );
};

QtyFrom.propTypes = {};

export default QtyFrom;
