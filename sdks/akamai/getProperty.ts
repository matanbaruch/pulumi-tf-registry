// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getProperty(args: GetPropertyArgs, opts?: pulumi.InvokeOptions): Promise<GetPropertyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getProperty:getProperty", {
        "id": args.id,
        "name": args.name,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProperty.
 */
export interface GetPropertyArgs {
    id?: string;
    name: string;
    version?: number;
}

/**
 * A collection of values returned by getProperty.
 */
export interface GetPropertyResult {
    readonly contractId: string;
    readonly groupId: string;
    readonly id: string;
    readonly latestVersion: number;
    readonly name: string;
    readonly note: string;
    readonly productId: string;
    readonly productionVersion: number;
    readonly propertyId: string;
    readonly ruleFormat: string;
    readonly rules: string;
    readonly stagingVersion: number;
    readonly version?: number;
}
export function getPropertyOutput(args: GetPropertyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPropertyResult> {
    return pulumi.output(args).apply((a: any) => getProperty(a, opts))
}

/**
 * A collection of arguments for invoking getProperty.
 */
export interface GetPropertyOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}
