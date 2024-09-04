// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getExtensionSchema(args: GetExtensionSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pagerduty:index/getExtensionSchema:getExtensionSchema", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExtensionSchema.
 */
export interface GetExtensionSchemaArgs {
    name: string;
}

/**
 * A collection of values returned by getExtensionSchema.
 */
export interface GetExtensionSchemaResult {
    readonly id: string;
    readonly name: string;
    readonly type: string;
}
export function getExtensionSchemaOutput(args: GetExtensionSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtensionSchemaResult> {
    return pulumi.output(args).apply((a: any) => getExtensionSchema(a, opts))
}

/**
 * A collection of arguments for invoking getExtensionSchema.
 */
export interface GetExtensionSchemaOutputArgs {
    name: pulumi.Input<string>;
}
