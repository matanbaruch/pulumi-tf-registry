// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getByoip(args: GetByoipArgs, opts?: pulumi.InvokeOptions): Promise<GetByoipResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alkira:index/getByoip:getByoip", {
        "id": args.id,
        "prefix": args.prefix,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getByoip.
 */
export interface GetByoipArgs {
    id?: string;
    prefix: string;
}

/**
 * A collection of values returned by getByoip.
 */
export interface GetByoipResult {
    readonly id: string;
    readonly prefix: string;
}
export function getByoipOutput(args: GetByoipOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetByoipResult> {
    return pulumi.output(args).apply((a: any) => getByoip(a, opts))
}

/**
 * A collection of arguments for invoking getByoip.
 */
export interface GetByoipOutputArgs {
    id?: pulumi.Input<string>;
    prefix: pulumi.Input<string>;
}
