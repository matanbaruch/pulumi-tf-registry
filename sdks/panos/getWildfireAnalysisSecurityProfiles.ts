// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWildfireAnalysisSecurityProfiles(args?: GetWildfireAnalysisSecurityProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetWildfireAnalysisSecurityProfilesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getWildfireAnalysisSecurityProfiles:getWildfireAnalysisSecurityProfiles", {
        "deviceGroup": args.deviceGroup,
        "id": args.id,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWildfireAnalysisSecurityProfiles.
 */
export interface GetWildfireAnalysisSecurityProfilesArgs {
    deviceGroup?: string;
    id?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getWildfireAnalysisSecurityProfiles.
 */
export interface GetWildfireAnalysisSecurityProfilesResult {
    readonly deviceGroup?: string;
    readonly id: string;
    readonly listings: string[];
    readonly total: number;
    readonly vsys?: string;
}
export function getWildfireAnalysisSecurityProfilesOutput(args?: GetWildfireAnalysisSecurityProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWildfireAnalysisSecurityProfilesResult> {
    return pulumi.output(args).apply((a: any) => getWildfireAnalysisSecurityProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getWildfireAnalysisSecurityProfiles.
 */
export interface GetWildfireAnalysisSecurityProfilesOutputArgs {
    deviceGroup?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
