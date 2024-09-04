// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getJsonAttributeConstraints(args: GetJsonAttributeConstraintsArgs, opts?: pulumi.InvokeOptions): Promise<GetJsonAttributeConstraintsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getJsonAttributeConstraints:getJsonAttributeConstraints", {
        "attributeType": args.attributeType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getJsonAttributeConstraints.
 */
export interface GetJsonAttributeConstraintsArgs {
    attributeType: string;
}

/**
 * A collection of values returned by getJsonAttributeConstraints.
 */
export interface GetJsonAttributeConstraintsResult {
    readonly allowUnnamedFields: boolean;
    readonly attributeType: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly id: string;
    readonly type: string;
}
export function getJsonAttributeConstraintsOutput(args: GetJsonAttributeConstraintsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJsonAttributeConstraintsResult> {
    return pulumi.output(args).apply((a: any) => getJsonAttributeConstraints(a, opts))
}

/**
 * A collection of arguments for invoking getJsonAttributeConstraints.
 */
export interface GetJsonAttributeConstraintsOutputArgs {
    attributeType: pulumi.Input<string>;
}
