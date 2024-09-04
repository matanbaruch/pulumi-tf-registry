// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcResourceDashboard(args: GetVpcResourceDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcResourceDashboardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getVpcResourceDashboard:getVpcResourceDashboard", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "vpcIds": args.vpcIds,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcResourceDashboard.
 */
export interface GetVpcResourceDashboardArgs {
    id?: string;
    resultOutputFile?: string;
    vpcIds: string[];
}

/**
 * A collection of values returned by getVpcResourceDashboard.
 */
export interface GetVpcResourceDashboardResult {
    readonly id: string;
    readonly resourceDashboardSets: outputs.GetVpcResourceDashboardResourceDashboardSet[];
    readonly resultOutputFile?: string;
    readonly vpcIds: string[];
}
export function getVpcResourceDashboardOutput(args: GetVpcResourceDashboardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcResourceDashboardResult> {
    return pulumi.output(args).apply((a: any) => getVpcResourceDashboard(a, opts))
}

/**
 * A collection of arguments for invoking getVpcResourceDashboard.
 */
export interface GetVpcResourceDashboardOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    vpcIds: pulumi.Input<pulumi.Input<string>[]>;
}
