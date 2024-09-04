// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreClusterNetwork(args: GetCoreClusterNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreClusterNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreClusterNetwork:getCoreClusterNetwork", {
        "clusterNetworkId": args.clusterNetworkId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreClusterNetwork.
 */
export interface GetCoreClusterNetworkArgs {
    clusterNetworkId: string;
}

/**
 * A collection of values returned by getCoreClusterNetwork.
 */
export interface GetCoreClusterNetworkResult {
    readonly clusterConfigurations: outputs.GetCoreClusterNetworkClusterConfiguration[];
    readonly clusterNetworkId: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly hpcIslandId: string;
    readonly id: string;
    readonly instancePools: outputs.GetCoreClusterNetworkInstancePool[];
    readonly networkBlockIds: string[];
    readonly placementConfigurations: outputs.GetCoreClusterNetworkPlacementConfiguration[];
    readonly state: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getCoreClusterNetworkOutput(args: GetCoreClusterNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreClusterNetworkResult> {
    return pulumi.output(args).apply((a: any) => getCoreClusterNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getCoreClusterNetwork.
 */
export interface GetCoreClusterNetworkOutputArgs {
    clusterNetworkId: pulumi.Input<string>;
}
