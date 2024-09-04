// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAddress(args: GetAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetAddressResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("secretsmanager:index/getAddress:getAddress", {
        "id": args.id,
        "path": args.path,
        "title": args.title,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAddress.
 */
export interface GetAddressArgs {
    id?: string;
    path: string;
    title?: string;
}

/**
 * A collection of values returned by getAddress.
 */
export interface GetAddressResult {
    readonly addresses: outputs.GetAddressAddress[];
    readonly fileReves: outputs.GetAddressFileRef[];
    readonly id: string;
    readonly notes: string;
    readonly path: string;
    readonly title?: string;
    readonly type: string;
}
export function getAddressOutput(args: GetAddressOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAddressResult> {
    return pulumi.output(args).apply((a: any) => getAddress(a, opts))
}

/**
 * A collection of arguments for invoking getAddress.
 */
export interface GetAddressOutputArgs {
    id?: pulumi.Input<string>;
    path: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}
