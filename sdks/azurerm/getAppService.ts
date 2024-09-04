// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppService(args: GetAppServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getAppService:getAppService", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppService.
 */
export interface GetAppServiceArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetAppServiceTimeouts;
}

/**
 * A collection of values returned by getAppService.
 */
export interface GetAppServiceResult {
    readonly appServicePlanId: string;
    readonly appSettings: {[key: string]: string};
    readonly clientAffinityEnabled: boolean;
    readonly clientCertEnabled: boolean;
    readonly connectionStrings: outputs.GetAppServiceConnectionString[];
    readonly customDomainVerificationId: string;
    readonly defaultSiteHostname: string;
    readonly enabled: boolean;
    readonly httpsOnly: boolean;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly outboundIpAddressLists: string[];
    readonly outboundIpAddresses: string;
    readonly possibleOutboundIpAddressLists: string[];
    readonly possibleOutboundIpAddresses: string;
    readonly resourceGroupName: string;
    readonly siteConfigs: outputs.GetAppServiceSiteConfig[];
    readonly siteCredentials: outputs.GetAppServiceSiteCredential[];
    readonly sourceControls: outputs.GetAppServiceSourceControl[];
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetAppServiceTimeouts;
}
export function getAppServiceOutput(args: GetAppServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServiceResult> {
    return pulumi.output(args).apply((a: any) => getAppService(a, opts))
}

/**
 * A collection of arguments for invoking getAppService.
 */
export interface GetAppServiceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetAppServiceTimeoutsArgs>;
}
