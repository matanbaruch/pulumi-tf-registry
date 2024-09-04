// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AwsAccountArgs, AwsAccountState } from "./awsAccount";
export type AwsAccount = import("./awsAccount").AwsAccount;
export const AwsAccount: typeof import("./awsAccount").AwsAccount = null as any;
utilities.lazyLoad(exports, ["AwsAccount"], () => require("./awsAccount"));

export { AwsOrganizationArgs, AwsOrganizationState } from "./awsOrganization";
export type AwsOrganization = import("./awsOrganization").AwsOrganization;
export const AwsOrganization: typeof import("./awsOrganization").AwsOrganization = null as any;
utilities.lazyLoad(exports, ["AwsOrganization"], () => require("./awsOrganization"));

export { K8sClusterOnboardingCredentialArgs, K8sClusterOnboardingCredentialState } from "./k8sClusterOnboardingCredential";
export type K8sClusterOnboardingCredential = import("./k8sClusterOnboardingCredential").K8sClusterOnboardingCredential;
export const K8sClusterOnboardingCredential: typeof import("./k8sClusterOnboardingCredential").K8sClusterOnboardingCredential = null as any;
utilities.lazyLoad(exports, ["K8sClusterOnboardingCredential"], () => require("./k8sClusterOnboardingCredential"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as config from "./config";

export {
    config,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "illumio-cloudsecure:index/awsAccount:AwsAccount":
                return new AwsAccount(name, <any>undefined, { urn })
            case "illumio-cloudsecure:index/awsOrganization:AwsOrganization":
                return new AwsOrganization(name, <any>undefined, { urn })
            case "illumio-cloudsecure:index/k8sClusterOnboardingCredential:K8sClusterOnboardingCredential":
                return new K8sClusterOnboardingCredential(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("illumio-cloudsecure", "index/awsAccount", _module)
pulumi.runtime.registerResourceModule("illumio-cloudsecure", "index/awsOrganization", _module)
pulumi.runtime.registerResourceModule("illumio-cloudsecure", "index/k8sClusterOnboardingCredential", _module)
pulumi.runtime.registerResourcePackage("illumio-cloudsecure", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:illumio-cloudsecure") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
