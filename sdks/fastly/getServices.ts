// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServices(args?: GetServicesArgs, opts?: pulumi.InvokeOptions): Promise<GetServicesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fastly:index/getServices:getServices", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServices.
 */
export interface GetServicesArgs {
    id?: string;
}

/**
 * A collection of values returned by getServices.
 */
export interface GetServicesResult {
    readonly details: outputs.GetServicesDetail[];
    readonly id: string;
    readonly ids: string[];
}
export function getServicesOutput(args?: GetServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicesResult> {
    return pulumi.output(args).apply((a: any) => getServices(a, opts))
}

/**
 * A collection of arguments for invoking getServices.
 */
export interface GetServicesOutputArgs {
    id?: pulumi.Input<string>;
}
