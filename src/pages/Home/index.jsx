import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';

// Constants
import { STAGE_1_TITLE, STAGE_2_TITLE } from '../../constants';
import { PAYMENT } from '../../config/routePaths';

// Actions
import { sendContactFormApi, sendPaymentFormApi, sendQtyFormApi } from '../../api';

// Components
import QtyForm from '../../components/Form/forms/QtyForm';
import { FormWrapper } from '../../styles/UI/form';
import Payment from './components/Payment';
import useValidation from '../../components/Form/utils/useValidation';
import { mustBeFilled, mustBeNumber } from '../../components/Form/utils/validationRules';
import Result from '../../components/Form/components/Result';
import Cards from '../../components/Cards';

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

const Home = ({ isMobile, history }) => {
  const [stage, setStage] = useState(1);
  const [currentForm, setCurrentForm] = useState({});

  // Actions:
  const goToStage = (number) => setStage(number);
  const goToStart = () => setStage(1);
  const goToNextStage = () => setStage(stage + 1);
  const goToPrevStage = () => setStage(stage - 1);
  const sendQty = () => sendQtyFormApi(currentForm).then(goToNextStage);
  const sendPayment = () => sendPaymentFormApi(currentForm).then(goToNextStage);
  const sendContactForm = () => sendContactFormApi(currentForm).then(goToNextStage);
  const stagesActions = {
    1: sendQty,
    2: sendPayment,
    3: goToStart,
    4: sendContactForm,
  };
  const validation = useValidation(stagesActions[stage], initialForm[stage]);
  const { onClearForm, bindedSubmit } = validation;

  useEffect(() => {
    setCurrentForm(validation.currentForm);
  }, [validation.currentForm]);

  console.log(
    '%c::Form',
    'background: #F2BE22; color: #333; border-radius: 5px; padding: 2px 5px;',
    currentForm,
  );

  return (
    <>
      <FormWrapper direction="column">
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
              beforeSubmit={onClearForm}
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

export default withRouter(Home);
