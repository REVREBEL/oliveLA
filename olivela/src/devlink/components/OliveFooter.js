"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OliveFooter.module.css";

export function OliveFooter({
  as: _Component = _Builtin.Section,
  backgroundColorLightOrDark = "Light",

  logoImageFooterLogoLink = {
    href: "https://www.tryolive.com/",
  },

  signUpSIgnUpText = "sign up for updates including insights, resources +more.",
  signUpEmailId = "Home-Email-Signup_Mobile",
  privacyPrivacyLinkVisible = true,
  privacyPrivacyText = "Privacy Policy",

  privacyPrivacyLink = {
    href: "https://www.tryolive.com/privacy",
  },

  termsTermsLinkVisible = true,
  termsTermsText = "Terms of Service",

  termsTermsLink = {
    href: "https://www.tryolive.com/terms-of-service",
  },

  referralReferralLinkVisible = true,

  referralReferralLink = {
    href: "https://www.tryolive.com/referral-program-form",
  },

  referralReferralText = "Referral Program",
  signUpSignUpSuccessText = "Thanks for signing up, we'll be in touch shortly.",
  signUpSignUpErrorMessageText = "We're hit a road bump. Please try again later.",
}) {
  const _styleVariantMap = {
    Dark: "",
    Light: "w-variant-a2227fce-f01f-4229-b3d5-1eca6731dde1",
  };

  const _activeStyleVariant = _styleVariantMap[backgroundColorLightOrDark];

  return (
    <_Component
      className={_utils.cx(_styles, "footer", _activeStyleVariant)}
      tag="footer"
      data-bg-color="Dark"
    >
      <_Builtin.Container
        className={_utils.cx(
          _styles,
          "container",
          "max-width_large",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-wrapper", _activeStyleVariant)}
          id={_utils.cx(
            _styles,
            "w-node-_6b51e866-01fe-c04b-d23c-7146563cf09f-33aee739"
          )}
          tag="div"
        >
          <_Builtin.VFlex
            className={_utils.cx(
              _styles,
              "flex_vertical",
              "gap-small",
              "is-vertical-stretch",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-c5c435d0-712b-95be-3f6b-8c5a33aee73b-33aee739"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-grid_2-col",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-c5c435d0-712b-95be-3f6b-8c5a33aee73c-33aee739"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "logo",
                  "test",
                  _activeStyleVariant
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-c5c435d0-712b-95be-3f6b-8c5a33aee73d-33aee739"
                )}
                button={false}
                block="inline"
                options={logoImageFooterLogoLink}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav_logo-icon",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "logo",
                      "is-light",
                      _activeStyleVariant
                    )}
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20preserveAspectRatio%3D%22xMidYMid%22%20version%3D%221.1%22%20viewBox%3D%220%20-.05678%20791.25%20296.094%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M261.95%20134.07c0%2037.1-.02%2074.21.02%20111.31%20.01%209.49.11%2019%202.12%2028.35%201.3%206.05%204.26%2010.99%2010.4%2013.17%202.13.76%202.11%202.11%202.02%203.77%20-.12%202.36-1.93%201.51-3.09%201.51%20-17.1.05-34.21.04-51.31%200%20-1.09%200-2.79.63-2.85-1.37%20-.04-1.24-.7-2.85%201.15-3.55%209.22-3.45%2010.95-11.51%2012.21-19.86%201.12-7.44%201.11-14.94%201.12-22.43%20.03-62.71.04-125.43-.01-188.14%200-7.35-.07-14.73-1.83-21.97%20-1.42-5.84-4.46-10.23-10.08-12.65%20-1.53-.66-2.76-1.31-2.68-3.46%20.08-2.09%201.49-2.33%202.82-2.92%2011.05-4.91%2022.09-9.85%2033.16-14.71%205.29-2.32%206.85-1.19%206.85%204.77%200%2042.73%200%2085.45%200%20128.18Z%22%2F%3E%3Cpath%20d%3D%22M474.6%20265.7c4.91-12.77%209.5-24.63%2014.04-36.49%209.4-24.58%2018.81-49.17%2028.16-73.77%202.8-7.35%205.46-14.75%206.11-22.7%20.75-9.15-1.09-12.58-9.34-16.43%20-2.02-.94-1.3-2.44-1.35-3.8%20-.07-1.89%201.48-1.3%202.45-1.3%2010.86-.04%2021.72-.04%2032.59%200%20.85%200%202.3-.56%202.26%201.08%20-.04%201.46.92%203.35-1.35%204.16%20-7.77%202.77-12%209.06-15.58%2015.91%20-6.95%2013.31-11.57%2027.6-17%2041.54%20-15.02%2038.59-29.88%2077.25-44.74%20115.9%20-.69%201.79-1.54%202.58-3.51%202.46%20-2.74-.17-5.53-.33-8.23.03%20-3.68.48-5.07-1.2-6.42-4.42%20-19.77-47.44-39.69-94.82-59.62-142.19%20-2.96-7.02-6.34-13.85-10.76-20.1%20-2.55-3.61-5.4-6.94-9.48-8.83%20-2.27-1.05-1.75-2.86-1.57-4.45%20.22-1.92%201.97-1.07%203.03-1.07%2015.36-.06%2030.71-.06%2046.07%200%201.05%200%202.79-.82%202.93%201.22%20.12%201.63.52%203.25-1.85%204.26%20-4.34%201.84-5.47%204.27-4.71%208.98%201.04%206.46%203.67%2012.43%206.19%2018.4%2016.71%2039.53%2033.48%2079.03%2050.24%20118.54%20.33.77.71%201.51%201.45%203.08Z%22%2F%3E%3Cpath%20d%3D%22M345.77%20186.4c0%2022.36-.04%2044.72.03%2067.08%20.02%206.62.6%2013.21%202.03%2019.71%201.4%206.35%204.33%2011.47%2010.69%2013.84%202.02.76%201.68%202.15%201.69%203.6%200%202.04-1.54%201.57-2.69%201.57%20-17.35.02-34.7.02-52.06%200%20-1.04%200-2.5.41-2.4-1.41%20.07-1.24-.75-2.85%201.14-3.53%209.46-3.43%2011.17-11.6%2012.29-20.13%20.93-7.08.97-14.2.96-21.32%20-.04-29.98-.13-59.96-.22-89.94%20-.01-4.01-.6-7.96-1.38-11.89%20-1.16-5.88-4.17-10.33-9.81-12.81%20-1.52-.67-3.13-1.12-3.12-3.56%20.01-2.54%201.79-2.69%203.3-3.34%2011.31-4.93%2022.63-9.85%2033.96-14.75%203.71-1.6%205.53-.38%205.54%203.78%20.02%2020.36.01%2040.73.01%2061.09%200%204%200%208%200%2011.99h.04Z%22%2F%3E%3Cpath%20d%3D%22M309.5%2065.94c-.1-11.07%208.76-19.95%2019.94-19.96%2011.39-.02%2019.79%208.58%2019.88%2020.34%20.08%2010.83-8.71%2019.66-19.71%2019.79%20-11.29.13-20-8.6-20.1-20.17Z%22%2F%3E%3Cpath%20d%3D%22M782.32%2047.46c0-8.61.13-17.23-.07-25.84%20-.07-2.83.71-3.88%203.51-3.44%201.1.17%202.25.1%203.36.01%201.66-.13%202.13.63%202.13%202.2%20-.04%2017.97-.04%2035.95%200%2053.92%200%201.83-.66%202.26-2.4%202.33%20-6.53.27-6.53.34-6.53-6.35%200-7.61%200-15.23%200-22.84Z%22%2F%3E%3Cpath%20d%3D%22M189.12%20188.72c-2.94-26.13-13.92-47.74-35.99-62.86%20-16.29-11.16-34.48-16.75-54.17-17.06%20-37.75-.61-66.8%2015.2-86.34%2047.5C.34%20176.6-2.12%20198.97%201.57%20222.13c3.33%2020.9%2012.65%2038.58%2029.22%2051.97%2031.63%2025.55%2076.71%2029.15%20111.99%208.55%2031.33-18.29%2046.39-46.29%2047.19-81.46%20-.32-4.74-.44-8.62-.87-12.46Zm-34.75%2070.19c-12.64%2026.35-40.1%2033.62-63.44%2027.33%20-19.72-5.31-33.3-18.64-43.54-35.56%20-15.11-25-21.81-52.11-18.5-81.33%201.31-11.53%204.9-22.41%2011.52-32.1%2015.04-22.02%2042.71-25.89%2062.72-18.32%2016.45%206.22%2028.12%2018.26%2037.42%2032.68%2013.92%2021.58%2021.1%2045.32%2021.65%2071.04%20-.14%2012.63-2.31%2024.79-7.83%2036.28Z%22%2F%3E%3Cpath%20d%3D%22M731.14%20243.45c-1.92-2.44-2.93-.84-4.25.59%20-17.82%2019.43-39.5%2030.18-66.27%2029.03%20-21.38-.92-40.06-8.28-54.2-24.82%20-17.85-20.88-21.5-45.73-19.12-72.12%20.27-2.98%201.39-3.55%204.13-3.54%2022.35.11%2044.7.06%2067.05.06%2022.47%200%2044.95-.02%2067.42.04%202.28%200%203.68-.02%203.39-3.09%20-1.57-16.59-7.91-30.87-20.22-42.22%20-14.21-13.1-31.45-18.46-50.41-18.65%20-34.33-.35-61.82%2013.34-81.28%2041.71%20-15.45%2022.52-19.39%2047.8-15.06%2074.48%208.35%2051.44%2057.41%2077.89%20100.45%2069.39%2029.89-5.9%2050.75-24.83%2068.58-48.04%20.88-1.14.61-1.77-.22-2.83Zm-142-77.77c3.68-16.24%2010.26-30.92%2024.2-40.91%2020.69-14.82%2048.54-12.65%2067.04%204.85%2010.18%209.63%2016.32%2021.53%2019.38%2035.17%20.63%202.79.02%203.39-2.7%203.38%20-17.46-.09-34.93-.05-52.39-.05s-34.93%200-52.39-.01c-1.61%200-3.84.64-3.14-2.43Z%22%2F%3E%3Cpath%20d%3D%22M772%2071.07c-5.69-15.85-11.6-31.62-17.02-47.56%20-1.38-4.06-3.02-6.24-7.45-5.31%20-.36.08-.76.07-1.12%200%20-2.85-.54-4.15.77-5.07%203.43%20-3.79%2010.96-7.8%2021.85-11.72%2032.77%20-2.6%207.25-5.19%2014.51-7.94%2022.19%202.27%200%204.13-.19%205.94.05%202.76.37%203.99-.76%204.69-3.37%20.9-3.37%202.31-6.59%203.33-9.93%20.53-1.73%201.44-2.35%203.23-2.29%203.99.12%207.99.04%2011.98.04q8.51%200%2011.15%208.01%202.64%208.01%2011.41%207.31c.24-1.96-.8-3.61-1.42-5.33Zm-32.88-17.69c2.81-8.13%205.53-15.98%208.25-23.83%20.27-.07.53-.13.8-.2%202.76%207.93%205.53%2015.85%208.37%2024.03h-17.42Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.FormWrapper
                className={_utils.cx(
                  _styles,
                  "footer_form",
                  _activeStyleVariant
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-c5c435d0-712b-95be-3f6b-8c5a33aee740-33aee739"
                )}
              >
                <_Builtin.FormForm
                  className={_utils.cx(
                    _styles,
                    "form_item-wrapper",
                    _activeStyleVariant
                  )}
                  name="wf-form-enter-your-business-email"
                  data-name="enter your business email"
                  method="get"
                  id="wf-form-enter-your-business-email"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "grid-flex",
                      "footer",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "footer_item-wrapper",
                        _activeStyleVariant
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-c5c435d0-712b-95be-3f6b-8c5a33aee743-33aee739"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "footer_text",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        {signUpSIgnUpText}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className={_utils.cx(
                        _styles,
                        "input_field",
                        _activeStyleVariant
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-c5c435d0-712b-95be-3f6b-8c5a33aee746-33aee739"
                      )}
                      name="Home-Email-Signup_Mobile"
                      maxLength={256}
                      data-name="Home-Email-Signup_Mobile"
                      placeholder="Enter your email"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      aria-label="Enter your email"
                    />
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-button",
                        _activeStyleVariant
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-a86bf64a-8a4a-6cf8-0c10-5790617f2466-33aee739"
                      )}
                      button={true}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"submit"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage
                  className={_utils.cx(
                    _styles,
                    "success-message-2",
                    _activeStyleVariant
                  )}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-block-35",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    {signUpSignUpSuccessText}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage
                  className={_utils.cx(
                    _styles,
                    "error-message",
                    _activeStyleVariant
                  )}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-block-36",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    {signUpSignUpErrorMessageText}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
          </_Builtin.VFlex>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer_divider",
              _activeStyleVariant
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer_button_wrapper",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer_button-group",
                _activeStyleVariant
              )}
              tag="div"
            >
              {privacyPrivacyLinkVisible ? (
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer_link",
                    _activeStyleVariant
                  )}
                  button={false}
                  block=""
                  options={privacyPrivacyLink}
                >
                  {privacyPrivacyText}
                </_Builtin.Link>
              ) : null}
              {termsTermsLinkVisible ? (
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer_link",
                    _activeStyleVariant
                  )}
                  button={false}
                  block=""
                  options={termsTermsLink}
                >
                  {termsTermsText}
                </_Builtin.Link>
              ) : null}
              {referralReferralLinkVisible ? (
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer_link",
                    _activeStyleVariant
                  )}
                  button={false}
                  block=""
                  options={referralReferralLink}
                >
                  {referralReferralText}
                </_Builtin.Link>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
