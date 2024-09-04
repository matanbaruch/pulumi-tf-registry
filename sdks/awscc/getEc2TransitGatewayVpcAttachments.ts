// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2TransitGatewayVpcAttachments(opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewayVpcAttachmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2TransitGatewayVpcAttachments:getEc2TransitGatewayVpcAttachments", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2TransitGatewayVpcAttachments.
 */
export interface GetEc2TransitGatewayVpcAttachmentsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2TransitGatewayVpcAttachmentsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewayVpcAttachmentsResult> {
    return pulumi.output(getEc2TransitGatewayVpcAttachments(opts))
}
