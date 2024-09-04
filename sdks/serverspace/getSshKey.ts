// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSshKey(args: GetSshKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSshKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("serverspace:index/getSshKey:getSshKey", {
        "id": args.id,
        "name": args.name,
        "publicKey": args.publicKey,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSshKey.
 */
export interface GetSshKeyArgs {
    id: number;
    name?: string;
    publicKey?: string;
}

/**
 * A collection of values returned by getSshKey.
 */
export interface GetSshKeyResult {
    readonly id: number;
    readonly name?: string;
    readonly publicKey?: string;
}
export function getSshKeyOutput(args: GetSshKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSshKeyResult> {
    return pulumi.output(args).apply((a: any) => getSshKey(a, opts))
}

/**
 * A collection of arguments for invoking getSshKey.
 */
export interface GetSshKeyOutputArgs {
    id: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
}
