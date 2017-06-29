/* @flow */
/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS

import React from 'react';

import { Route, Redirect as ReactRouterRedirect } from 'react-router-dom';

// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.
class Status extends React.PureComponent {
  static defaultProps = {
    children: null,
  }

  props: {
    code: number,
    children: ?React$Element<*>,
  };

  render(): React$Element<*> {
    const { code, children } = this.props;
    return (
      <Route render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      }} />
    );
  }
}

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.
export class NotFound extends React.PureComponent {
  static defaultProps = {
    children: null,
  }

  props: {
    children: ?React$Element<*>,
  };

  render(): React$Element<*> {
    const { children } = this.props;

    return (
      <Status code={404}>
        {children}
      </Status>
    );
  }
}

// flow types
type DefaultPropsType = {
    from: ?string,
    push: boolean,
    permanent: boolean,
};

type PropsType = {
    to: string | Object,
    from: ?string,
    push?: boolean,
    permanent?: boolean,
};

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.
export class Redirect extends React.PureComponent<DefaultPropsType, PropsType, void> {

  static defaultProps = {
    from: null,
    push: false,
    permanent: false,
  }

  render(): React$Element<*> {
    const { to, from, push, permanent } = this.props;
    const code = permanent ? 301 : 302;
    return (
      <Status code={code}>
        <ReactRouterRedirect to={to} from={from} push={push} />
      </Status>
    );
  }
}
