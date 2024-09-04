// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRdsDbSubnetGroup(args: GetRdsDbSubnetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetRdsDbSubnetGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRdsDbSubnetGroup:getRdsDbSubnetGroup", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRdsDbSubnetGroup.
 */
export interface GetRdsDbSubnetGroupArgs {
    id: string;
}

/**
 * A collection of values returned by getRdsDbSubnetGroup.
 */
export interface GetRdsDbSubnetGroupResult {
    readonly dbSubnetGroupDescription: string;
    readonly dbSubnetGroupName: string;
    readonly id: string;
    readonly subnetIds: string[];
    readonly tags: outputs.GetRdsDbSubnetGroupTag[];
}
export function getRdsDbSubnetGroupOutput(args: GetRdsDbSubnetGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRdsDbSubnetGroupResult> {
    return pulumi.output(args).apply((a: any) => getRdsDbSubnetGroup(a, opts))
}

/**
 * A collection of arguments for invoking getRdsDbSubnetGroup.
 */
export interface GetRdsDbSubnetGroupOutputArgs {
    id: pulumi.Input<string>;
}
