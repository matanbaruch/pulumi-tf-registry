// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSigningKeys(args?: GetSigningKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetSigningKeysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("auth0:index/getSigningKeys:getSigningKeys", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSigningKeys.
 */
export interface GetSigningKeysArgs {
    id?: string;
}

/**
 * A collection of values returned by getSigningKeys.
 */
export interface GetSigningKeysResult {
    readonly id: string;
    readonly signingKeys: outputs.GetSigningKeysSigningKey[];
}
export function getSigningKeysOutput(args?: GetSigningKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSigningKeysResult> {
    return pulumi.output(args).apply((a: any) => getSigningKeys(a, opts))
}

/**
 * A collection of arguments for invoking getSigningKeys.
 */
export interface GetSigningKeysOutputArgs {
    id?: pulumi.Input<string>;
}
