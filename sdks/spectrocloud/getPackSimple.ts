// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPackSimple(args: GetPackSimpleArgs, opts?: pulumi.InvokeOptions): Promise<GetPackSimpleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("spectrocloud:index/getPackSimple:getPackSimple", {
        "context": args.context,
        "id": args.id,
        "name": args.name,
        "registryUid": args.registryUid,
        "type": args.type,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPackSimple.
 */
export interface GetPackSimpleArgs {
    context?: string;
    id?: string;
    name: string;
    registryUid?: string;
    type: string;
    version?: string;
}

/**
 * A collection of values returned by getPackSimple.
 */
export interface GetPackSimpleResult {
    readonly context?: string;
    readonly id: string;
    readonly name: string;
    readonly registryUid?: string;
    readonly type: string;
    readonly values: string;
    readonly version?: string;
}
export function getPackSimpleOutput(args: GetPackSimpleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPackSimpleResult> {
    return pulumi.output(args).apply((a: any) => getPackSimple(a, opts))
}

/**
 * A collection of arguments for invoking getPackSimple.
 */
export interface GetPackSimpleOutputArgs {
    context?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    registryUid?: pulumi.Input<string>;
    type: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
