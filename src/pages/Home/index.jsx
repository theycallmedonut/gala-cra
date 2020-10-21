import React, { memo, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';
import { connect } from 'react-redux';

// Constants
import { STAGE_1_TITLE } from '../../constants';

// Actions
import { sendContactFormApi, sendPaymentFormApi, sendQtyFormApi } from '../../api';

// Components
import { FormWrapper } from '../../styles/UI/form';
import QtyForm from '../../components/Form/forms/QtyForm';
import Payment from './components/Payment';
import useValidation from '../../components/Form/utils/useValidation';
import { mustBeFilled, mustBeNumber } from '../../components/Form/utils/validationRules';
import Result from '../../components/Form/components/Result';
import Cards from '../../components/Cards';
import { setIsDetailsStageAction } from '../../redux/actions/basic';

const initialForm = {
  1: {
    qty: { value: '', rules: [mustBeFilled, mustBeNumber] },
    phone: { value: '', rules: [mustBeFilled] },
    name: { value: '', rules: [] },
    isAnonymous: { value: true, rules: [] },
  },
  2: {
    firstName: { value: '', rules: [mustBeFilled] },
    lastName: { value: '', rules: [] },
    cardNumber: { value: '', rules: [] },
    cardMonth: { value: '', rules: [] },
    cardYear: { value: '', rules: [] },
    card: { value: '', rules: [] },
    email: { value: '', rules: [] },
    address: { value: '', rules: [] },
    isResident: { value: true, rules: [] },
    nationalId: { value: '', rules: [] },
    check1: { value: true, rules: [] },
    check2: { value: true, rules: [] },
    check3: { value: true, rules: [] },
  },
  4: {
    phone: { value: '', rules: [mustBeFilled] },
    email: { value: '', rules: [] },
  },
};

const Home = ({ qty, isMobile, isDetailsStage, setIsDetailsStage }) => {
  const [stage, setStage] = useState(1);
  const [currentForm, setCurrentForm] = useState({});

  // Actions:
  const goToStage = (number) => setStage(number);
  const goToStart = () => setStage(1);
  const goToNextStage = () => setStage(stage + 1);
  const goToPrevStage = () => setStage(stage - 1);
  const sendQty = () => sendQtyFormApi(currentForm).then(goToNextStage);
  const sendPayment = () => sendPaymentFormApi(currentForm).then(goToNextStage);
  const sendContactForm = () => sendContactFormApi(currentForm).then(goToPrevStage);
  const stagesActions = {
    1: sendQty,
    2: sendPayment,
    3: goToStart,
    4: sendContactForm,
  };

  const validation = useValidation(stagesActions[stage], initialForm[stage]);
  const { onClearForm, bindedSubmit } = validation;

  const restartDonation = () => {
    onClearForm();
    setIsDetailsStage(false);
  };

  useEffect(() => {
    setCurrentForm(validation.currentForm);
  }, [validation.currentForm]);

  return (
    <>
      <FormWrapper
        direction="column"
        qty={qty}
        className={`form-qty form-qty--${
          isMobile ? 'mobile' : 'desktop'
        } form-qty--${qty} form-stage--${stage} ${isDetailsStage && 'form-details'}`}
      >
        <Form>
          {stage === 1 && (
            <QtyForm
              title={STAGE_1_TITLE}
              goToNextStage={goToNextStage}
              goToPrevStage={goToPrevStage}
              {...validation}
            />
          )}

          {(stage === 2 || stage === 4) && (
            <Payment
              onSubmit={bindedSubmit}
              stage={stage}
              goToPrevStage={goToPrevStage}
              goToNextStage={goToNextStage}
              goToStage={goToStage}
              {...validation}
            />
          )}

          {stage === 3 && (
            <Result
              title="from Ultraslan community"
              date="2 September 2020"
              beforeSubmit={restartDonation}
              onSubmit={bindedSubmit}
            />
          )}
        </Form>
      </FormWrapper>

      {/* label: CARDS */}
      <Cards />
    </>
  );
};

const mapStateToProps = ({ basic }) => ({
  qty: basic.qty,
  isMobile: basic.isMobile,
  isDetailsStage: basic.isDetailsStage,
});

const mapDispatchToProps = {
  setIsDetailsStage: setIsDetailsStageAction,
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(withRouter(Home)));
