// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { BuildConfigArgs, BuildConfigState } from "./buildConfig";
export type BuildConfig = import("./buildConfig").BuildConfig;
export const BuildConfig: typeof import("./buildConfig").BuildConfig = null as any;
utilities.lazyLoad(exports, ["BuildConfig"], () => require("./buildConfig"));

export { DeploymentConfigArgs, DeploymentConfigState } from "./deploymentConfig";
export type DeploymentConfig = import("./deploymentConfig").DeploymentConfig;
export const DeploymentConfig: typeof import("./deploymentConfig").DeploymentConfig = null as any;
utilities.lazyLoad(exports, ["DeploymentConfig"], () => require("./deploymentConfig"));

export { ImageStreamArgs, ImageStreamState } from "./imageStream";
export type ImageStream = import("./imageStream").ImageStream;
export const ImageStream: typeof import("./imageStream").ImageStream = null as any;
utilities.lazyLoad(exports, ["ImageStream"], () => require("./imageStream"));

export { NetnamespaceArgs, NetnamespaceState } from "./netnamespace";
export type Netnamespace = import("./netnamespace").Netnamespace;
export const Netnamespace: typeof import("./netnamespace").Netnamespace = null as any;
utilities.lazyLoad(exports, ["Netnamespace"], () => require("./netnamespace"));

export { ProjectArgs, ProjectState } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { ProjectRequestArgs, ProjectRequestState } from "./projectRequest";
export type ProjectRequest = import("./projectRequest").ProjectRequest;
export const ProjectRequest: typeof import("./projectRequest").ProjectRequest = null as any;
utilities.lazyLoad(exports, ["ProjectRequest"], () => require("./projectRequest"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RouteArgs, RouteState } from "./route";
export type Route = import("./route").Route;
export const Route: typeof import("./route").Route = null as any;
utilities.lazyLoad(exports, ["Route"], () => require("./route"));

export { SecretArgs, SecretState } from "./secret";
export type Secret = import("./secret").Secret;
export const Secret: typeof import("./secret").Secret = null as any;
utilities.lazyLoad(exports, ["Secret"], () => require("./secret"));


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
            case "openshift:index/buildConfig:BuildConfig":
                return new BuildConfig(name, <any>undefined, { urn })
            case "openshift:index/deploymentConfig:DeploymentConfig":
                return new DeploymentConfig(name, <any>undefined, { urn })
            case "openshift:index/imageStream:ImageStream":
                return new ImageStream(name, <any>undefined, { urn })
            case "openshift:index/netnamespace:Netnamespace":
                return new Netnamespace(name, <any>undefined, { urn })
            case "openshift:index/project:Project":
                return new Project(name, <any>undefined, { urn })
            case "openshift:index/projectRequest:ProjectRequest":
                return new ProjectRequest(name, <any>undefined, { urn })
            case "openshift:index/route:Route":
                return new Route(name, <any>undefined, { urn })
            case "openshift:index/secret:Secret":
                return new Secret(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("openshift", "index/buildConfig", _module)
pulumi.runtime.registerResourceModule("openshift", "index/deploymentConfig", _module)
pulumi.runtime.registerResourceModule("openshift", "index/imageStream", _module)
pulumi.runtime.registerResourceModule("openshift", "index/netnamespace", _module)
pulumi.runtime.registerResourceModule("openshift", "index/project", _module)
pulumi.runtime.registerResourceModule("openshift", "index/projectRequest", _module)
pulumi.runtime.registerResourceModule("openshift", "index/route", _module)
pulumi.runtime.registerResourceModule("openshift", "index/secret", _module)
pulumi.runtime.registerResourcePackage("openshift", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:openshift") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
