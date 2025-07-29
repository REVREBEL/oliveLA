import * as React from "react";
import * as Types from "./types";

declare function OliveFooter(props: {
  as?: React.ElementType;
  backgroundColorLightOrDark?: "Dark" | "Light";
  logoImageFooterLogoLink?: Types.Basic.Link;
  signUpSIgnUpText?: React.ReactNode;
  signUpEmailId?: Types.Basic.IdTextInput;
  privacyPrivacyLinkVisible?: Types.Visibility.VisibilityConditions;
  privacyPrivacyText?: React.ReactNode;
  privacyPrivacyLink?: Types.Basic.Link;
  termsTermsLinkVisible?: Types.Visibility.VisibilityConditions;
  termsTermsText?: React.ReactNode;
  termsTermsLink?: Types.Basic.Link;
  referralReferralLinkVisible?: Types.Visibility.VisibilityConditions;
  referralReferralLink?: Types.Basic.Link;
  referralReferralText?: React.ReactNode;
  signUpSignUpSuccessText?: React.ReactNode;
  signUpSignUpErrorMessageText?: React.ReactNode;
}): React.JSX.Element;
