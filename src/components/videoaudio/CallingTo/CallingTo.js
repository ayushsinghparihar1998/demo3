import React, { useState, useEffect } from 'react'
import Calling from '../../VideoComponents/Calling/Calling'
import { useParams, useLocation, useHistory } from 'react-router-dom'

function CallingTo(props) {
  const [state, setState] = useState(null)
  // const params = useParams();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    setState(location.state);
    if (location.state.id) {
      history.replace({
        pathname: location.pathname,
        state: {}
      });
    } else {
      history.replace({
        pathname: '/'
      });
    }

  }, [])
  return (
    <div>
      <Calling {...state} />
    </div>
  )
}

export default CallingTo;
