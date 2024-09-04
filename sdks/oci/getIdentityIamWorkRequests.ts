// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityIamWorkRequests(args: GetIdentityIamWorkRequestsArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityIamWorkRequestsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityIamWorkRequests:getIdentityIamWorkRequests", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "resourceIdentifier": args.resourceIdentifier,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityIamWorkRequests.
 */
export interface GetIdentityIamWorkRequestsArgs {
    compartmentId: string;
    filters?: inputs.GetIdentityIamWorkRequestsFilter[];
    id?: string;
    resourceIdentifier?: string;
}

/**
 * A collection of values returned by getIdentityIamWorkRequests.
 */
export interface GetIdentityIamWorkRequestsResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetIdentityIamWorkRequestsFilter[];
    readonly iamWorkRequests: outputs.GetIdentityIamWorkRequestsIamWorkRequest[];
    readonly id: string;
    readonly resourceIdentifier?: string;
}
export function getIdentityIamWorkRequestsOutput(args: GetIdentityIamWorkRequestsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityIamWorkRequestsResult> {
    return pulumi.output(args).apply((a: any) => getIdentityIamWorkRequests(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityIamWorkRequests.
 */
export interface GetIdentityIamWorkRequestsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetIdentityIamWorkRequestsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    resourceIdentifier?: pulumi.Input<string>;
}
