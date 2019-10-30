import React, { useEffect } from 'react';
import BloodGlucoseChart from '../../components/graphs/BloodGlucose';
import BodyWeightChart from '../../components/graphs/BodyWeight';
import BloodPressurechart from '../../components/graphs/BloodPressure';
import { getCurrentProfile } from '../../actions/profileAction';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Results = ({ getCurrentProfile, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

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

Results.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Results);
