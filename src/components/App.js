import React from 'react';
import SearchFormContainer from '../containers/SearchFormContainer';
import { Divider, Header } from 'semantic-ui-react';
import './styles/App.css';

const App = () => (
    <div className="App">
        <Header as='h1'>iTunes Search</Header>
        <SearchFormContainer />
        <Divider />
    </div>
);

export default App;
