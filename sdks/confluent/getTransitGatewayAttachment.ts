// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTransitGatewayAttachment(args: GetTransitGatewayAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetTransitGatewayAttachmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("confluent:index/getTransitGatewayAttachment:getTransitGatewayAttachment", {
        "displayName": args.displayName,
        "environment": args.environment,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTransitGatewayAttachment.
 */
export interface GetTransitGatewayAttachmentArgs {
    displayName?: string;
    environment: inputs.GetTransitGatewayAttachmentEnvironment;
    id?: string;
}

/**
 * A collection of values returned by getTransitGatewayAttachment.
 */
export interface GetTransitGatewayAttachmentResult {
    readonly aws: outputs.GetTransitGatewayAttachmentAw[];
    readonly displayName: string;
    readonly environment: outputs.GetTransitGatewayAttachmentEnvironment;
    readonly id: string;
    readonly networks: outputs.GetTransitGatewayAttachmentNetwork[];
}
export function getTransitGatewayAttachmentOutput(args: GetTransitGatewayAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTransitGatewayAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getTransitGatewayAttachment(a, opts))
}

/**
 * A collection of arguments for invoking getTransitGatewayAttachment.
 */
export interface GetTransitGatewayAttachmentOutputArgs {
    displayName?: pulumi.Input<string>;
    environment: pulumi.Input<inputs.GetTransitGatewayAttachmentEnvironmentArgs>;
    id?: pulumi.Input<string>;
}
