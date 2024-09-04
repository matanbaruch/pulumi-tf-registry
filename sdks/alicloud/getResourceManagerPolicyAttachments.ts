// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getResourceManagerPolicyAttachments(args?: GetResourceManagerPolicyAttachmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceManagerPolicyAttachmentsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getResourceManagerPolicyAttachments:getResourceManagerPolicyAttachments", {
        "id": args.id,
        "language": args.language,
        "outputFile": args.outputFile,
        "policyName": args.policyName,
        "policyType": args.policyType,
        "principalName": args.principalName,
        "principalType": args.principalType,
        "resourceGroupId": args.resourceGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourceManagerPolicyAttachments.
 */
export interface GetResourceManagerPolicyAttachmentsArgs {
    id?: string;
    language?: string;
    outputFile?: string;
    policyName?: string;
    policyType?: string;
    principalName?: string;
    principalType?: string;
    resourceGroupId?: string;
}

/**
 * A collection of values returned by getResourceManagerPolicyAttachments.
 */
export interface GetResourceManagerPolicyAttachmentsResult {
    readonly attachments: outputs.GetResourceManagerPolicyAttachmentsAttachment[];
    readonly id: string;
    readonly ids: string[];
    readonly language?: string;
    readonly outputFile?: string;
    readonly policyName?: string;
    readonly policyType?: string;
    readonly principalName?: string;
    readonly principalType?: string;
    readonly resourceGroupId?: string;
}
export function getResourceManagerPolicyAttachmentsOutput(args?: GetResourceManagerPolicyAttachmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceManagerPolicyAttachmentsResult> {
    return pulumi.output(args).apply((a: any) => getResourceManagerPolicyAttachments(a, opts))
}

/**
 * A collection of arguments for invoking getResourceManagerPolicyAttachments.
 */
export interface GetResourceManagerPolicyAttachmentsOutputArgs {
    id?: pulumi.Input<string>;
    language?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    policyName?: pulumi.Input<string>;
    policyType?: pulumi.Input<string>;
    principalName?: pulumi.Input<string>;
    principalType?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
}
