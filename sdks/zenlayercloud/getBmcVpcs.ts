// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBmcVpcs(args?: GetBmcVpcsArgs, opts?: pulumi.InvokeOptions): Promise<GetBmcVpcsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zenlayercloud:index/getBmcVpcs:getBmcVpcs", {
        "cidrBlock": args.cidrBlock,
        "id": args.id,
        "region": args.region,
        "resourceGroupId": args.resourceGroupId,
        "resultOutputFile": args.resultOutputFile,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBmcVpcs.
 */
export interface GetBmcVpcsArgs {
    cidrBlock?: string;
    id?: string;
    region?: string;
    resourceGroupId?: string;
    resultOutputFile?: string;
    vpcId?: string;
}

/**
 * A collection of values returned by getBmcVpcs.
 */
export interface GetBmcVpcsResult {
    readonly cidrBlock?: string;
    readonly id: string;
    readonly region?: string;
    readonly resourceGroupId?: string;
    readonly resultOutputFile?: string;
    readonly vpcId?: string;
    readonly vpcLists: outputs.GetBmcVpcsVpcList[];
}
export function getBmcVpcsOutput(args?: GetBmcVpcsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBmcVpcsResult> {
    return pulumi.output(args).apply((a: any) => getBmcVpcs(a, opts))
}

/**
 * A collection of arguments for invoking getBmcVpcs.
 */
export interface GetBmcVpcsOutputArgs {
    cidrBlock?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
