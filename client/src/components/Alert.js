import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import toast from 'react-hot-toast';
 // const t = alert.alertType;
// if(t === 'error') toast.error(alert.msg);

const Alert = props => props.alerts !== null && props.alerts.length > 0 
&& props.alerts.map(alert => {
     
 if(alert.alertType === 'danger'){ toast.error(alert.msg);}
});

Alert.propTypes = {
     alerts: PropTypes.array.isRequired 
}
const map = state => ({
  alerts: state.alertRed
});

export default connect(map)(Alert);
