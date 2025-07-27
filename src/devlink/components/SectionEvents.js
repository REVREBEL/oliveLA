"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { OliveButton } from "./OliveButton";
import * as _utils from "./utils";
import _styles from "./SectionEvents.module.css";

export function SectionEvents({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "background_primary")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "header")} tag="div">
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "margin-bottom_xsmall",
              "section_be-seen",
              "eyebrow"
            )}
          >
            {"This week at a glance"}
          </_Builtin.Paragraph>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading_h2", "margin-top_none")}
            tag="h2"
          >
            {"See "}
            {"&"}
            {" be seen: what’s on"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "subheading")}>
            {
              "From rooftop rituals to gallery strolls—here’s your insider pass to West Hollywood’s most creative happenings."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "tabs")}
          data-current="Tab 3"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
          current="Tab 3"
          easing="ease"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "tabs_nav")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(
                _styles,
                "tab_menu-button",
                "width_100percent_mobile-l",
                "text-align_center"
              )}
              data-w-tab="Tab 1"
            >
              <_Builtin.Block tag="div">{"Fri, Feb 9"}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(
                _styles,
                "tab_menu-button",
                "width_100percent_mobile-l",
                "text-align_center"
              )}
              data-w-tab="Tab 2"
            >
              <_Builtin.Block tag="div">{"Sat, Feb 10"}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(
                _styles,
                "tab_menu-button",
                "width_100percent_mobile-l",
                "text-align_center"
              )}
              data-w-tab="Tab 3"
            >
              <_Builtin.Block tag="div">{"Sun, Feb 11"}</_Builtin.Block>
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
          <_Builtin.TabsContent
            className={_utils.cx(_styles, "tabs_content")}
            tag="div"
          >
            <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
              <_Builtin.Block
                className={_utils.cx(_styles, "flex_vertical", "gap-small")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "card",
                    "on-inverse",
                    "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d898-5ce3d87f"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-afff7261-2dd7-17b3-f5d6-e153411bad44-835a1ec4"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "grid_2-col", "tablet-1-col")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_body")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d89a-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph_large")}
                        tag="div"
                      >
                        {"8:00am – 9:00am"}
                      </_Builtin.Block>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading_h3")}
                        tag="h4"
                      >
                        {"Sunrise yoga "}
                        {"&"}
                        {" skyline views"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin_bottom-auto",
                          "flex_vertical",
                          "gap-xsmall"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Host"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {"Alex Rivera"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"About"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {
                              "Flow into the day with energizing yoga above the city. Mats on us, good vibes required. All levels welcome."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-group")}
                        tag="div"
                      >
                        <OliveButton
                          buttonStyleButtonCta="Details"
                          buttonStyleButtonColor="Secondary"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "ratio_1x1-2",
                        "position_relative",
                        "flex_horizontal",
                        "is-y-top"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image_cover")}
                        loading="lazy"
                        data-aisg-image-id="337fec70-a088-48f7-b84d-7f658fc43b93"
                        alt="image of a creative film festival event for an entertainment company"
                        src="https://cdn.prod.website-files.com/6875baf1bf891e3aab0e5871/6875bd0ddf5eb5e758a1cbb0_a9f4cb52-4b00-4f55-a93f-cd884e27cb69.avif"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "overlay_opacity-middle",
                          "is-inverse"
                        )}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag_events")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "is-y-center",
                            "gap-xxsmall"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "icon_small-1x1")}
                            loading="lazy"
                            data-aisg-image-id="f5156714-66d0-4674-8f82-9af54413a23e"
                            alt="charitable dinner gala"
                            src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b1e_818de5a2-9b1f-44e6-adf8-b7e955598793.avif"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "display_inline-block"
                            )}
                            tag="div"
                          >
                            {"Rooftop Lounge"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "card", "on-inverse")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d8ba-5ce3d87f"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "grid_2-col", "tablet-1-col")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_body")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d8bc-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph_large")}
                        tag="div"
                      >
                        {"10:00am – 11:00am"}
                      </_Builtin.Block>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading_h3")}
                        tag="h4"
                      >
                        {"Creative coffee social"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin_bottom-auto",
                          "flex_vertical",
                          "gap-xsmall"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Host"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {"Jordan Kim"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"About"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {
                              "Sip, chat, and spark ideas with fellow guests and locals. Fresh brews, pastries, and plenty of inspiration."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-group")}
                        tag="div"
                      >
                        <OliveButton
                          buttonStyleButtonCta="Details"
                          buttonStyleButtonColor="Secondary"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "ratio_1x1-2",
                        "position_relative",
                        "flex_horizontal",
                        "is-y-top"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image_cover")}
                        loading="lazy"
                        data-aisg-image-id="e2b1c6f2-af6e-444b-a3d3-55f91888a7cd"
                        alt="image of community gatherings at the store (for a department store)"
                        src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b26_dab440ad-7ac2-4d77-bd12-bb378a66b035.avif"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "overlay_opacity-middle",
                          "is-inverse"
                        )}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag_events")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "is-y-center",
                            "gap-xxsmall"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "icon_small-1x1")}
                            loading="lazy"
                            data-aisg-image-id="5426e73c-ecf2-4683-ad9e-e4cf02fc3f40"
                            alt="image of networking event (for a hr tech)"
                            src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b2e_420cf1e1-77d4-4689-be27-98e1724646b2.avif"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "display_inline-block"
                            )}
                            tag="div"
                          >
                            {"Lobby Café"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
              <_Builtin.Block
                className={_utils.cx(_styles, "flex_vertical", "gap-small")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "card",
                    "on-inverse",
                    "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d8dc-5ce3d87f"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_558a1488-2967-97f6-a697-ea7f04b4679a-835a1ec4"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "grid_2-col", "tablet-1-col")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_body")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d8de-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph_large")}
                        tag="div"
                      >
                        {"6:00pm – 7:00pm"}
                      </_Builtin.Block>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading_h3")}
                        tag="h4"
                      >
                        {"Golden hour cocktails"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin_bottom-auto",
                          "flex_vertical",
                          "gap-xsmall"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Host"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {"Taylor Fox"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"About"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {
                              "Raise a glass as the sun dips. Signature drinks, live DJ, and unbeatable views—no RSVP needed."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-group")}
                        tag="div"
                      >
                        <OliveButton
                          buttonStyleButtonCta="Details"
                          buttonStyleButtonColor="Secondary"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "ratio_1x1-2",
                        "position_relative",
                        "flex_horizontal",
                        "is-y-top"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image_cover")}
                        loading="lazy"
                        data-aisg-image-id="ca63d396-f115-46d7-b74c-ada7f5f2cbe5"
                        alt="image of kitchen during service (for a fine dining restaurant)"
                        src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b24_c53fc9f6-cdd2-4b61-8741-6e82e077bba2.avif"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "overlay_opacity-middle",
                          "is-inverse"
                        )}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag_events")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "is-y-center",
                            "gap-xxsmall"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "icon_small-1x1")}
                            loading="lazy"
                            data-aisg-image-id="1bff90d9-3889-4fb6-af63-b944e81fffeb"
                            alt="image of audience enjoying entertainment"
                            src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b2c_0300d760-660d-4504-964a-cc239b2fef6e.avif"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "display_inline-block"
                            )}
                            tag="div"
                          >
                            {"Rooftop Bar"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "card", "on-inverse")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d8fc-5ce3d87f"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "grid_2-col", "tablet-1-col")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_body")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d8fe-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph_large")}
                        tag="div"
                      >
                        {"8:00pm – 9:30pm"}
                      </_Builtin.Block>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading_h3")}
                        tag="h4"
                      >
                        {"Indie film night"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin_bottom-auto",
                          "flex_vertical",
                          "gap-xsmall"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Host"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {"Morgan Lane"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"About"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph>
                            {
                              "Catch a curated lineup of local short films. Popcorn on us, cozy seating, and a post-show Q"
                            }
                            {"&"}
                            {"A."}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-group")}
                        tag="div"
                      >
                        <OliveButton
                          buttonStyleButtonCta="Details"
                          buttonStyleButtonColor="Secondary"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "ratio_1x1-2",
                        "position_relative",
                        "flex_horizontal",
                        "is-y-top"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image_cover")}
                        loading="lazy"
                        data-aisg-image-id="480608bf-6763-4dd4-bf34-bef7f3c29a42"
                        alt="image of art event highlights (for a art gallery)"
                        src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b20_2c7bae50-1676-4657-a296-50286cac8327.avif"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "overlay_opacity-middle",
                          "is-inverse"
                        )}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag_events")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "is-y-center",
                            "gap-xxsmall"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "icon_small-1x1")}
                            loading="lazy"
                            data-aisg-image-id="17437dc9-18bf-46a8-9bc8-877d1b70bf5d"
                            alt="yoga class with instructor"
                            src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727546160075940c9b1c_4ae4100a-abe1-405c-b848-62f6ad677b1a.avif"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "display_inline-block"
                            )}
                            tag="div"
                          >
                            {"Screening Room"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
              <_Builtin.Block
                className={_utils.cx(_styles, "flex_vertical", "gap-small")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "card",
                    "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d920-5ce3d87f"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-a03f4204-771e-bf14-2e76-cc0e50043139-835a1ec4"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "grid_2-col", "tablet-1-col")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_body")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d922-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "label_large")}
                        tag="div"
                      >
                        {"11:00am – 12:00pm"}
                      </_Builtin.Block>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading_h3")}
                        tag="h3"
                      >
                        {"Art walk "}
                        {"&"}
                        {" gallery tour"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin_bottom-auto",
                          "flex_vertical",
                          "gap-xsmall"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Guide"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "paragraph")}
                          >
                            {"Casey Drew"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong
                              className={_utils.cx(_styles, "text-about")}
                            >
                              {"About"}
                            </_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "paragraph")}
                          >
                            {
                              "Stroll through West Hollywood’s boldest galleries with a local guide. Discover, mingle, and get inspired."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-group")}
                        tag="div"
                      >
                        <OliveButton
                          buttonStyleButtonCta="Details"
                          buttonStyleButtonColor="Secondary"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "ratio_1x1-2",
                        "position_relative",
                        "flex_horizontal",
                        "is-y-top"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image_cover")}
                        width="588"
                        height="588"
                        loading="lazy"
                        data-aisg-image-id="0964a321-6f55-4355-a1d7-c60182cfb6c0"
                        alt="image of community engagement (for a food truck)"
                        src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b2a_6297cee8-dad3-44a4-8969-09fb8e90cbd8.avif"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "overlay_opacity-low")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag_events")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "is-y-center",
                            "gap-xxsmall"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "icon_small-1x1")}
                            width="20"
                            height="20"
                            loading="lazy"
                            data-aisg-image-id="ba7c4049-0434-45d6-b737-2f8b1f8b0e2b"
                            alt="successful event 4"
                            src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b30_21ad7dd9-891f-47b7-b7bd-46fd298d63b2.avif"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "display_block")}
                            tag="div"
                          >
                            {"Meet in Lobby"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "card")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d942-5ce3d87f"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "grid_2-col", "tablet-1-col")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_body")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d944-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "label_large")}
                        tag="div"
                      >
                        {"2:00pm – 3:00pm"}
                      </_Builtin.Block>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading_h3")}
                        tag="h3"
                      >
                        {"Poolside sound bath"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin_bottom-auto",
                          "flex_vertical",
                          "gap-xsmall"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Host"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "paragraph")}
                          >
                            {"Riley Moss"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label_small")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"About"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "paragraph")}
                          >
                            {
                              "Unwind with a meditative sound journey by the pool. Towels, water, and zen provided."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-group")}
                        tag="div"
                      >
                        <OliveButton
                          buttonStyleButtonCta="Details"
                          buttonStyleButtonColor="Secondary"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "ratio_1x1-2",
                        "position_relative",
                        "flex_horizontal",
                        "is-y-top"
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-_9d7d6bcd-4894-a0fa-e8eb-f2c45ce3d95a-5ce3d87f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image_cover")}
                        width="588"
                        height="588"
                        loading="lazy"
                        data-aisg-image-id="7528841f-a112-4a45-a2cd-14c4dd34651f"
                        alt="image of band on stage"
                        src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b28_3ad66f13-7fff-4544-ba76-2ed21ec6c08f.avif"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "overlay_opacity-low")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag_events")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "is-y-center",
                            "gap-xxsmall"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "icon_small-1x1")}
                            width="20"
                            height="20"
                            loading="lazy"
                            data-aisg-image-id="7f2e9252-5dfb-46d9-b117-26f68338dcf1"
                            alt="image of concert crowd"
                            src="https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878727646160075940c9b22_8bc7a26c-0ba8-4aa7-8b0f-f9fb34bca11f.avif"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "display_inline-block"
                            )}
                            tag="div"
                          >
                            {"Rooftop Pool"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
        </_Builtin.TabsWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
