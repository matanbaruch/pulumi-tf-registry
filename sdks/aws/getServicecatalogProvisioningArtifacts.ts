// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServicecatalogProvisioningArtifacts(args: GetServicecatalogProvisioningArtifactsArgs, opts?: pulumi.InvokeOptions): Promise<GetServicecatalogProvisioningArtifactsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getServicecatalogProvisioningArtifacts:getServicecatalogProvisioningArtifacts", {
        "acceptLanguage": args.acceptLanguage,
        "id": args.id,
        "productId": args.productId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServicecatalogProvisioningArtifacts.
 */
export interface GetServicecatalogProvisioningArtifactsArgs {
    acceptLanguage?: string;
    id?: string;
    productId: string;
    timeouts?: inputs.GetServicecatalogProvisioningArtifactsTimeouts;
}

/**
 * A collection of values returned by getServicecatalogProvisioningArtifacts.
 */
export interface GetServicecatalogProvisioningArtifactsResult {
    readonly acceptLanguage?: string;
    readonly id: string;
    readonly productId: string;
    readonly provisioningArtifactDetails: outputs.GetServicecatalogProvisioningArtifactsProvisioningArtifactDetail[];
    readonly timeouts?: outputs.GetServicecatalogProvisioningArtifactsTimeouts;
}
export function getServicecatalogProvisioningArtifactsOutput(args: GetServicecatalogProvisioningArtifactsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicecatalogProvisioningArtifactsResult> {
    return pulumi.output(args).apply((a: any) => getServicecatalogProvisioningArtifacts(a, opts))
}

/**
 * A collection of arguments for invoking getServicecatalogProvisioningArtifacts.
 */
export interface GetServicecatalogProvisioningArtifactsOutputArgs {
    acceptLanguage?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    productId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetServicecatalogProvisioningArtifactsTimeoutsArgs>;
}
