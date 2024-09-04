// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrivateNetwork(args: GetPrivateNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("transip:index/getPrivateNetwork:getPrivateNetwork", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrivateNetwork.
 */
export interface GetPrivateNetworkArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getPrivateNetwork.
 */
export interface GetPrivateNetworkResult {
    readonly description: string;
    readonly id: string;
    readonly isBlocked: string;
    readonly isLocked: string;
    readonly name: string;
    readonly vpsNames: string[];
}
export function getPrivateNetworkOutput(args: GetPrivateNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateNetworkResult> {
    return pulumi.output(args).apply((a: any) => getPrivateNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getPrivateNetwork.
 */
export interface GetPrivateNetworkOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
