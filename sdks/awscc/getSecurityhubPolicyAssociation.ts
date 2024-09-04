// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityhubPolicyAssociation(args: GetSecurityhubPolicyAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityhubPolicyAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSecurityhubPolicyAssociation:getSecurityhubPolicyAssociation", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityhubPolicyAssociation.
 */
export interface GetSecurityhubPolicyAssociationArgs {
    id: string;
}

/**
 * A collection of values returned by getSecurityhubPolicyAssociation.
 */
export interface GetSecurityhubPolicyAssociationResult {
    readonly associationIdentifier: string;
    readonly associationStatus: string;
    readonly associationStatusMessage: string;
    readonly associationType: string;
    readonly configurationPolicyId: string;
    readonly id: string;
    readonly targetId: string;
    readonly targetType: string;
    readonly updatedAt: string;
}
export function getSecurityhubPolicyAssociationOutput(args: GetSecurityhubPolicyAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityhubPolicyAssociationResult> {
    return pulumi.output(args).apply((a: any) => getSecurityhubPolicyAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityhubPolicyAssociation.
 */
export interface GetSecurityhubPolicyAssociationOutputArgs {
    id: pulumi.Input<string>;
}
