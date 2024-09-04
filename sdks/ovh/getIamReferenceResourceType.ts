// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIamReferenceResourceType(args?: GetIamReferenceResourceTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetIamReferenceResourceTypeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getIamReferenceResourceType:getIamReferenceResourceType", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamReferenceResourceType.
 */
export interface GetIamReferenceResourceTypeArgs {
    id?: string;
}

/**
 * A collection of values returned by getIamReferenceResourceType.
 */
export interface GetIamReferenceResourceTypeResult {
    readonly id: string;
    readonly types: string[];
}
export function getIamReferenceResourceTypeOutput(args?: GetIamReferenceResourceTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamReferenceResourceTypeResult> {
    return pulumi.output(args).apply((a: any) => getIamReferenceResourceType(a, opts))
}

/**
 * A collection of arguments for invoking getIamReferenceResourceType.
 */
export interface GetIamReferenceResourceTypeOutputArgs {
    id?: pulumi.Input<string>;
}
