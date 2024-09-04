// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWorkstationsWorkstationConfigIamPolicy(args: GetWorkstationsWorkstationConfigIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkstationsWorkstationConfigIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getWorkstationsWorkstationConfigIamPolicy:getWorkstationsWorkstationConfigIamPolicy", {
        "id": args.id,
        "location": args.location,
        "project": args.project,
        "workstationClusterId": args.workstationClusterId,
        "workstationConfigId": args.workstationConfigId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkstationsWorkstationConfigIamPolicy.
 */
export interface GetWorkstationsWorkstationConfigIamPolicyArgs {
    id?: string;
    location?: string;
    project?: string;
    workstationClusterId: string;
    workstationConfigId: string;
}

/**
 * A collection of values returned by getWorkstationsWorkstationConfigIamPolicy.
 */
export interface GetWorkstationsWorkstationConfigIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly policyData: string;
    readonly project: string;
    readonly workstationClusterId: string;
    readonly workstationConfigId: string;
}
export function getWorkstationsWorkstationConfigIamPolicyOutput(args: GetWorkstationsWorkstationConfigIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkstationsWorkstationConfigIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getWorkstationsWorkstationConfigIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getWorkstationsWorkstationConfigIamPolicy.
 */
export interface GetWorkstationsWorkstationConfigIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    workstationClusterId: pulumi.Input<string>;
    workstationConfigId: pulumi.Input<string>;
}
