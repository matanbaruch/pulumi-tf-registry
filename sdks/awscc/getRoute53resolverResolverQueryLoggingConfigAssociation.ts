// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53resolverResolverQueryLoggingConfigAssociation(args: GetRoute53resolverResolverQueryLoggingConfigAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetRoute53resolverResolverQueryLoggingConfigAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRoute53resolverResolverQueryLoggingConfigAssociation:getRoute53resolverResolverQueryLoggingConfigAssociation", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoute53resolverResolverQueryLoggingConfigAssociation.
 */
export interface GetRoute53resolverResolverQueryLoggingConfigAssociationArgs {
    id: string;
}

/**
 * A collection of values returned by getRoute53resolverResolverQueryLoggingConfigAssociation.
 */
export interface GetRoute53resolverResolverQueryLoggingConfigAssociationResult {
    readonly creationTime: string;
    readonly error: string;
    readonly errorMessage: string;
    readonly id: string;
    readonly resolverQueryLogConfigId: string;
    readonly resolverQueryLoggingConfigAssociationId: string;
    readonly resourceId: string;
    readonly status: string;
}
export function getRoute53resolverResolverQueryLoggingConfigAssociationOutput(args: GetRoute53resolverResolverQueryLoggingConfigAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53resolverResolverQueryLoggingConfigAssociationResult> {
    return pulumi.output(args).apply((a: any) => getRoute53resolverResolverQueryLoggingConfigAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getRoute53resolverResolverQueryLoggingConfigAssociation.
 */
export interface GetRoute53resolverResolverQueryLoggingConfigAssociationOutputArgs {
    id: pulumi.Input<string>;
}
