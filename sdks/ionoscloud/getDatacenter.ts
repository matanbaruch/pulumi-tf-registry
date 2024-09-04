// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacenter(args?: GetDatacenterArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacenterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getDatacenter:getDatacenter", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenter.
 */
export interface GetDatacenterArgs {
    id?: string;
    location?: string;
    name?: string;
    timeouts?: inputs.GetDatacenterTimeouts;
}

/**
 * A collection of values returned by getDatacenter.
 */
export interface GetDatacenterResult {
    readonly cpuArchitectures: outputs.GetDatacenterCpuArchitecture[];
    readonly description: string;
    readonly features: string[];
    readonly id?: string;
    readonly ipv6CidrBlock: string;
    readonly location?: string;
    readonly name?: string;
    readonly secAuthProtection: boolean;
    readonly timeouts?: outputs.GetDatacenterTimeouts;
    readonly version: number;
}
export function getDatacenterOutput(args?: GetDatacenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacenterResult> {
    return pulumi.output(args).apply((a: any) => getDatacenter(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenter.
 */
export interface GetDatacenterOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetDatacenterTimeoutsArgs>;
}
