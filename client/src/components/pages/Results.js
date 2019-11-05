import React, { useEffect } from 'react';
import Loading from './Loading';
import BloodGlucoseChart from '../../components/graphs/BloodGlucose';
import BodyWeightChart from '../../components/graphs/BodyWeight';
import BloodPressurechart from '../../components/graphs/BloodPressure';
import { getCurrentProfile } from '../../actions/profileAction';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Results = ({ getCurrentProfile, loading, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading || profile === null ? (
    <Loading />
  ) : (
    <>
      <div className="top-spacing container">
        <div className="graphSpacing">
          <BloodPressurechart bloodPressure={profile.bloodPressure} />
        </div>
        <div className="graphSpacing">
          <BloodGlucoseChart bloodGlucose={profile.bloodGlucose} />
        </div>
        <div className="graphSpacing">
          <BodyWeightChart bodyWeight={profile.bodyWeight} />
        </div>
      </div>
    </>
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
