// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./List.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "./_internal_primitives";
import Card, { CardContext } from "./Card";
import Toggle, { ToggleContext } from "./Toggle";

const styles = [
  {
    type: "default",
    layers: {
      WSn6K8vLUE: {
        none: {
          text: "Dark Mode",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "darkMode",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      VhghAbqnLM: {
        none: {
          titleText: "First Card",
        },
      },
      "9kDgKj2Ggv": {},
    },
  },
  {
    type: "boolean",
    propName: "darkMode",
    layers: {
      VhghAbqnLM: {
        none: {
          darkMode: true,
        },
      },
      "9kDgKj2Ggv": {},
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "darkMode",
  },
];

export const ListContext = createContext(null);

function List(_props) {
  const defaults = useContext(ListContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="SGdmp8J8EY"
      addSpacing={true}
      internal={{
        styles: styles,
        layerId: "SGdmp8J8EY",
        scope: "68N4Nh3ges",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_68N4Nh3ges_QaVxuzMNfK"}
            key={"QaVxuzMNfK"}
            addSpacing={false}
          >
            {[
              <TextPrimitive
                className={"__visly_reset __visly_scope_68N4Nh3ges_WSn6K8vLUE"}
                key={"WSn6K8vLUE"}
                text={getStyle("WSn6K8vLUE", "text")}
              />,
              props.Toggle === undefined ? (
                <Toggle
                  key={"9kDgKj2Ggv"}
                  {...getCompositeDefaultProps("9kDgKj2Ggv")}
                  className="__visly_reset __visly_scope_68N4Nh3ges_9kDgKj2Ggv"
                />
              ) : (
                <ToggleContext.Provider
                  key="9kDgKj2Ggv-provider"
                  value={{
                    key: "9kDgKj2Ggv",
                    className:
                      "__visly_reset __visly_scope_68N4Nh3ges_9kDgKj2Ggv",
                    ...getCompositeDefaultProps("9kDgKj2Ggv"),
                  }}
                >
                  {props.Toggle}
                </ToggleContext.Provider>
              ),
            ]}
          </ContainerPrimitive>
          <SpacerPrimitive
            className={"__visly_reset __visly_scope_68N4Nh3ges_BgWSeTq7SU"}
            key={"BgWSeTq7SU"}
          />
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_68N4Nh3ges_Cmj8TLUjUt"}
            key={"Cmj8TLUjUt"}
            addSpacing={false}
          >
            {props.Card1 === undefined ? (
              <Card
                key={"VhghAbqnLM"}
                {...getCompositeDefaultProps("VhghAbqnLM")}
                className="__visly_reset __visly_scope_68N4Nh3ges_VhghAbqnLM"
              />
            ) : (
              <CardContext.Provider
                key="VhghAbqnLM-provider"
                value={{
                  key: "VhghAbqnLM",
                  className:
                    "__visly_reset __visly_scope_68N4Nh3ges_VhghAbqnLM",
                  ...getCompositeDefaultProps("VhghAbqnLM"),
                }}
              >
                {props.Card1}
              </CardContext.Provider>
            )}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

List.Card1 = Card;
List.Toggle = Toggle;
List.__variants = [
  {
    name: "darkMode",
    type: "variant",
  },
];

export default List;