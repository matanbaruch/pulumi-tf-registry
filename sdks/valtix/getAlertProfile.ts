// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAlertProfile(args: GetAlertProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("valtix:index/getAlertProfile:getAlertProfile", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlertProfile.
 */
export interface GetAlertProfileArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getAlertProfile.
 */
export interface GetAlertProfileResult {
    readonly id: string;
    readonly name: string;
}
export function getAlertProfileOutput(args: GetAlertProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlertProfileResult> {
    return pulumi.output(args).apply((a: any) => getAlertProfile(a, opts))
}

/**
 * A collection of arguments for invoking getAlertProfile.
 */
export interface GetAlertProfileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
