// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcs(args?: GetVpcsArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getVpcs:getVpcs", {
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "region": args.region,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcs.
 */
export interface GetVpcsArgs {
    id?: string;
    name?: string;
    projectId?: string;
    region?: string;
    tags?: string[];
}

/**
 * A collection of values returned by getVpcs.
 */
export interface GetVpcsResult {
    readonly id: string;
    readonly name?: string;
    readonly organizationId: string;
    readonly projectId: string;
    readonly region: string;
    readonly tags?: string[];
    readonly vpcs: outputs.GetVpcsVpc[];
}
export function getVpcsOutput(args?: GetVpcsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcsResult> {
    return pulumi.output(args).apply((a: any) => getVpcs(a, opts))
}

/**
 * A collection of arguments for invoking getVpcs.
 */
export interface GetVpcsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
