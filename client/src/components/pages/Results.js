import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BloodGlucoseChart from '../../components/graphs/BloodGlucose';
import BodyWeightChart from '../../components/graphs/BodyWeight';
import BloodPressurechart from '../../components/graphs/BloodPressure';
import JournalEntry from '../../components/pages/JournalEntry';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Results = ({ isAuthenticated }) => {
  console.log('isAuthenticated', isAuthenticated);
  //   return <Redirect to="/login" />;
  // } else {
  return (
    <div className="results">
      <div className="container">
        <div className="graphSpacing">
          <BloodPressurechart />
        </div>
        <div className="graphSpacing">
          <BloodGlucoseChart />
        </div>
        <div className="graphSpacing">
          <BodyWeightChart />
        </div>
      </div>

      <div className="journalEntryAlignment col-sm-12"></div>
    </div>
  );
};
// };

Results.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(Results);
