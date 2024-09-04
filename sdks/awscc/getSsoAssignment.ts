// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSsoAssignment(args: GetSsoAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetSsoAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSsoAssignment:getSsoAssignment", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSsoAssignment.
 */
export interface GetSsoAssignmentArgs {
    id: string;
}

/**
 * A collection of values returned by getSsoAssignment.
 */
export interface GetSsoAssignmentResult {
    readonly id: string;
    readonly instanceArn: string;
    readonly permissionSetArn: string;
    readonly principalId: string;
    readonly principalType: string;
    readonly targetId: string;
    readonly targetType: string;
}
export function getSsoAssignmentOutput(args: GetSsoAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSsoAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getSsoAssignment(a, opts))
}

/**
 * A collection of arguments for invoking getSsoAssignment.
 */
export interface GetSsoAssignmentOutputArgs {
    id: pulumi.Input<string>;
}
