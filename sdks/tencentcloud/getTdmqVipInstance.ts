// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTdmqVipInstance(args: GetTdmqVipInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetTdmqVipInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTdmqVipInstance:getTdmqVipInstance", {
        "clusterId": args.clusterId,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTdmqVipInstance.
 */
export interface GetTdmqVipInstanceArgs {
    clusterId: string;
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getTdmqVipInstance.
 */
export interface GetTdmqVipInstanceResult {
    readonly clusterId: string;
    readonly clusterInfos: outputs.GetTdmqVipInstanceClusterInfo[];
    readonly id: string;
    readonly instanceConfigs: outputs.GetTdmqVipInstanceInstanceConfig[];
    readonly resultOutputFile?: string;
}
export function getTdmqVipInstanceOutput(args: GetTdmqVipInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTdmqVipInstanceResult> {
    return pulumi.output(args).apply((a: any) => getTdmqVipInstance(a, opts))
}

/**
 * A collection of arguments for invoking getTdmqVipInstance.
 */
export interface GetTdmqVipInstanceOutputArgs {
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
