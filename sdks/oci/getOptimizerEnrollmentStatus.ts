// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOptimizerEnrollmentStatus(args: GetOptimizerEnrollmentStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetOptimizerEnrollmentStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOptimizerEnrollmentStatus:getOptimizerEnrollmentStatus", {
        "enrollmentStatusId": args.enrollmentStatusId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOptimizerEnrollmentStatus.
 */
export interface GetOptimizerEnrollmentStatusArgs {
    enrollmentStatusId: string;
}

/**
 * A collection of values returned by getOptimizerEnrollmentStatus.
 */
export interface GetOptimizerEnrollmentStatusResult {
    readonly compartmentId: string;
    readonly enrollmentStatusId: string;
    readonly id: string;
    readonly state: string;
    readonly status: string;
    readonly statusReason: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getOptimizerEnrollmentStatusOutput(args: GetOptimizerEnrollmentStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOptimizerEnrollmentStatusResult> {
    return pulumi.output(args).apply((a: any) => getOptimizerEnrollmentStatus(a, opts))
}

/**
 * A collection of arguments for invoking getOptimizerEnrollmentStatus.
 */
export interface GetOptimizerEnrollmentStatusOutputArgs {
    enrollmentStatusId: pulumi.Input<string>;
}
