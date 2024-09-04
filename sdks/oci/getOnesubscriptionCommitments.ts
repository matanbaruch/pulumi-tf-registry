// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOnesubscriptionCommitments(args: GetOnesubscriptionCommitmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetOnesubscriptionCommitmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOnesubscriptionCommitments:getOnesubscriptionCommitments", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "subscribedServiceId": args.subscribedServiceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOnesubscriptionCommitments.
 */
export interface GetOnesubscriptionCommitmentsArgs {
    compartmentId: string;
    filters?: inputs.GetOnesubscriptionCommitmentsFilter[];
    id?: string;
    subscribedServiceId: string;
}

/**
 * A collection of values returned by getOnesubscriptionCommitments.
 */
export interface GetOnesubscriptionCommitmentsResult {
    readonly commitments: outputs.GetOnesubscriptionCommitmentsCommitment[];
    readonly compartmentId: string;
    readonly filters?: outputs.GetOnesubscriptionCommitmentsFilter[];
    readonly id: string;
    readonly subscribedServiceId: string;
}
export function getOnesubscriptionCommitmentsOutput(args: GetOnesubscriptionCommitmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnesubscriptionCommitmentsResult> {
    return pulumi.output(args).apply((a: any) => getOnesubscriptionCommitments(a, opts))
}

/**
 * A collection of arguments for invoking getOnesubscriptionCommitments.
 */
export interface GetOnesubscriptionCommitmentsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOnesubscriptionCommitmentsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    subscribedServiceId: pulumi.Input<string>;
}
