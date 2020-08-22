import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom'; 
import '../src/assets/scss/style.scss'; 
import AdminHeader from './components/core/topbar/AdminHeader'; 
import { getLocalStorage } from './common/helpers/Utils'; 
import ELPRoute from './route/ELPRoute';

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      access_token: ''
    };
  }
  componentDidMount() { 
    let userInfo = getLocalStorage('userInfo');
    if (userInfo) {
      if (userInfo.token) {
        let access_token = userInfo.token;
        this.setState({
          access_token
        });
      }
    }
  }

  render() {  
    return (
      <React.Fragment>
        <div className="pageWrapper">
          {this.state.access_token ? <AdminHeader {...this.props} /> : null}
          <Container>
            <Route component={ELPRoute} />
          </Container>
        </div>
      </React.Fragment> 
    );
  }
}

export default App;
