// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkmanagerGlobalNetwork(args: GetNetworkmanagerGlobalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkmanagerGlobalNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getNetworkmanagerGlobalNetwork:getNetworkmanagerGlobalNetwork", {
        "globalNetworkId": args.globalNetworkId,
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkmanagerGlobalNetwork.
 */
export interface GetNetworkmanagerGlobalNetworkArgs {
    globalNetworkId: string;
    id?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getNetworkmanagerGlobalNetwork.
 */
export interface GetNetworkmanagerGlobalNetworkResult {
    readonly arn: string;
    readonly description: string;
    readonly globalNetworkId: string;
    readonly id: string;
    readonly tags: {[key: string]: string};
}
export function getNetworkmanagerGlobalNetworkOutput(args: GetNetworkmanagerGlobalNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkmanagerGlobalNetworkResult> {
    return pulumi.output(args).apply((a: any) => getNetworkmanagerGlobalNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkmanagerGlobalNetwork.
 */
export interface GetNetworkmanagerGlobalNetworkOutputArgs {
    globalNetworkId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
