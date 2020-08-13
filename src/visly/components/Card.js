// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./Card.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  RootPrimitive,
  ImagePrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "./_internal_primitives";
import Button, { ButtonContext } from "./Button";

const styles = [
  {
    type: "default",
    layers: {
      BiMgm1USvB: {
        none: {
          text: "Card Title",
        },
      },
      GuowmgQcJm: {
        none: {
          text: "Card Body Text",
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
      CySopNWKYt: {
        none: {
          disabled: false,
          label: "Click Me",
          icon: require("../assets/335f3298-73c2-4b49-87f0-bdd5380a4035@1x.svg"),
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "darkMode",
    layers: {
      CySopNWKYt: {
        none: {
          label: "Nice!",
          icon: require("../assets/fd204fbe-52a7-4ca8-becd-8a04ae285d64@1x.svg"),
        },
      },
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "darkMode",
  },
];

export const CardContext = createContext(null);

function Card(_props) {
  const defaults = useContext(CardContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="X9Pufwxu4J"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "X9Pufwxu4J",
        scope: "9cHcwwtQjg",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ImagePrimitive
            className={"__visly_reset __visly_scope_9cHcwwtQjg_KmvP7cdUXK"}
            key={"KmvP7cdUXK"}
            src={
              exists(props.imageSrc)
                ? props.imageSrc
                : getStyle("KmvP7cdUXK", "src")
            }
            alt={getStyle("KmvP7cdUXK", "alternateText")}
          />
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_9cHcwwtQjg_NuaAomSnS7"}
            key={"NuaAomSnS7"}
            addSpacing={true}
          >
            <TextPrimitive
              className={"__visly_reset __visly_scope_9cHcwwtQjg_BiMgm1USvB"}
              key={"BiMgm1USvB"}
              text={
                exists(props.title)
                  ? props.title
                  : getStyle("BiMgm1USvB", "text")
              }
            />
            <TextPrimitive
              className={"__visly_reset __visly_scope_9cHcwwtQjg_GuowmgQcJm"}
              key={"GuowmgQcJm"}
              text={
                exists(props.text) ? props.text : getStyle("GuowmgQcJm", "text")
              }
            />
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_9cHcwwtQjg_KKWvpfX1CP"}
            key={"KKWvpfX1CP"}
            addSpacing={false}
          >
            {props.MyButton === undefined ? (
              <Button
                key={"CySopNWKYt"}
                {...getCompositeDefaultProps("CySopNWKYt")}
                className="__visly_reset __visly_scope_9cHcwwtQjg_CySopNWKYt"
              />
            ) : (
              <ButtonContext.Provider
                key="CySopNWKYt-provider"
                value={{
                  key: "CySopNWKYt",
                  className:
                    "__visly_reset __visly_scope_9cHcwwtQjg_CySopNWKYt",
                  ...getCompositeDefaultProps("CySopNWKYt"),
                }}
              >
                {props.MyButton}
              </ButtonContext.Provider>
            )}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

Card.MyButton = Button;
Card.__variants = [
  {
    name: "darkMode",
    type: "variant",
  },
];

export default Card;
