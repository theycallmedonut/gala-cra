import React, { useCallback, useEffect } from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { FormSubtitle, FormTitle } from '../../../styles/UI/form';
import FormButtons from '../components/FormButtons';
import { addLineBreaks } from '../../../utils/string';
import Input from '../components/Input';
import ActionButtons from '../components/ActionButtons';
import ContactForm from './ContactForm';
import DetailsForm from './DetailsForm';
import { setIsDetailsStageAction, setQtyAction } from '../../../redux/actions/basic';

const QtyFrom = (props) => {
  const {
    bindedInputFunctions,
    setIsDetailsStage,
    goToNextStage,
    isDetailsStage,
    currentForm,
    errors,
    setQty,
    t,
  } = props;
  const { qty } = currentForm;
  const isCustomQty = qty === 'more';

  const showDetails = () => setIsDetailsStage(true);
  const hideDetails = () => setIsDetailsStage(false);
  const handleSetQty = useCallback(() => {
    setQty({ qty });
  }, [qty]);

  useEffect(handleSetQty, [qty]);

  return isDetailsStage ? (
    <DetailsForm title={t('STAGE_2_TITLE')} onCancel={hideDetails} {...props} />
  ) : (
    <>
      <FormTitle>{addLineBreaks(t('STAGE_1_TITLE'))}</FormTitle>
      <FormSubtitle>{addLineBreaks(t('STAGE_1_FORM_SUBTITLE'))}</FormSubtitle>
      <FormButtons current={qty} bindedInputFunctions={bindedInputFunctions} />

      {!isCustomQty ? (
        <>
          <Form.Item {...errors.qty} label="">
            <Input
              name="qty"
              placeholder={t('PLACEHOLDER_NEXT')}
              value={currentForm.qty}
              {...bindedInputFunctions}
            />
          </Form.Item>
          <ActionButtons
            onSubmit={showDetails}
            submitTitle={t('BUTTON_NEXT')}
            style={{ margin: 0 }}
          />
        </>
      ) : (
        <ContactForm afterSubmitAction={goToNextStage} {...props} />
      )}
    </>
  );
};

QtyFrom.propTypes = {};

const mapStateToProps = ({ basic }) => ({
  isDetailsStage: basic.isDetailsStage,
});

const mapDispatchToProps = {
  setQty: setQtyAction,
  setIsDetailsStage: setIsDetailsStageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(QtyFrom));
