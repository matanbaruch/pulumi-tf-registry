// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIdentityTenancy(args: GetIdentityTenancyArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityTenancyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityTenancy:getIdentityTenancy", {
        "id": args.id,
        "tenancyId": args.tenancyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityTenancy.
 */
export interface GetIdentityTenancyArgs {
    id?: string;
    tenancyId: string;
}

/**
 * A collection of values returned by getIdentityTenancy.
 */
export interface GetIdentityTenancyResult {
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly homeRegionKey: string;
    readonly id: string;
    readonly name: string;
    readonly tenancyId: string;
    readonly upiIdcsCompatibilityLayerEndpoint: string;
}
export function getIdentityTenancyOutput(args: GetIdentityTenancyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityTenancyResult> {
    return pulumi.output(args).apply((a: any) => getIdentityTenancy(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityTenancy.
 */
export interface GetIdentityTenancyOutputArgs {
    id?: pulumi.Input<string>;
    tenancyId: pulumi.Input<string>;
}
