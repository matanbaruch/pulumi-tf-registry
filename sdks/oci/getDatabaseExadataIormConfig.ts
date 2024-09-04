// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseExadataIormConfig(args: GetDatabaseExadataIormConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseExadataIormConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseExadataIormConfig:getDatabaseExadataIormConfig", {
        "dbSystemId": args.dbSystemId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseExadataIormConfig.
 */
export interface GetDatabaseExadataIormConfigArgs {
    dbSystemId: string;
}

/**
 * A collection of values returned by getDatabaseExadataIormConfig.
 */
export interface GetDatabaseExadataIormConfigResult {
    readonly dbPlans: outputs.GetDatabaseExadataIormConfigDbPlan[];
    readonly dbSystemId: string;
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly objective: string;
    readonly state: string;
}
export function getDatabaseExadataIormConfigOutput(args: GetDatabaseExadataIormConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseExadataIormConfigResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseExadataIormConfig(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseExadataIormConfig.
 */
export interface GetDatabaseExadataIormConfigOutputArgs {
    dbSystemId: pulumi.Input<string>;
}
