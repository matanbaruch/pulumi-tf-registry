// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcBandwidthPackageBillUsage(args: GetVpcBandwidthPackageBillUsageArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcBandwidthPackageBillUsageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getVpcBandwidthPackageBillUsage:getVpcBandwidthPackageBillUsage", {
        "bandwidthPackageId": args.bandwidthPackageId,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcBandwidthPackageBillUsage.
 */
export interface GetVpcBandwidthPackageBillUsageArgs {
    bandwidthPackageId: string;
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getVpcBandwidthPackageBillUsage.
 */
export interface GetVpcBandwidthPackageBillUsageResult {
    readonly bandwidthPackageBillBandwidthSets: outputs.GetVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSet[];
    readonly bandwidthPackageId: string;
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getVpcBandwidthPackageBillUsageOutput(args: GetVpcBandwidthPackageBillUsageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcBandwidthPackageBillUsageResult> {
    return pulumi.output(args).apply((a: any) => getVpcBandwidthPackageBillUsage(a, opts))
}

/**
 * A collection of arguments for invoking getVpcBandwidthPackageBillUsage.
 */
export interface GetVpcBandwidthPackageBillUsageOutputArgs {
    bandwidthPackageId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
