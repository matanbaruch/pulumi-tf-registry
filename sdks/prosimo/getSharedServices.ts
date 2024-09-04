// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSharedServices(args?: GetSharedServicesArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedServicesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prosimo:index/getSharedServices:getSharedServices", {
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSharedServices.
 */
export interface GetSharedServicesArgs {
    filter?: string;
    id?: string;
}

/**
 * A collection of values returned by getSharedServices.
 */
export interface GetSharedServicesResult {
    readonly filter?: string;
    readonly id: string;
    readonly sharedServiceCount: number;
    readonly sharedServiceLists: outputs.GetSharedServicesSharedServiceList[];
}
export function getSharedServicesOutput(args?: GetSharedServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedServicesResult> {
    return pulumi.output(args).apply((a: any) => getSharedServices(a, opts))
}

/**
 * A collection of arguments for invoking getSharedServices.
 */
export interface GetSharedServicesOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
