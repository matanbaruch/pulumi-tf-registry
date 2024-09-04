// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getExtendedAcl(args: GetExtendedAclArgs, opts?: pulumi.InvokeOptions): Promise<GetExtendedAclResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fmc:index/getExtendedAcl:getExtendedAcl", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExtendedAcl.
 */
export interface GetExtendedAclArgs {
    name: string;
}

/**
 * A collection of values returned by getExtendedAcl.
 */
export interface GetExtendedAclResult {
    readonly id: string;
    readonly name: string;
    readonly type: string;
}
export function getExtendedAclOutput(args: GetExtendedAclOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtendedAclResult> {
    return pulumi.output(args).apply((a: any) => getExtendedAcl(a, opts))
}

/**
 * A collection of arguments for invoking getExtendedAcl.
 */
export interface GetExtendedAclOutputArgs {
    name: pulumi.Input<string>;
}
