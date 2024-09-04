// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDbParameterGroups(args?: GetDbParameterGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetDbParameterGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ucloud:index/getDbParameterGroups:getDbParameterGroups", {
        "availabilityZone": args.availabilityZone,
        "classType": args.classType,
        "id": args.id,
        "multiAz": args.multiAz,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDbParameterGroups.
 */
export interface GetDbParameterGroupsArgs {
    availabilityZone?: string;
    classType?: string;
    id?: string;
    multiAz?: boolean;
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getDbParameterGroups.
 */
export interface GetDbParameterGroupsResult {
    readonly availabilityZone?: string;
    readonly classType?: string;
    readonly id: string;
    readonly multiAz?: boolean;
    readonly nameRegex?: string;
    readonly outputFile?: string;
    readonly parameterGroups: outputs.GetDbParameterGroupsParameterGroup[];
    readonly totalCount: number;
}
export function getDbParameterGroupsOutput(args?: GetDbParameterGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDbParameterGroupsResult> {
    return pulumi.output(args).apply((a: any) => getDbParameterGroups(a, opts))
}

/**
 * A collection of arguments for invoking getDbParameterGroups.
 */
export interface GetDbParameterGroupsOutputArgs {
    availabilityZone?: pulumi.Input<string>;
    classType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    multiAz?: pulumi.Input<boolean>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
