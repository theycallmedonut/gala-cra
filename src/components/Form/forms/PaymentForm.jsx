import React from 'react';
import { FormTitle } from '../../../styles/UI/form';
import Button from '../components/Button';
import {
  PLACEHOLDER_CARD_CODE,
  PLACEHOLDER_ADDRESS,
  CARD_INFO,
  PLACEHOLDER_CARD_MONTH,
  PLACEHOLDER_CARD_NUMBER,
  PLACEHOLDER_CARD_YEAR,
  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_LAST_NAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NATIONAL_ID,
  LABEL_RESIDENT,
  LABEL_CHECK_1_LINK,
  LABEL_CHECK_1_TEXT,
  LABEL_CHECK_2_LINK,
  LABEL_CHECK_2_TEXT,
  LABEL_CHECK_3_TEXT,
  BUTTON_COMPLETE_DONATION,
} from '../../../constants';
import Input from '../components/Input';
import Switch from '../components/Switch';
import Checkbox from '../components/Checkbox';
import { Form, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import ActionButtons from '../components/ActionButtons';

const Check1Label = () => (
  <>
    <Link to={'/1.pdf'}>{LABEL_CHECK_1_LINK}</Link> &nbsp;
    {LABEL_CHECK_1_TEXT}
  </>
);
const Check2Label = () => (
  <>
    <Link to={'/2.pdf'}>{LABEL_CHECK_2_LINK}</Link> &nbsp;
    {LABEL_CHECK_2_TEXT}
  </>
);

const PaymentForm = ({
  errors,
  currentForm,
  bindedSubmit,
  bindedInputFunctions,
  goToPrevStage,
}) => {
  return (
    <>
      <FormTitle style={{ textAlign: 'left', margin: '0 0 10px' }}>{CARD_INFO}</FormTitle>

      {/* label: PERSON */}

      <Form.Item {...errors.firstName} label="">
        <Input
          name="firstName"
          size="large"
          placeholder={PLACEHOLDER_FIRST_NAME}
          defaultValue={currentForm.firstName}
          {...bindedInputFunctions}
        />
      </Form.Item>
      <Form.Item {...errors.lastName} label="">
        <Input
          name="lastName"
          size="large"
          placeholder={PLACEHOLDER_LAST_NAME}
          defaultValue={currentForm.lastName}
          {...bindedInputFunctions}
        />
      </Form.Item>

      {/* label: CARD */}

      <Form.Item {...errors.cardNumber} label="">
        <Input
          name="cardNumber"
          size="large"
          placeholder={PLACEHOLDER_CARD_NUMBER}
          defaultValue={currentForm.cardNumber}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <Row gutter="12" style={{ flexWrap: 'nowrap' }}>
        <Col>
          <Form.Item {...errors.cardMonth} label="">
            <Input
              name="cardMonth"
              size="large"
              placeholder={PLACEHOLDER_CARD_MONTH}
              defaultValue={currentForm.cardMonth}
              {...bindedInputFunctions}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item {...errors.cardYear} label="">
            <Input
              name="cardYear"
              size="large"
              placeholder={PLACEHOLDER_CARD_YEAR}
              defaultValue={currentForm.cardYear}
              {...bindedInputFunctions}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item {...errors.card} label="">
            <Input
              name="card"
              size="large"
              placeholder={PLACEHOLDER_CARD_CODE}
              defaultValue={currentForm.card}
              {...bindedInputFunctions}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* label: CONTACT */}

      <Form.Item {...errors.email} label="">
        <Input
          name="email"
          size="large"
          placeholder={PLACEHOLDER_EMAIL}
          defaultValue={currentForm.email}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <Form.Item {...errors.address} label="">
        <Input
          name="address"
          size="large"
          placeholder={PLACEHOLDER_ADDRESS}
          defaultValue={currentForm.address}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <Form.Item {...errors.isResident} label="" style={{ marginTop: '10px' }}>
        <Switch
          name="isResident"
          size="large"
          label={LABEL_RESIDENT}
          checked={currentForm.isResident}
          {...bindedInputFunctions}
        />
      </Form.Item>

      {currentForm.isResident && (
        <Form.Item {...errors.nationalId} label="">
          <Input
            name="nationalId"
            size="large"
            placeholder={PLACEHOLDER_NATIONAL_ID}
            defaultValue={currentForm.nationalId}
            {...bindedInputFunctions}
          />
        </Form.Item>
      )}

      <Form.Item {...errors.check1} label="">
        <Checkbox
          name="check1"
          size="large"
          label={<Check1Label />}
          defaultChecked={currentForm.check1}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <Form.Item {...errors.check2} label="">
        <Checkbox
          name="check2"
          size="large"
          label={<Check2Label />}
          defaultChecked={currentForm.check2}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <Form.Item {...errors.check3} label="">
        <Checkbox
          name="check3"
          size="large"
          label={LABEL_CHECK_3_TEXT}
          defaultChecked={currentForm.check3}
          {...bindedInputFunctions}
        />
      </Form.Item>

      <ActionButtons
        onCancel={goToPrevStage}
        onSubmit={bindedSubmit}
        submitTitle={BUTTON_COMPLETE_DONATION}
      />
    </>
  );
};

export default PaymentForm;
