// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSyntheticsPrivateLocation(args: GetSyntheticsPrivateLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetSyntheticsPrivateLocationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("newrelic:index/getSyntheticsPrivateLocation:getSyntheticsPrivateLocation", {
        "accountId": args.accountId,
        "id": args.id,
        "keys": args.keys,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSyntheticsPrivateLocation.
 */
export interface GetSyntheticsPrivateLocationArgs {
    accountId?: number;
    id?: string;
    keys?: string[];
    name: string;
}

/**
 * A collection of values returned by getSyntheticsPrivateLocation.
 */
export interface GetSyntheticsPrivateLocationResult {
    readonly accountId?: number;
    readonly id: string;
    readonly keys: string[];
    readonly name: string;
}
export function getSyntheticsPrivateLocationOutput(args: GetSyntheticsPrivateLocationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSyntheticsPrivateLocationResult> {
    return pulumi.output(args).apply((a: any) => getSyntheticsPrivateLocation(a, opts))
}

/**
 * A collection of arguments for invoking getSyntheticsPrivateLocation.
 */
export interface GetSyntheticsPrivateLocationOutputArgs {
    accountId?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    keys?: pulumi.Input<pulumi.Input<string>[]>;
    name: pulumi.Input<string>;
}
