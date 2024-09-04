// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityIntegrations(args?: GetSecurityIntegrationsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityIntegrationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getSecurityIntegrations:getSecurityIntegrations", {
        "id": args.id,
        "like": args.like,
        "withDescribe": args.withDescribe,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityIntegrations.
 */
export interface GetSecurityIntegrationsArgs {
    id?: string;
    like?: string;
    withDescribe?: boolean;
}

/**
 * A collection of values returned by getSecurityIntegrations.
 */
export interface GetSecurityIntegrationsResult {
    readonly id: string;
    readonly like?: string;
    readonly securityIntegrations: outputs.GetSecurityIntegrationsSecurityIntegration[];
    readonly withDescribe?: boolean;
}
export function getSecurityIntegrationsOutput(args?: GetSecurityIntegrationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityIntegrationsResult> {
    return pulumi.output(args).apply((a: any) => getSecurityIntegrations(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityIntegrations.
 */
export interface GetSecurityIntegrationsOutputArgs {
    id?: pulumi.Input<string>;
    like?: pulumi.Input<string>;
    withDescribe?: pulumi.Input<boolean>;
}
