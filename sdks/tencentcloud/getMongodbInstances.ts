// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMongodbInstances(args?: GetMongodbInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetMongodbInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMongodbInstances:getMongodbInstances", {
        "clusterType": args.clusterType,
        "id": args.id,
        "instanceId": args.instanceId,
        "instanceNamePrefix": args.instanceNamePrefix,
        "resultOutputFile": args.resultOutputFile,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMongodbInstances.
 */
export interface GetMongodbInstancesArgs {
    clusterType?: string;
    id?: string;
    instanceId?: string;
    instanceNamePrefix?: string;
    resultOutputFile?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getMongodbInstances.
 */
export interface GetMongodbInstancesResult {
    readonly clusterType?: string;
    readonly id: string;
    readonly instanceId?: string;
    readonly instanceLists: outputs.GetMongodbInstancesInstanceList[];
    readonly instanceNamePrefix?: string;
    readonly resultOutputFile?: string;
    readonly tags?: {[key: string]: string};
}
export function getMongodbInstancesOutput(args?: GetMongodbInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongodbInstancesResult> {
    return pulumi.output(args).apply((a: any) => getMongodbInstances(a, opts))
}

/**
 * A collection of arguments for invoking getMongodbInstances.
 */
export interface GetMongodbInstancesOutputArgs {
    clusterType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    instanceNamePrefix?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
