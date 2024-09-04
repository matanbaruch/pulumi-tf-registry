// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRoute53ResolverQueryLogConfig(args?: GetRoute53ResolverQueryLogConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetRoute53ResolverQueryLogConfigResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRoute53ResolverQueryLogConfig:getRoute53ResolverQueryLogConfig", {
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "resolverQueryLogConfigId": args.resolverQueryLogConfigId,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoute53ResolverQueryLogConfig.
 */
export interface GetRoute53ResolverQueryLogConfigArgs {
    filters?: inputs.GetRoute53ResolverQueryLogConfigFilter[];
    id?: string;
    name?: string;
    resolverQueryLogConfigId?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getRoute53ResolverQueryLogConfig.
 */
export interface GetRoute53ResolverQueryLogConfigResult {
    readonly arn: string;
    readonly destinationArn: string;
    readonly filters?: outputs.GetRoute53ResolverQueryLogConfigFilter[];
    readonly id: string;
    readonly name?: string;
    readonly ownerId: string;
    readonly resolverQueryLogConfigId?: string;
    readonly shareStatus: string;
    readonly tags: {[key: string]: string};
}
export function getRoute53ResolverQueryLogConfigOutput(args?: GetRoute53ResolverQueryLogConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53ResolverQueryLogConfigResult> {
    return pulumi.output(args).apply((a: any) => getRoute53ResolverQueryLogConfig(a, opts))
}

/**
 * A collection of arguments for invoking getRoute53ResolverQueryLogConfig.
 */
export interface GetRoute53ResolverQueryLogConfigOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetRoute53ResolverQueryLogConfigFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resolverQueryLogConfigId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
