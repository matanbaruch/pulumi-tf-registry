// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOrganization(args?: GetOrganizationArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingone:index/getOrganization:getOrganization", {
        "name": args.name,
        "organizationId": args.organizationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganization.
 */
export interface GetOrganizationArgs {
    name?: string;
    organizationId?: string;
}

/**
 * A collection of values returned by getOrganization.
 */
export interface GetOrganizationResult {
    readonly billingConnectionIds: string[];
    readonly description: string;
    readonly id: string;
    readonly name?: string;
    readonly organizationId?: string;
    readonly type: string;
}
export function getOrganizationOutput(args?: GetOrganizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationResult> {
    return pulumi.output(args).apply((a: any) => getOrganization(a, opts))
}

/**
 * A collection of arguments for invoking getOrganization.
 */
export interface GetOrganizationOutputArgs {
    name?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
}
