// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { FeatureArgs, FeatureState } from "./feature";
export type Feature = import("./feature").Feature;
export const Feature: typeof import("./feature").Feature = null as any;
utilities.lazyLoad(exports, ["Feature"], () => require("./feature"));

export { FeatureStateArgs, FeatureStateState } from "./featureState";
export type FeatureState = import("./featureState").FeatureState;
export const FeatureState: typeof import("./featureState").FeatureState = null as any;
utilities.lazyLoad(exports, ["FeatureState"], () => require("./featureState"));

export { MvFeatureOptionArgs, MvFeatureOptionState } from "./mvFeatureOption";
export type MvFeatureOption = import("./mvFeatureOption").MvFeatureOption;
export const MvFeatureOption: typeof import("./mvFeatureOption").MvFeatureOption = null as any;
utilities.lazyLoad(exports, ["MvFeatureOption"], () => require("./mvFeatureOption"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { SegmentArgs, SegmentState } from "./segment";
export type Segment = import("./segment").Segment;
export const Segment: typeof import("./segment").Segment = null as any;
utilities.lazyLoad(exports, ["Segment"], () => require("./segment"));

export { TagArgs, TagState } from "./tag";
export type Tag = import("./tag").Tag;
export const Tag: typeof import("./tag").Tag = null as any;
utilities.lazyLoad(exports, ["Tag"], () => require("./tag"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "flagsmith:index/feature:Feature":
                return new Feature(name, <any>undefined, { urn })
            case "flagsmith:index/featureState:FeatureState":
                return new FeatureState(name, <any>undefined, { urn })
            case "flagsmith:index/mvFeatureOption:MvFeatureOption":
                return new MvFeatureOption(name, <any>undefined, { urn })
            case "flagsmith:index/segment:Segment":
                return new Segment(name, <any>undefined, { urn })
            case "flagsmith:index/tag:Tag":
                return new Tag(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("flagsmith", "index/feature", _module)
pulumi.runtime.registerResourceModule("flagsmith", "index/featureState", _module)
pulumi.runtime.registerResourceModule("flagsmith", "index/mvFeatureOption", _module)
pulumi.runtime.registerResourceModule("flagsmith", "index/segment", _module)
pulumi.runtime.registerResourceModule("flagsmith", "index/tag", _module)
pulumi.runtime.registerResourcePackage("flagsmith", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:flagsmith") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
