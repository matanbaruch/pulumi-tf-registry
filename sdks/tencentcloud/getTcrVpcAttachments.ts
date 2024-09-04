// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTcrVpcAttachments(args: GetTcrVpcAttachmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetTcrVpcAttachmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTcrVpcAttachments:getTcrVpcAttachments", {
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
        "subnetId": args.subnetId,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTcrVpcAttachments.
 */
export interface GetTcrVpcAttachmentsArgs {
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
    subnetId?: string;
    vpcId?: string;
}

/**
 * A collection of values returned by getTcrVpcAttachments.
 */
export interface GetTcrVpcAttachmentsResult {
    readonly id: string;
    readonly instanceId: string;
    readonly resultOutputFile?: string;
    readonly subnetId?: string;
    readonly vpcAttachmentLists: outputs.GetTcrVpcAttachmentsVpcAttachmentList[];
    readonly vpcId?: string;
}
export function getTcrVpcAttachmentsOutput(args: GetTcrVpcAttachmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTcrVpcAttachmentsResult> {
    return pulumi.output(args).apply((a: any) => getTcrVpcAttachments(a, opts))
}

/**
 * A collection of arguments for invoking getTcrVpcAttachments.
 */
export interface GetTcrVpcAttachmentsOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
