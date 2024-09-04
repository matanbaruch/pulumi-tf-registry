// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataplatformCluster(args?: GetDataplatformClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDataplatformClusterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getDataplatformCluster:getDataplatformCluster", {
        "id": args.id,
        "name": args.name,
        "partialMatch": args.partialMatch,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataplatformCluster.
 */
export interface GetDataplatformClusterArgs {
    id?: string;
    name?: string;
    partialMatch?: boolean;
    timeouts?: inputs.GetDataplatformClusterTimeouts;
}

/**
 * A collection of values returned by getDataplatformCluster.
 */
export interface GetDataplatformClusterResult {
    readonly caCrt: string;
    readonly configs: outputs.GetDataplatformClusterConfig[];
    readonly datacenterId: string;
    readonly id?: string;
    readonly kubeConfig: string;
    readonly lans: outputs.GetDataplatformClusterLan[];
    readonly maintenanceWindows: outputs.GetDataplatformClusterMaintenanceWindow[];
    readonly name?: string;
    readonly partialMatch?: boolean;
    readonly server: string;
    readonly timeouts?: outputs.GetDataplatformClusterTimeouts;
    readonly userTokens: {[key: string]: string};
    readonly version: string;
}
export function getDataplatformClusterOutput(args?: GetDataplatformClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataplatformClusterResult> {
    return pulumi.output(args).apply((a: any) => getDataplatformCluster(a, opts))
}

/**
 * A collection of arguments for invoking getDataplatformCluster.
 */
export interface GetDataplatformClusterOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partialMatch?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.GetDataplatformClusterTimeoutsArgs>;
}
