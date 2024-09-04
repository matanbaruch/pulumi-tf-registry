// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataFilteringSecurityProfiles(args?: GetDataFilteringSecurityProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetDataFilteringSecurityProfilesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getDataFilteringSecurityProfiles:getDataFilteringSecurityProfiles", {
        "deviceGroup": args.deviceGroup,
        "id": args.id,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataFilteringSecurityProfiles.
 */
export interface GetDataFilteringSecurityProfilesArgs {
    deviceGroup?: string;
    id?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getDataFilteringSecurityProfiles.
 */
export interface GetDataFilteringSecurityProfilesResult {
    readonly deviceGroup?: string;
    readonly id: string;
    readonly listings: string[];
    readonly total: number;
    readonly vsys?: string;
}
export function getDataFilteringSecurityProfilesOutput(args?: GetDataFilteringSecurityProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataFilteringSecurityProfilesResult> {
    return pulumi.output(args).apply((a: any) => getDataFilteringSecurityProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getDataFilteringSecurityProfiles.
 */
export interface GetDataFilteringSecurityProfilesOutputArgs {
    deviceGroup?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
