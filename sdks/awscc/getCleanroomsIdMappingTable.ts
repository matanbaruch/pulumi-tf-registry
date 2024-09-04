// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCleanroomsIdMappingTable(args: GetCleanroomsIdMappingTableArgs, opts?: pulumi.InvokeOptions): Promise<GetCleanroomsIdMappingTableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCleanroomsIdMappingTable:getCleanroomsIdMappingTable", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCleanroomsIdMappingTable.
 */
export interface GetCleanroomsIdMappingTableArgs {
    id: string;
}

/**
 * A collection of values returned by getCleanroomsIdMappingTable.
 */
export interface GetCleanroomsIdMappingTableResult {
    readonly arn: string;
    readonly collaborationArn: string;
    readonly collaborationIdentifier: string;
    readonly description: string;
    readonly id: string;
    readonly idMappingTableIdentifier: string;
    readonly inputReferenceConfig: outputs.GetCleanroomsIdMappingTableInputReferenceConfig;
    readonly inputReferenceProperties: outputs.GetCleanroomsIdMappingTableInputReferenceProperties;
    readonly kmsKeyArn: string;
    readonly membershipArn: string;
    readonly membershipIdentifier: string;
    readonly name: string;
    readonly tags: outputs.GetCleanroomsIdMappingTableTag[];
}
export function getCleanroomsIdMappingTableOutput(args: GetCleanroomsIdMappingTableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCleanroomsIdMappingTableResult> {
    return pulumi.output(args).apply((a: any) => getCleanroomsIdMappingTable(a, opts))
}

/**
 * A collection of arguments for invoking getCleanroomsIdMappingTable.
 */
export interface GetCleanroomsIdMappingTableOutputArgs {
    id: pulumi.Input<string>;
}
