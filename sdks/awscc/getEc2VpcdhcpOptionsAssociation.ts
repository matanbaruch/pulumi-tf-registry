// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2VpcdhcpOptionsAssociation(args: GetEc2VpcdhcpOptionsAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2VpcdhcpOptionsAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2VpcdhcpOptionsAssociation:getEc2VpcdhcpOptionsAssociation", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2VpcdhcpOptionsAssociation.
 */
export interface GetEc2VpcdhcpOptionsAssociationArgs {
    id: string;
}

/**
 * A collection of values returned by getEc2VpcdhcpOptionsAssociation.
 */
export interface GetEc2VpcdhcpOptionsAssociationResult {
    readonly dhcpOptionsId: string;
    readonly id: string;
    readonly vpcId: string;
}
export function getEc2VpcdhcpOptionsAssociationOutput(args: GetEc2VpcdhcpOptionsAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2VpcdhcpOptionsAssociationResult> {
    return pulumi.output(args).apply((a: any) => getEc2VpcdhcpOptionsAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getEc2VpcdhcpOptionsAssociation.
 */
export interface GetEc2VpcdhcpOptionsAssociationOutputArgs {
    id: pulumi.Input<string>;
}
