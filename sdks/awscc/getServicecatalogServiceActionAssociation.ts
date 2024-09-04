// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServicecatalogServiceActionAssociation(args: GetServicecatalogServiceActionAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetServicecatalogServiceActionAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getServicecatalogServiceActionAssociation:getServicecatalogServiceActionAssociation", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServicecatalogServiceActionAssociation.
 */
export interface GetServicecatalogServiceActionAssociationArgs {
    id: string;
}

/**
 * A collection of values returned by getServicecatalogServiceActionAssociation.
 */
export interface GetServicecatalogServiceActionAssociationResult {
    readonly id: string;
    readonly productId: string;
    readonly provisioningArtifactId: string;
    readonly serviceActionId: string;
}
export function getServicecatalogServiceActionAssociationOutput(args: GetServicecatalogServiceActionAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicecatalogServiceActionAssociationResult> {
    return pulumi.output(args).apply((a: any) => getServicecatalogServiceActionAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getServicecatalogServiceActionAssociation.
 */
export interface GetServicecatalogServiceActionAssociationOutputArgs {
    id: pulumi.Input<string>;
}
