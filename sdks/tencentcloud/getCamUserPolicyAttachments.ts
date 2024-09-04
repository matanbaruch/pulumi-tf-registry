// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCamUserPolicyAttachments(args?: GetCamUserPolicyAttachmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetCamUserPolicyAttachmentsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getCamUserPolicyAttachments:getCamUserPolicyAttachments", {
        "createMode": args.createMode,
        "id": args.id,
        "policyId": args.policyId,
        "policyType": args.policyType,
        "resultOutputFile": args.resultOutputFile,
        "userId": args.userId,
        "userName": args.userName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCamUserPolicyAttachments.
 */
export interface GetCamUserPolicyAttachmentsArgs {
    createMode?: number;
    id?: string;
    policyId?: string;
    policyType?: string;
    resultOutputFile?: string;
    /**
     * @deprecated Deprecated
     */
    userId?: string;
    userName?: string;
}

/**
 * A collection of values returned by getCamUserPolicyAttachments.
 */
export interface GetCamUserPolicyAttachmentsResult {
    readonly createMode?: number;
    readonly id: string;
    readonly policyId?: string;
    readonly policyType?: string;
    readonly resultOutputFile?: string;
    /**
     * @deprecated Deprecated
     */
    readonly userId?: string;
    readonly userName?: string;
    readonly userPolicyAttachmentLists: outputs.GetCamUserPolicyAttachmentsUserPolicyAttachmentList[];
}
export function getCamUserPolicyAttachmentsOutput(args?: GetCamUserPolicyAttachmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCamUserPolicyAttachmentsResult> {
    return pulumi.output(args).apply((a: any) => getCamUserPolicyAttachments(a, opts))
}

/**
 * A collection of arguments for invoking getCamUserPolicyAttachments.
 */
export interface GetCamUserPolicyAttachmentsOutputArgs {
    createMode?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    policyId?: pulumi.Input<string>;
    policyType?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    userId?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
}
