// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagedObjectStoragePolicies(args: GetManagedObjectStoragePoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedObjectStoragePoliciesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("upcloud:index/getManagedObjectStoragePolicies:getManagedObjectStoragePolicies", {
        "id": args.id,
        "serviceUuid": args.serviceUuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagedObjectStoragePolicies.
 */
export interface GetManagedObjectStoragePoliciesArgs {
    id?: string;
    serviceUuid: string;
}

/**
 * A collection of values returned by getManagedObjectStoragePolicies.
 */
export interface GetManagedObjectStoragePoliciesResult {
    readonly id: string;
    readonly policies: outputs.GetManagedObjectStoragePoliciesPolicy[];
    readonly serviceUuid: string;
}
export function getManagedObjectStoragePoliciesOutput(args: GetManagedObjectStoragePoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedObjectStoragePoliciesResult> {
    return pulumi.output(args).apply((a: any) => getManagedObjectStoragePolicies(a, opts))
}

/**
 * A collection of arguments for invoking getManagedObjectStoragePolicies.
 */
export interface GetManagedObjectStoragePoliciesOutputArgs {
    id?: pulumi.Input<string>;
    serviceUuid: pulumi.Input<string>;
}
