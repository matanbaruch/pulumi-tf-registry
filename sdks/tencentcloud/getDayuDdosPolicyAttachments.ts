// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDayuDdosPolicyAttachments(args: GetDayuDdosPolicyAttachmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetDayuDdosPolicyAttachmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getDayuDdosPolicyAttachments:getDayuDdosPolicyAttachments", {
        "id": args.id,
        "policyId": args.policyId,
        "resourceId": args.resourceId,
        "resourceType": args.resourceType,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDayuDdosPolicyAttachments.
 */
export interface GetDayuDdosPolicyAttachmentsArgs {
    id?: string;
    policyId?: string;
    resourceId?: string;
    resourceType: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getDayuDdosPolicyAttachments.
 */
export interface GetDayuDdosPolicyAttachmentsResult {
    readonly dayuDdosPolicyAttachmentLists: outputs.GetDayuDdosPolicyAttachmentsDayuDdosPolicyAttachmentList[];
    readonly id: string;
    readonly policyId?: string;
    readonly resourceId?: string;
    readonly resourceType: string;
    readonly resultOutputFile?: string;
}
export function getDayuDdosPolicyAttachmentsOutput(args: GetDayuDdosPolicyAttachmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDayuDdosPolicyAttachmentsResult> {
    return pulumi.output(args).apply((a: any) => getDayuDdosPolicyAttachments(a, opts))
}

/**
 * A collection of arguments for invoking getDayuDdosPolicyAttachments.
 */
export interface GetDayuDdosPolicyAttachmentsOutputArgs {
    id?: pulumi.Input<string>;
    policyId?: pulumi.Input<string>;
    resourceId?: pulumi.Input<string>;
    resourceType: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
