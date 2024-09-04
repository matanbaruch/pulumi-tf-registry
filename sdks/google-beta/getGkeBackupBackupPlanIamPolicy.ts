// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getGkeBackupBackupPlanIamPolicy(args: GetGkeBackupBackupPlanIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetGkeBackupBackupPlanIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getGkeBackupBackupPlanIamPolicy:getGkeBackupBackupPlanIamPolicy", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGkeBackupBackupPlanIamPolicy.
 */
export interface GetGkeBackupBackupPlanIamPolicyArgs {
    id?: string;
    location?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getGkeBackupBackupPlanIamPolicy.
 */
export interface GetGkeBackupBackupPlanIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly policyData: string;
    readonly project: string;
}
export function getGkeBackupBackupPlanIamPolicyOutput(args: GetGkeBackupBackupPlanIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGkeBackupBackupPlanIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getGkeBackupBackupPlanIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getGkeBackupBackupPlanIamPolicy.
 */
export interface GetGkeBackupBackupPlanIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
