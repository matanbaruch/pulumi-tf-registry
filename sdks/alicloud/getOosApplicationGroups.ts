// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOosApplicationGroups(args: GetOosApplicationGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetOosApplicationGroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getOosApplicationGroups:getOosApplicationGroups", {
        "applicationName": args.applicationName,
        "deployRegionId": args.deployRegionId,
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOosApplicationGroups.
 */
export interface GetOosApplicationGroupsArgs {
    applicationName: string;
    deployRegionId?: string;
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getOosApplicationGroups.
 */
export interface GetOosApplicationGroupsResult {
    readonly applicationName: string;
    readonly deployRegionId?: string;
    readonly groups: outputs.GetOosApplicationGroupsGroup[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
}
export function getOosApplicationGroupsOutput(args: GetOosApplicationGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOosApplicationGroupsResult> {
    return pulumi.output(args).apply((a: any) => getOosApplicationGroups(a, opts))
}

/**
 * A collection of arguments for invoking getOosApplicationGroups.
 */
export interface GetOosApplicationGroupsOutputArgs {
    applicationName: pulumi.Input<string>;
    deployRegionId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
