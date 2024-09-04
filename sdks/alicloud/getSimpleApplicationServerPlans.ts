// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSimpleApplicationServerPlans(args?: GetSimpleApplicationServerPlansArgs, opts?: pulumi.InvokeOptions): Promise<GetSimpleApplicationServerPlansResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getSimpleApplicationServerPlans:getSimpleApplicationServerPlans", {
        "bandwidth": args.bandwidth,
        "core": args.core,
        "diskSize": args.diskSize,
        "flow": args.flow,
        "id": args.id,
        "ids": args.ids,
        "memory": args.memory,
        "outputFile": args.outputFile,
        "platform": args.platform,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSimpleApplicationServerPlans.
 */
export interface GetSimpleApplicationServerPlansArgs {
    bandwidth?: number;
    core?: number;
    diskSize?: number;
    flow?: number;
    id?: string;
    ids?: string[];
    memory?: number;
    outputFile?: string;
    platform?: string;
}

/**
 * A collection of values returned by getSimpleApplicationServerPlans.
 */
export interface GetSimpleApplicationServerPlansResult {
    readonly bandwidth?: number;
    readonly core?: number;
    readonly diskSize?: number;
    readonly flow?: number;
    readonly id: string;
    readonly ids: string[];
    readonly memory?: number;
    readonly outputFile?: string;
    readonly plans: outputs.GetSimpleApplicationServerPlansPlan[];
    readonly platform?: string;
}
export function getSimpleApplicationServerPlansOutput(args?: GetSimpleApplicationServerPlansOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSimpleApplicationServerPlansResult> {
    return pulumi.output(args).apply((a: any) => getSimpleApplicationServerPlans(a, opts))
}

/**
 * A collection of arguments for invoking getSimpleApplicationServerPlans.
 */
export interface GetSimpleApplicationServerPlansOutputArgs {
    bandwidth?: pulumi.Input<number>;
    core?: pulumi.Input<number>;
    diskSize?: pulumi.Input<number>;
    flow?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    memory?: pulumi.Input<number>;
    outputFile?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
}
