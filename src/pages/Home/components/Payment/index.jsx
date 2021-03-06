import React from 'react';
import { withTranslation } from 'react-i18next';

// Constants
import { CARD, CONTACT_ME, PAYMENT_TITLE } from '../../../../constants';

// Components
import PaymentForm from '../../../../components/Form/forms/PaymentForm';
import { FormTitle } from '../../../../styles/UI/form';
import { TabsItem, TabsWrapper } from '../../../../styles/UI/tabs';
import ContactForm from '../../../../components/Form/forms/ContactForm';

const Payment = (props) => {
  const { stage, goToStage, t } = props;

  const handleChange = (key) => goToStage(Number(key));

  return (
    <>
      <FormTitle>{t('PAYMENT_TITLE')}</FormTitle>
      <TabsWrapper defaultActiveKey={stage} onChange={handleChange} style={{ marginTop: '30px' }}>
        <TabsItem tab={t('CARD')} key={2}>
          <PaymentForm {...props} />
        </TabsItem>
        <TabsItem tab={t('CONTACT_ME')} key={4}>
          <ContactForm {...props} />
        </TabsItem>
      </TabsWrapper>
    </>
  );
};

export default withTranslation()(Payment);
