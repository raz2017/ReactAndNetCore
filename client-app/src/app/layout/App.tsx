import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
          <ActivityDashboard activities={activities}/>
      </Container>

    </>
  );
}

export default App;
