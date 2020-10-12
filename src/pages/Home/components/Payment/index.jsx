import React, { useState } from 'react';

// Constants
import { CARD, CONTACT_ME, PAYMENT_TITLE } from '../../../../constants';

// Components
import PaymentForm from '../../../../components/Form/forms/PaymentForm';
import { FormTitle, FormWrapper } from '../../../../styles/UI/form';
import { TabsItem, TabsWrapper } from '../../../../styles/UI/tabs';
import ContactForm from '../../../../components/Form/forms/ContactForm';

const Payment = ({ onSubmit, onCancel }) => {
  return (
    <>
      <FormTitle>{PAYMENT_TITLE}</FormTitle>
      <TabsWrapper defaultActiveKey="1">
        <TabsItem tab={CARD} key="1">
          <PaymentForm onSubmit={onSubmit} onCancel={onCancel} />
        </TabsItem>
        <TabsItem tab={CONTACT_ME} key="2">
          <ContactForm />
        </TabsItem>
      </TabsWrapper>
    </>
  );
};

export default Payment;
