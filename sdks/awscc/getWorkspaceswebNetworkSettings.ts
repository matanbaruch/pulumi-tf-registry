// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWorkspaceswebNetworkSettings(args: GetWorkspaceswebNetworkSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceswebNetworkSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getWorkspaceswebNetworkSettings:getWorkspaceswebNetworkSettings", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkspaceswebNetworkSettings.
 */
export interface GetWorkspaceswebNetworkSettingsArgs {
    id: string;
}

/**
 * A collection of values returned by getWorkspaceswebNetworkSettings.
 */
export interface GetWorkspaceswebNetworkSettingsResult {
    readonly associatedPortalArns: string[];
    readonly id: string;
    readonly networkSettingsArn: string;
    readonly securityGroupIds: string[];
    readonly subnetIds: string[];
    readonly tags: outputs.GetWorkspaceswebNetworkSettingsTag[];
    readonly vpcId: string;
}
export function getWorkspaceswebNetworkSettingsOutput(args: GetWorkspaceswebNetworkSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceswebNetworkSettingsResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceswebNetworkSettings(a, opts))
}

/**
 * A collection of arguments for invoking getWorkspaceswebNetworkSettings.
 */
export interface GetWorkspaceswebNetworkSettingsOutputArgs {
    id: pulumi.Input<string>;
}
