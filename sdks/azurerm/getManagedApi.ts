// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagedApi(args: GetManagedApiArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedApiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getManagedApi:getManagedApi", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagedApi.
 */
export interface GetManagedApiArgs {
    id?: string;
    location: string;
    name: string;
    timeouts?: inputs.GetManagedApiTimeouts;
}

/**
 * A collection of values returned by getManagedApi.
 */
export interface GetManagedApiResult {
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetManagedApiTimeouts;
}
export function getManagedApiOutput(args: GetManagedApiOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedApiResult> {
    return pulumi.output(args).apply((a: any) => getManagedApi(a, opts))
}

/**
 * A collection of arguments for invoking getManagedApi.
 */
export interface GetManagedApiOutputArgs {
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetManagedApiTimeoutsArgs>;
}
