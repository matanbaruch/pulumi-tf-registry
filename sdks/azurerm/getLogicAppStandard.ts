// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLogicAppStandard(args: GetLogicAppStandardArgs, opts?: pulumi.InvokeOptions): Promise<GetLogicAppStandardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getLogicAppStandard:getLogicAppStandard", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "siteConfig": args.siteConfig,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLogicAppStandard.
 */
export interface GetLogicAppStandardArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    siteConfig?: inputs.GetLogicAppStandardSiteConfig;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetLogicAppStandardTimeouts;
}

/**
 * A collection of values returned by getLogicAppStandard.
 */
export interface GetLogicAppStandardResult {
    readonly appServicePlanId: string;
    readonly appSettings: {[key: string]: string};
    readonly bundleVersion: string;
    readonly clientAffinityEnabled: boolean;
    readonly clientCertificateMode: string;
    readonly connectionStrings: outputs.GetLogicAppStandardConnectionString[];
    readonly customDomainVerificationId: string;
    readonly defaultHostname: string;
    readonly enabled: boolean;
    readonly httpsOnly: boolean;
    readonly id: string;
    readonly identities: outputs.GetLogicAppStandardIdentity[];
    readonly kind: string;
    readonly location: string;
    readonly name: string;
    readonly outboundIpAddresses: string;
    readonly possibleOutboundIpAddresses: string;
    readonly resourceGroupName: string;
    readonly siteConfig?: outputs.GetLogicAppStandardSiteConfig;
    readonly siteCredentials: outputs.GetLogicAppStandardSiteCredential[];
    readonly storageAccountAccessKey: string;
    readonly storageAccountName: string;
    readonly storageAccountShareName: string;
    readonly tags?: {[key: string]: string};
    readonly timeouts?: outputs.GetLogicAppStandardTimeouts;
    readonly useExtensionBundle: boolean;
    readonly version: string;
    readonly virtualNetworkSubnetId: string;
}
export function getLogicAppStandardOutput(args: GetLogicAppStandardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogicAppStandardResult> {
    return pulumi.output(args).apply((a: any) => getLogicAppStandard(a, opts))
}

/**
 * A collection of arguments for invoking getLogicAppStandard.
 */
export interface GetLogicAppStandardOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    siteConfig?: pulumi.Input<inputs.GetLogicAppStandardSiteConfigArgs>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetLogicAppStandardTimeoutsArgs>;
}
