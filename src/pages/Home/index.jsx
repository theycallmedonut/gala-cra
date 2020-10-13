import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';

// Constants
import { STAGE_1_TITLE, STAGE_2_TITLE } from '../../constants';
import { PAYMENT } from '../../config/routePaths';

// Actions
import { sendQtyApi } from '../../api';

// Components
import QtyForm from '../../components/Form/forms/QtyForm';
import DetailsForm from '../../components/Form/forms/DetailsForm';
import { FormWrapper } from '../../styles/UI/form';
import Payment from './components/Payment';
import useValidation from '../../components/Form/utils/useValidation';
import { mustBeFilled, mustBeNumber } from '../../components/Form/utils/validationRules';
import Result from '../../components/Form/components/Result';
import Cards from '../../components/Cards';

const initialForm = {
  1: {
    qty: { value: '', rules: [mustBeFilled, mustBeNumber] },
  },
  2: {
    phone: { value: '', rules: [mustBeFilled] },
    name: { value: '', rules: [] },
  },
};

const Home = ({ isMobile, history }) => {
  const [stage, setStage] = useState(1);
  const [details, setDetails] = useState({
    qty: '',
    phone: '',
    email: '',
    name: '',
    isAnonymous: true,
  });

  const handleSetDetails = (detail) => setDetails({ ...details, ...detail });

  // const goToPayment = () => history.push(PAYMENT);
  const goToStart = () => setStage(1);
  const goToNextStage = () => setStage(stage + 1);
  const goToPrevStage = () => setStage(stage - 1);
  const sendQty = () => sendQtyApi().then(goToNextStage);

  const onStageSubmit = () => {
    const actions = {
      1: goToNextStage,
      2: sendQty,
      3: goToNextStage,
      4: goToStart,
    };

    actions[stage]();
  };

  const validation = useValidation(onStageSubmit, initialForm[stage]);
  const { currentForm, onClearForm, bindedSubmit } = validation;

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
              setDetails={handleSetDetails}
              goToNextStage={goToNextStage}
              onSubmit={bindedSubmit}
              {...validation}
            />
          )}

          {stage === 2 && (
            <DetailsForm
              title={STAGE_2_TITLE}
              details={details}
              setDetails={handleSetDetails}
              onCancel={goToPrevStage}
              onSubmit={bindedSubmit}
            />
          )}

          {stage === 3 && <Payment onSubmit={bindedSubmit} onCancel={goToPrevStage} />}

          {stage === 4 && (
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
