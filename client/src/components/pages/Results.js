import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BloodGlucoseChart from '../../components/graphs/BloodGlucose';
import PropTypes from 'prop-types';
import BodyWeightChart from '../../components/graphs/BodyWeight';
import { connect } from 'react-redux';
import JournalEntry from '../../components/pages/JournalEntry';

const Results = ({ isAuthenticated }) => {
  console.log('isAuthenticated', isAuthenticated);
  // if (!isAuthenticated) {
  //   return <Redirect to="/login" />;
  // } else {
  return (
    <div className="results">
      <div className="container">
        <div className="graphSpacing">
          <BloodGlucoseChart />
        </div>
        <div className="graphSpacing">
          <BodyWeightChart />
        </div>
      </div>

      <div className="journalEntryAlignment col-sm-12">
        <div>
          <JournalEntry />
        </div>
      </div>
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
