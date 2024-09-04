// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2TransitGatewayAttachments(opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewayAttachmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2TransitGatewayAttachments:getEc2TransitGatewayAttachments", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2TransitGatewayAttachments.
 */
export interface GetEc2TransitGatewayAttachmentsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2TransitGatewayAttachmentsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewayAttachmentsResult> {
    return pulumi.output(getEc2TransitGatewayAttachments(opts))
}
