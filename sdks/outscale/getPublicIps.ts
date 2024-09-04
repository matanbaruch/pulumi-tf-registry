// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPublicIps(args?: GetPublicIpsArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIpsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getPublicIps:getPublicIps", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPublicIps.
 */
export interface GetPublicIpsArgs {
    filters?: inputs.GetPublicIpsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getPublicIps.
 */
export interface GetPublicIpsResult {
    readonly filters?: outputs.GetPublicIpsFilter[];
    readonly id: string;
    readonly publicIps: outputs.GetPublicIpsPublicIp[];
    readonly requestId: string;
}
export function getPublicIpsOutput(args?: GetPublicIpsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPublicIpsResult> {
    return pulumi.output(args).apply((a: any) => getPublicIps(a, opts))
}

/**
 * A collection of arguments for invoking getPublicIps.
 */
export interface GetPublicIpsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetPublicIpsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
