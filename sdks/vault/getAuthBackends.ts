// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAuthBackends(args?: GetAuthBackendsArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthBackendsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vault:index/getAuthBackends:getAuthBackends", {
        "id": args.id,
        "namespace": args.namespace,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAuthBackends.
 */
export interface GetAuthBackendsArgs {
    id?: string;
    namespace?: string;
    type?: string;
}

/**
 * A collection of values returned by getAuthBackends.
 */
export interface GetAuthBackendsResult {
    readonly accessors: string[];
    readonly id: string;
    readonly namespace?: string;
    readonly paths: string[];
    readonly type?: string;
}
export function getAuthBackendsOutput(args?: GetAuthBackendsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthBackendsResult> {
    return pulumi.output(args).apply((a: any) => getAuthBackends(a, opts))
}

/**
 * A collection of arguments for invoking getAuthBackends.
 */
export interface GetAuthBackendsOutputArgs {
    id?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
