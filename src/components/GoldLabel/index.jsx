import React, { memo } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { GoldLabelWrapper, GoldLabelTitle, GoldLabelDescription } from './styles';

const GoldLabel = ({ formsData, className, style }) => {
  const { firstName, lastName, isAnonymous } = formsData;
  const currentDate = moment().format('D MMMM YYYY');
  const isDefinedUser = !!(!isAnonymous && (firstName || lastName));

  return (
    <GoldLabelWrapper className={className} style={style}>
      {isDefinedUser && <GoldLabelTitle>{`from ${firstName} ${lastName}`}</GoldLabelTitle>}
      <GoldLabelDescription>{currentDate}</GoldLabelDescription>
    </GoldLabelWrapper>
  );
};

const mapStateToProps = ({ form }) => ({
  formsData: form.formsData,
});

export default memo(connect(mapStateToProps, {})(GoldLabel));
