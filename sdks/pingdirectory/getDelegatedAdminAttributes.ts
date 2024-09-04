// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDelegatedAdminAttributes(args: GetDelegatedAdminAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetDelegatedAdminAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getDelegatedAdminAttributes:getDelegatedAdminAttributes", {
        "filter": args.filter,
        "restResourceTypeName": args.restResourceTypeName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDelegatedAdminAttributes.
 */
export interface GetDelegatedAdminAttributesArgs {
    filter?: string;
    restResourceTypeName: string;
}

/**
 * A collection of values returned by getDelegatedAdminAttributes.
 */
export interface GetDelegatedAdminAttributesResult {
    readonly filter?: string;
    readonly id: string;
    readonly objects: outputs.GetDelegatedAdminAttributesObject[];
    readonly restResourceTypeName: string;
}
export function getDelegatedAdminAttributesOutput(args: GetDelegatedAdminAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDelegatedAdminAttributesResult> {
    return pulumi.output(args).apply((a: any) => getDelegatedAdminAttributes(a, opts))
}

/**
 * A collection of arguments for invoking getDelegatedAdminAttributes.
 */
export interface GetDelegatedAdminAttributesOutputArgs {
    filter?: pulumi.Input<string>;
    restResourceTypeName: pulumi.Input<string>;
}
