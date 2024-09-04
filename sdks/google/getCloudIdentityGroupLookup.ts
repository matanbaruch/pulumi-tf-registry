// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudIdentityGroupLookup(args: GetCloudIdentityGroupLookupArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudIdentityGroupLookupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getCloudIdentityGroupLookup:getCloudIdentityGroupLookup", {
        "groupKey": args.groupKey,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudIdentityGroupLookup.
 */
export interface GetCloudIdentityGroupLookupArgs {
    groupKey: inputs.GetCloudIdentityGroupLookupGroupKey;
    id?: string;
}

/**
 * A collection of values returned by getCloudIdentityGroupLookup.
 */
export interface GetCloudIdentityGroupLookupResult {
    readonly groupKey: outputs.GetCloudIdentityGroupLookupGroupKey;
    readonly id: string;
    readonly name: string;
}
export function getCloudIdentityGroupLookupOutput(args: GetCloudIdentityGroupLookupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudIdentityGroupLookupResult> {
    return pulumi.output(args).apply((a: any) => getCloudIdentityGroupLookup(a, opts))
}

/**
 * A collection of arguments for invoking getCloudIdentityGroupLookup.
 */
export interface GetCloudIdentityGroupLookupOutputArgs {
    groupKey: pulumi.Input<inputs.GetCloudIdentityGroupLookupGroupKeyArgs>;
    id?: pulumi.Input<string>;
}
