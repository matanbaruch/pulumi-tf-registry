// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOsqueryConfiguration(args?: GetOsqueryConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetOsqueryConfigurationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zentral:index/getOsqueryConfiguration:getOsqueryConfiguration", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsqueryConfiguration.
 */
export interface GetOsqueryConfigurationArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getOsqueryConfiguration.
 */
export interface GetOsqueryConfigurationResult {
    readonly atcIds: number[];
    readonly description: string;
    readonly fileCategoryIds: number[];
    readonly id?: number;
    readonly inventory: boolean;
    readonly inventoryApps: boolean;
    readonly inventoryEc2: boolean;
    readonly inventoryInterval: number;
    readonly name?: string;
    readonly options: {[key: string]: string};
}
export function getOsqueryConfigurationOutput(args?: GetOsqueryConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsqueryConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getOsqueryConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getOsqueryConfiguration.
 */
export interface GetOsqueryConfigurationOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
