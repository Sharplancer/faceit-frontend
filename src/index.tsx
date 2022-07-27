import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import TournamentListContainer from './containers/TournamentListContainer';
import Header from './containers/Header';

const App: React.FC = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <Header />
      <TournamentListContainer />
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
