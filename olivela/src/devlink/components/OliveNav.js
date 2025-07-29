"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OliveNav.module.css";

export function OliveNav({
  as: _Component = _Builtin.Block,
  navBarMenu1NavBarMenuDropdownVisibility = true,
  navBarMenu1NavBarMenuDropdownText = "Suites",
  section1Section1EyebrowText = (
    <>
      {"Stay "}
      {"&"}
      {" Unwind"}
    </>
  ),

  section1NavLink1NavLink = {
    href: "#",
  },

  section1NavLink1NavLinkText = "",
  section1NavLink1NavLinkTeaserDescription = "Spacious, stylish, all yours.",

  section1NavLink2NavLink = {
    href: "#",
  },

  section1NavLink2NavLinkText = "",
  section1NavLink2NavLinkTeaserDescription = "Fireplaces, balconies, luxe perks.",

  section1NavLink3NavLink3 = {
    href: "#",
  },

  section1NavLink3NavLinkText = "",
  section1NavLink3NavLinkTeaserDescription = "Unlock exclusive suite deals.",
  section2Section2EyebrowText = "Discover",

  section2NavLink1NavLink = {
    href: "#",
  },

  section2NavLink1NavLinkText = "",
  section2NavLink1NavLinkTeaserDescription = "Sunset Strip at your door.",

  section2NavLink2NavLinkLink = {
    href: "#",
  },

  section2NavLink2NavLinkText = "",
  section2NavLink2NavLinkTeaserDescription = "See our retro-chic spaces.",

  section2NavLink3NavLink = {
    href: "#",
  },

  section2NavLink3NavLinkText = "",
  section2NavLink3NavLinkTeaserDescription = "Buzz from the inside crowd.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "nav")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav_container", "hide-mobile")}
        tag="div"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: true,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_left")}
          id={_utils.cx(
            _styles,
            "w-node-_7640196e-5571-fdd9-fca7-53268d4201cd-8d4201cb"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_logo")}
            id={_utils.cx(
              _styles,
              "w-node-_7640196e-5571-fdd9-fca7-53268d4201ce-8d4201cb"
            )}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_logo-icon")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nav_logo-icon")}
                tag="div"
              >
                <_Builtin.HtmlEmbed value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201136.5%20451.75%22%3E%3Cdefs%3E%3Cstyle%3E.b%3D%22currentColor%22%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22b%22%20d%3D%22M1077.46%2C127.72V51.58h12.45V127.72h-12.45Zm-30.89-21.14h-29.11l-7.45%2C21.14h-13.12l28.49-76.46h13.54l28.49%2C76.46h-13.23l-7.6-21.14Zm-10.42-31.46c-.52-1.39-1.24-3.58-2.16-6.56-.92-2.99-1.55-5.17-1.9-6.56-.94%2C4.27-2.31%2C8.94-4.11%2C14.01l-6.88%2C19.84h22.19l-7.14-20.73Zm-221.66%2C179c-1.03%2C7.7-1.54%2C14.89-1.54%2C23.1%2C0%2C67.25%2C42.09%2C113.45%2C105.75%2C113.45%2C37.99%2C0%2C65.19-16.94%2C87.78-42.61l4.62%2C4.11c-25.15%2C34.39-63.65%2C69.81-116.53%2C69.81s-116.53-39.53-116.53-121.15%2C60.57-133.47%2C129.36-133.47c62.11%2C0%2C98.05%2C40.04%2C99.59%2C86.75h-192.5Zm77-78.03c-42.09-.51-67.76%2C30.29-75.46%2C71.87h151.43c-4.62-32.85-31.31-71.87-75.97-71.87Zm-163.75%2C44.15c-10.27%2C26.18-72.89%2C196.61-72.89%2C196.61h-17.97l-69.81-187.88c-7.7-18.48-18.48-51.85-37.99-51.85v-6.67h83.67v6.67c-17.45%2C0-17.45%2C18.48-8.73%2C44.66%2C17.45%2C49.79%2C57.49%2C156.05%2C57.49%2C156.05%2C0%2C0%2C47.74-132.95%2C58.52-159.13%2C12.83-29.77%2C5.13-41.58-9.24-41.58l-.51-6.67h58.01v6.67c-16.94%2C0-30.8%2C17.97-40.55%2C43.12Zm-292.6%2C190.45c15.4-4.62%2C19.51-15.91%2C19.51-56.47v-109.34c0-34.39-6.16-41.07-19.51-43.63v-7.19l51.85-23.61h6.16v183.77c0%2C40.55%2C5.13%2C51.85%2C20.02%2C56.47v6.16h-78.03v-6.16Zm33.37-273.1c-14.37%2C0-25.67-11.81-25.67-25.67%2C0-14.89%2C11.29-26.18%2C25.67-26.18s25.15%2C11.29%2C25.15%2C26.18c0%2C13.86-10.78%2C25.67-25.15%2C25.67Zm-146.3%2C273.1c15.4-4.62%2C19.51-15.91%2C19.51-56.47V108.84c0-39.53%2C4.11-61.09-19.51-62.11v-5.65l51.85-21.56h6.16V354.22c0%2C40.55%2C5.13%2C51.85%2C20.02%2C56.47v6.16h-78.03v-6.16Zm-164.27%2C11.29c-62.11%2C0-128.85-39.01-128.85-124.74%2C0-77%2C61.6-129.87%2C128.85-129.87%2C61.09%2C0%2C128.85%2C37.47%2C128.85%2C124.74s-70.33%2C129.87-128.85%2C129.87Zm-17.97-245.37c-50.31%2C2.05-72.89%2C43.12-72.89%2C92.4%2C0%2C62.63%2C40.55%2C142.19%2C105.75%2C142.19%2C52.87%2C0%2C76.49-42.09%2C76.49-89.83%2C0-63.65-44.66-148.35-109.34-144.76Z%22%2F%3E%3C%2Fsvg%3E" />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav_menu")}
            id={_utils.cx(
              _styles,
              "w-node-_7640196e-5571-fdd9-fca7-53268d4201d2-8d4201cb"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav_menu-list")}
              tag="ul"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown-menu")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    {navBarMenu1NavBarMenuDropdownVisibility ? (
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nav_text")}
                        tag="div"
                      >
                        {navBarMenu1NavBarMenuDropdownText}
                      </_Builtin.Block>
                    ) : null}
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "mega-nav_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "mega-nav_dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "grid_3-col",
                          "tablet-1-col",
                          "gap-medium",
                          "margin-bottom_none"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "w-node-_7640196e-5571-fdd9-fca7-53268d4201dd-8d4201cb"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6834ea16-81cf-d304-337c-e1249bfd0bd1-4d562d54"
                          )}
                        >
                          <_Builtin.Grid
                            className={_utils.cx(
                              _styles,
                              "grid_3-col",
                              "tablet-1-col",
                              "gap-small"
                            )}
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {section1Section1EyebrowText}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4201e5-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={section1NavLink1NavLink}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4201ea-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0bdc-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        {section1NavLink1NavLinkText}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          section1NavLink1NavLinkTeaserDescription
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4201f0-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={section1NavLink2NavLink}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4201f5-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0be7-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        {section1NavLink2NavLinkText}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          section1NavLink2NavLinkTeaserDescription
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4201fb-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={section1NavLink3NavLink3}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d420200-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0bf2-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        {section1NavLink3NavLinkText}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          section1NavLink3NavLinkTeaserDescription
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_7640196e-5571-fdd9-fca7-53268d420206-8d4201cb"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Experience"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d42020a-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d42020f-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c01-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Rooftop Pool"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Swim, sip, soak in style."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d420215-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d42021a-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c0c-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Dining"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Fresh flavors, all day."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d420220-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d420225-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c17-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Events"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Gather, celebrate, create memories."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_7640196e-5571-fdd9-fca7-53268d42022b-8d4201cb"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {section2Section2EyebrowText}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d42022f-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={section2NavLink1NavLink}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d420234-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c26-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        {section2NavLink1NavLinkText}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          section2NavLink1NavLinkTeaserDescription
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d42023a-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={section2NavLink2NavLinkLink}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d42023f-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c31-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        {section2NavLink2NavLinkText}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          section2NavLink2NavLinkTeaserDescription
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d420245-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={section2NavLink3NavLink}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d42024a-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c3c-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        {section2NavLink3NavLinkText}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          section2NavLink3NavLinkTeaserDescription
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "w-node-_7640196e-5571-fdd9-fca7-53268d420250-8d4201cb"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6834ea16-81cf-d304-337c-e1249bfd0c42-4d562d54"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "card-link",
                              "is-inverse",
                              "flex-child_expand"
                            )}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "card_body")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "heading_h3")}
                                tag="div"
                              >
                                {"Chic stays, Hollywood soul"}
                              </_Builtin.Block>
                              <_Builtin.Paragraph
                                className={_utils.cx(
                                  _styles,
                                  "paragraph_small",
                                  "text-color_inverse-secondary"
                                )}
                              >
                                {
                                  "All-suite comfort, rooftop views, and a splash of retro cool"
                                }
                                {"—"}
                                {"your West Hollywood hideaway awaits."}
                              </_Builtin.Paragraph>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin_top-auto"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "button-group")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-button",
                                      "is-secondary"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Discover"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "button_icon"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_text")}
                    tag="div"
                  >
                    {"curate your stay"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_text")}
                    tag="div"
                  >
                    {"About"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown-menu")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav_text")}
                      tag="div"
                    >
                      {"Help"}
                    </_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "nav-menu_dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "flex_vertical",
                          "margin-bottom_none"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(_styles, "margin-bottom_none")}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav_dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button_label")}
                              tag="div"
                            >
                              {"Contact"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(_styles, "margin-bottom_none")}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav_dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button_label")}
                              tag="div"
                            >
                              {"FAQ"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "auth-invisible"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "masthead-meta", "nav_link")}
                  button={false}
                  id="login-btn"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_text")}
                    tag="div"
                  >
                    {"sign-in"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "auth-visible"
                )}
                id="l"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "masthead-meta", "nav_link")}
                  button={false}
                  id="logout-btn"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_text")}
                    tag="div"
                  >
                    {"sign-out"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_right")}
          id={_utils.cx(
            _styles,
            "w-node-_7640196e-5571-fdd9-fca7-53268d420282-8d4201cb"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group", "margin-top_none")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button_label")}
                tag="div"
              >
                {"Book"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav_mobile-menu-button")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "icon")} tag="div">
            <_Builtin.DOM
              tag="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <_Builtin.DOM
                tag="g"
                class="nc-icon-wrapper"
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="1.5"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <_Builtin.DOM
                  tag="line"
                  x1="1"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="currentColor"
                />
                <_Builtin.DOM tag="line" x1="1" y1="5" x2="23" y2="5" />
                <_Builtin.DOM tag="line" x1="1" y1="19" x2="23" y2="19" />
              </_Builtin.DOM>
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.NavbarWrapper>
      <_Builtin.NavbarWrapper
        className={_utils.cx(
          _styles,
          "nav_container",
          "hide-desktop",
          "margin-top_large",
          "margin-bottom_large"
        )}
        tag="div"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: true,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_left")}
          id={_utils.cx(
            _styles,
            "w-node-_7640196e-5571-fdd9-fca7-53268d42028f-8d4201cb"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_logo")}
            id={_utils.cx(
              _styles,
              "w-node-_7640196e-5571-fdd9-fca7-53268d420290-8d4201cb"
            )}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_logo-icon")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "code-embed")}
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20preserveAspectRatio%3D%22xMidYMid%22%20version%3D%221.1%22%20viewBox%3D%220%20-.05678%20791.25%20296.094%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M261.95%20134.07c0%2037.1-.02%2074.21.02%20111.31%20.01%209.49.11%2019%202.12%2028.35%201.3%206.05%204.26%2010.99%2010.4%2013.17%202.13.76%202.11%202.11%202.02%203.77%20-.12%202.36-1.93%201.51-3.09%201.51%20-17.1.05-34.21.04-51.31%200%20-1.09%200-2.79.63-2.85-1.37%20-.04-1.24-.7-2.85%201.15-3.55%209.22-3.45%2010.95-11.51%2012.21-19.86%201.12-7.44%201.11-14.94%201.12-22.43%20.03-62.71.04-125.43-.01-188.14%200-7.35-.07-14.73-1.83-21.97%20-1.42-5.84-4.46-10.23-10.08-12.65%20-1.53-.66-2.76-1.31-2.68-3.46%20.08-2.09%201.49-2.33%202.82-2.92%2011.05-4.91%2022.09-9.85%2033.16-14.71%205.29-2.32%206.85-1.19%206.85%204.77%200%2042.73%200%2085.45%200%20128.18Z%22%2F%3E%3Cpath%20d%3D%22M474.6%20265.7c4.91-12.77%209.5-24.63%2014.04-36.49%209.4-24.58%2018.81-49.17%2028.16-73.77%202.8-7.35%205.46-14.75%206.11-22.7%20.75-9.15-1.09-12.58-9.34-16.43%20-2.02-.94-1.3-2.44-1.35-3.8%20-.07-1.89%201.48-1.3%202.45-1.3%2010.86-.04%2021.72-.04%2032.59%200%20.85%200%202.3-.56%202.26%201.08%20-.04%201.46.92%203.35-1.35%204.16%20-7.77%202.77-12%209.06-15.58%2015.91%20-6.95%2013.31-11.57%2027.6-17%2041.54%20-15.02%2038.59-29.88%2077.25-44.74%20115.9%20-.69%201.79-1.54%202.58-3.51%202.46%20-2.74-.17-5.53-.33-8.23.03%20-3.68.48-5.07-1.2-6.42-4.42%20-19.77-47.44-39.69-94.82-59.62-142.19%20-2.96-7.02-6.34-13.85-10.76-20.1%20-2.55-3.61-5.4-6.94-9.48-8.83%20-2.27-1.05-1.75-2.86-1.57-4.45%20.22-1.92%201.97-1.07%203.03-1.07%2015.36-.06%2030.71-.06%2046.07%200%201.05%200%202.79-.82%202.93%201.22%20.12%201.63.52%203.25-1.85%204.26%20-4.34%201.84-5.47%204.27-4.71%208.98%201.04%206.46%203.67%2012.43%206.19%2018.4%2016.71%2039.53%2033.48%2079.03%2050.24%20118.54%20.33.77.71%201.51%201.45%203.08Z%22%2F%3E%3Cpath%20d%3D%22M345.77%20186.4c0%2022.36-.04%2044.72.03%2067.08%20.02%206.62.6%2013.21%202.03%2019.71%201.4%206.35%204.33%2011.47%2010.69%2013.84%202.02.76%201.68%202.15%201.69%203.6%200%202.04-1.54%201.57-2.69%201.57%20-17.35.02-34.7.02-52.06%200%20-1.04%200-2.5.41-2.4-1.41%20.07-1.24-.75-2.85%201.14-3.53%209.46-3.43%2011.17-11.6%2012.29-20.13%20.93-7.08.97-14.2.96-21.32%20-.04-29.98-.13-59.96-.22-89.94%20-.01-4.01-.6-7.96-1.38-11.89%20-1.16-5.88-4.17-10.33-9.81-12.81%20-1.52-.67-3.13-1.12-3.12-3.56%20.01-2.54%201.79-2.69%203.3-3.34%2011.31-4.93%2022.63-9.85%2033.96-14.75%203.71-1.6%205.53-.38%205.54%203.78%20.02%2020.36.01%2040.73.01%2061.09%200%204%200%208%200%2011.99h.04Z%22%2F%3E%3Cpath%20d%3D%22M309.5%2065.94c-.1-11.07%208.76-19.95%2019.94-19.96%2011.39-.02%2019.79%208.58%2019.88%2020.34%20.08%2010.83-8.71%2019.66-19.71%2019.79%20-11.29.13-20-8.6-20.1-20.17Z%22%2F%3E%3Cpath%20d%3D%22M782.32%2047.46c0-8.61.13-17.23-.07-25.84%20-.07-2.83.71-3.88%203.51-3.44%201.1.17%202.25.1%203.36.01%201.66-.13%202.13.63%202.13%202.2%20-.04%2017.97-.04%2035.95%200%2053.92%200%201.83-.66%202.26-2.4%202.33%20-6.53.27-6.53.34-6.53-6.35%200-7.61%200-15.23%200-22.84Z%22%2F%3E%3Cpath%20d%3D%22M189.12%20188.72c-2.94-26.13-13.92-47.74-35.99-62.86%20-16.29-11.16-34.48-16.75-54.17-17.06%20-37.75-.61-66.8%2015.2-86.34%2047.5C.34%20176.6-2.12%20198.97%201.57%20222.13c3.33%2020.9%2012.65%2038.58%2029.22%2051.97%2031.63%2025.55%2076.71%2029.15%20111.99%208.55%2031.33-18.29%2046.39-46.29%2047.19-81.46%20-.32-4.74-.44-8.62-.87-12.46Zm-34.75%2070.19c-12.64%2026.35-40.1%2033.62-63.44%2027.33%20-19.72-5.31-33.3-18.64-43.54-35.56%20-15.11-25-21.81-52.11-18.5-81.33%201.31-11.53%204.9-22.41%2011.52-32.1%2015.04-22.02%2042.71-25.89%2062.72-18.32%2016.45%206.22%2028.12%2018.26%2037.42%2032.68%2013.92%2021.58%2021.1%2045.32%2021.65%2071.04%20-.14%2012.63-2.31%2024.79-7.83%2036.28Z%22%2F%3E%3Cpath%20d%3D%22M731.14%20243.45c-1.92-2.44-2.93-.84-4.25.59%20-17.82%2019.43-39.5%2030.18-66.27%2029.03%20-21.38-.92-40.06-8.28-54.2-24.82%20-17.85-20.88-21.5-45.73-19.12-72.12%20.27-2.98%201.39-3.55%204.13-3.54%2022.35.11%2044.7.06%2067.05.06%2022.47%200%2044.95-.02%2067.42.04%202.28%200%203.68-.02%203.39-3.09%20-1.57-16.59-7.91-30.87-20.22-42.22%20-14.21-13.1-31.45-18.46-50.41-18.65%20-34.33-.35-61.82%2013.34-81.28%2041.71%20-15.45%2022.52-19.39%2047.8-15.06%2074.48%208.35%2051.44%2057.41%2077.89%20100.45%2069.39%2029.89-5.9%2050.75-24.83%2068.58-48.04%20.88-1.14.61-1.77-.22-2.83Zm-142-77.77c3.68-16.24%2010.26-30.92%2024.2-40.91%2020.69-14.82%2048.54-12.65%2067.04%204.85%2010.18%209.63%2016.32%2021.53%2019.38%2035.17%20.63%202.79.02%203.39-2.7%203.38%20-17.46-.09-34.93-.05-52.39-.05s-34.93%200-52.39-.01c-1.61%200-3.84.64-3.14-2.43Z%22%2F%3E%3Cpath%20d%3D%22M772%2071.07c-5.69-15.85-11.6-31.62-17.02-47.56%20-1.38-4.06-3.02-6.24-7.45-5.31%20-.36.08-.76.07-1.12%200%20-2.85-.54-4.15.77-5.07%203.43%20-3.79%2010.96-7.8%2021.85-11.72%2032.77%20-2.6%207.25-5.19%2014.51-7.94%2022.19%202.27%200%204.13-.19%205.94.05%202.76.37%203.99-.76%204.69-3.37%20.9-3.37%202.31-6.59%203.33-9.93%20.53-1.73%201.44-2.35%203.23-2.29%203.99.12%207.99.04%2011.98.04q8.51%200%2011.15%208.01%202.64%208.01%2011.41%207.31c.24-1.96-.8-3.61-1.42-5.33Zm-32.88-17.69c2.81-8.13%205.53-15.98%208.25-23.83%20.27-.07.53-.13.8-.2%202.76%207.93%205.53%2015.85%208.37%2024.03h-17.42Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "nav_right",
            "margin-top_small",
            "margin-bottom_small"
          )}
          id={_utils.cx(
            _styles,
            "w-node-_7640196e-5571-fdd9-fca7-53268d420293-8d4201cb"
          )}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav_menu")}
            id={_utils.cx(
              _styles,
              "w-node-_7640196e-5571-fdd9-fca7-53268d420294-8d4201cb"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav_menu-list")}
              tag="ul"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown-menu")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      {"curated Journeys"}
                    </_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "mega-nav_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "mega-nav_dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "grid_3-col",
                          "tablet-1-col",
                          "gap-medium",
                          "margin-bottom_none"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "w-node-_7640196e-5571-fdd9-fca7-53268d42029f-8d4201cb"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e6d-ad6d2e56"
                          )}
                        >
                          <_Builtin.Grid
                            className={_utils.cx(
                              _styles,
                              "grid_3-col",
                              "tablet-1-col",
                              "gap-small"
                            )}
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Get started"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202a5-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202aa-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e78-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Plan your visit"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Personalized tips for your stay."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202b0-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202b5-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e83-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Find activities"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"See what"}
                                        {"’"}
                                        {"s nearby."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202bd-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202c2-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e8e-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Eat "}
                                          {"&"}
                                          {" drink"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Local dining picks."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_7640196e-5571-fdd9-fca7-53268d4202ca-8d4201cb"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Your info"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202ce-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202d3-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e9d-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Add confirmation"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Start with your booking number."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202d9-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202de-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ea8-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Contact details"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Add your email and phone."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202e4-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202e9-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2eb3-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Preferences"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Share what you enjoy."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_7640196e-5571-fdd9-fca7-53268d4202ef-8d4201cb"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Explore more"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d4202f3-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d4202f8-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ec2-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Events"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"What"}
                                        {"’"}
                                        {"s on during your stay."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d420300-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d420305-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ecd-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Getting around"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Best ways to travel."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_7640196e-5571-fdd9-fca7-53268d42030b-8d4201cb"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon_medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_7640196e-5571-fdd9-fca7-53268d420310-8d4201cb"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ed8-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Wellness"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Spa and fitness options."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "w-node-_7640196e-5571-fdd9-fca7-53268d420316-8d4201cb"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ede-ad6d2e56"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "card-link",
                              "is-inverse",
                              "flex-child_expand"
                            )}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "card_body")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "heading_h3")}
                                tag="div"
                              >
                                {"Start your journey now"}
                              </_Builtin.Block>
                              <_Builtin.Paragraph
                                className={_utils.cx(
                                  _styles,
                                  "paragraph_small",
                                  "text-color_inverse-secondary"
                                )}
                              >
                                {"Enter your info for custom tips."}
                              </_Builtin.Paragraph>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin_top-auto"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "button-group")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-button",
                                      "is-secondary"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Start"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "button_icon"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown-menu")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Support"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "nav-menu_dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "flex_vertical",
                          "margin-bottom_none"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(_styles, "margin-bottom_none")}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav_dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button_label")}
                              tag="div"
                            >
                              {"Help"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(_styles, "margin-bottom_none")}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav_dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button_label")}
                              tag="div"
                            >
                              {"Contact"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group", "margin-top_none")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button_label")}
                tag="div"
              >
                {"Get started"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav_mobile-menu-button")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "icon")} tag="div">
            <_Builtin.DOM
              tag="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <_Builtin.DOM
                tag="g"
                class="nc-icon-wrapper"
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="1.5"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <_Builtin.DOM
                  tag="line"
                  x1="1"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="currentColor"
                />
                <_Builtin.DOM tag="line" x1="1" y1="5" x2="23" y2="5" />
                <_Builtin.DOM tag="line" x1="1" y1="19" x2="23" y2="19" />
              </_Builtin.DOM>
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
