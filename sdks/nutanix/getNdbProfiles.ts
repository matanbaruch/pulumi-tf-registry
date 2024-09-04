// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNdbProfiles(args?: GetNdbProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetNdbProfilesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getNdbProfiles:getNdbProfiles", {
        "engine": args.engine,
        "id": args.id,
        "profileType": args.profileType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNdbProfiles.
 */
export interface GetNdbProfilesArgs {
    engine?: string;
    id?: string;
    profileType?: string;
}

/**
 * A collection of values returned by getNdbProfiles.
 */
export interface GetNdbProfilesResult {
    readonly engine?: string;
    readonly id: string;
    readonly profileType?: string;
    readonly profiles: outputs.GetNdbProfilesProfile[];
}
export function getNdbProfilesOutput(args?: GetNdbProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNdbProfilesResult> {
    return pulumi.output(args).apply((a: any) => getNdbProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getNdbProfiles.
 */
export interface GetNdbProfilesOutputArgs {
    engine?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    profileType?: pulumi.Input<string>;
}
