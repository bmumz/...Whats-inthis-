import React from "react";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="center ">
      <article className="br3 ba dark-gray b--black-10 mv4 mw5">
        <main className="pa4 pa4 shadow-5 bg-white br3 ">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center">sign in</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                onClick={() => onRouteChange("home")}
                type="submit"
                value="sign in"
              />
            </div>
            <p
              className="center f6 pointer grow"
              onClick={() => onRouteChange("signup")}
            >
              sign up
            </p>
          </div>
        </main>
      </article>
    </div>
  );
};

export default SignIn;
