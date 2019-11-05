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
      <div className="sidebar-results">
        <button>TODO: Add BP Icon</button>
        <button>TODO: Add BW Icon</button>
        <button>TODO: Add BG Icon</button>
      </div>
      <div className="container">
        <div className="graphSpacing">
          <BloodPressurechart bloodPressure={profile.bloodPressure} />
        </div>
        <div className="graphSpacing">
          <BloodGlucoseChart />
        </div>
        <div className="graphSpacing">
          <BodyWeightChart />
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
