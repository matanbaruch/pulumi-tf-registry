// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcClassicLinkInstances(args?: GetVpcClassicLinkInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcClassicLinkInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getVpcClassicLinkInstances:getVpcClassicLinkInstances", {
        "filters": args.filters,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcClassicLinkInstances.
 */
export interface GetVpcClassicLinkInstancesArgs {
    filters?: inputs.GetVpcClassicLinkInstancesFilter[];
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getVpcClassicLinkInstances.
 */
export interface GetVpcClassicLinkInstancesResult {
    readonly classicLinkInstanceSets: outputs.GetVpcClassicLinkInstancesClassicLinkInstanceSet[];
    readonly filters?: outputs.GetVpcClassicLinkInstancesFilter[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getVpcClassicLinkInstancesOutput(args?: GetVpcClassicLinkInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcClassicLinkInstancesResult> {
    return pulumi.output(args).apply((a: any) => getVpcClassicLinkInstances(a, opts))
}

/**
 * A collection of arguments for invoking getVpcClassicLinkInstances.
 */
export interface GetVpcClassicLinkInstancesOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetVpcClassicLinkInstancesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
