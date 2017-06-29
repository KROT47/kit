/* @flow */
// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';

// GraphQL
import { graphql } from 'react-apollo';

// Listen to Redux store state
import { connect } from 'react-redux';

// Routing
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';


/* Local */

// NotFound 404 handler for unknown routes
import { NotFound, Redirect } from 'kit/lib/routing';

// GraphQL queries
import allMessages from 'src/queries/all_messages.gql';

// flow types
// @see: 'flow-typed/redux.js'
import type { DispatchType, VoidActionType } from 'flow-typed/redux';

// Styles
import './styles.global.css';
import css from './styles.css';
import sass from './styles.scss';
import less from './styles.less';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
import logo from './reactql-logo.svg';

// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = () => (
  <h1>You&apos;re on the home page - click another link above</h1>
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
);

// Create a route that will be displayed when the code isn't found
const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.props = {
  match: {
    params: Object,
  },
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
const Stats = () => {
  const info = [
    ['Environment', process.env.NODE_ENV],
  ];

  return (
    <ul className={css.data}>
      {info.map(([key, val]) => (
        <li key={key}>{key}: <span>{val}</span></li>
      ))}
    </ul>
  );
};

// Now, let's create a GraphQL-enabled component...

// flow types
type DefaultPropsType = void;

type StateType = void;

type PropsType = {
  data: {
    allMessages: [{ text: string }],
  },
};

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
const GraphQLMessage = graphql(allMessages)(
  class GraphQLMessageClass extends React.PureComponent<DefaultPropsType, PropsType, StateType> {
    render(): React$Element<*> {
      const { data = {} } = this.props;
      const message = data.allMessages && data.allMessages[0].text;
      const isLoading = data.loading ? 'yes' : 'nope';
      return (
        <div>
          <h2>Message from GraphQL server: <em>{message}</em></h2>
          <h2>Currently loading?: {isLoading}</h2>
        </div>
      );
    }
  },
);
// const GraphQLMessage = graphql(allMessages)(GraphQLMessageClass);

// Example of CSS, SASS and LESS styles being used together
const Styles = () => (
  <ul className={css.styleExamples}>
    <li className={css.example}>Styled by CSS</li>
    <li className={sass.example}>Styled by SASS</li>
    <li className={less.example}>Styled by LESS</li>
  </ul>
);

// Sample component that demonstrates using a part of the Redux store
// outside of Apollo.  We can import own custom reducers in `kit/lib/redux`
// and 'listen' to them here
const ReduxCounter = connect(state => ({ counter: state.counter }))(
  class ReduxCounterClass extends React.PureComponent {
    // flow types another approach
    props: {
      counter: {
        count: number,
      },
      dispatch: DispatchType<VoidActionType, void>,
    };

    // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total
    triggerIncrement = () => {
      this.props.dispatch({
        type: 'INCREMENT_COUNTER',
      });
    }

    render(): React$Element<*> {
      const { count } = this.props.counter;
      return (
        <div>
          <h2>Listening to Redux counter: {count}</h2>
          <button onClick={this.triggerIncrement}>Increment</button>
        </div>
      );
    }
  },
);

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <div className={css.hello}>
      <img src={logo} alt="ReactQL" className={css.logo} />
    </div>
    <hr />
    <GraphQLMessage />
    <hr />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page/about">About</Link></li>
      <li><Link to="/page/contact">Contact</Link></li>
      <li><Link to="/old/path">Redirect from /old/path &#8594; /new/path</Link></li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page/:name" component={Page} />
      <Redirect from="/old/path" to="/new/path" />
      <Route component={WhenNotFound} />
    </Switch>
    <hr />
    <ReduxCounter />
    <hr />
    <p>Runtime info:</p>
    <Stats />
    <hr />
    <p>Stylesheet examples:</p>
    <Styles />
  </div>
);
