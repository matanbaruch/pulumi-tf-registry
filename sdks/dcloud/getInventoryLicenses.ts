// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInventoryLicenses(args: GetInventoryLicensesArgs, opts?: pulumi.InvokeOptions): Promise<GetInventoryLicensesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dcloud:index/getInventoryLicenses:getInventoryLicenses", {
        "id": args.id,
        "topologyUid": args.topologyUid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInventoryLicenses.
 */
export interface GetInventoryLicensesArgs {
    id?: string;
    topologyUid: string;
}

/**
 * A collection of values returned by getInventoryLicenses.
 */
export interface GetInventoryLicensesResult {
    readonly id: string;
    readonly inventoryLicenses: outputs.GetInventoryLicensesInventoryLicense[];
    readonly topologyUid: string;
}
export function getInventoryLicensesOutput(args: GetInventoryLicensesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInventoryLicensesResult> {
    return pulumi.output(args).apply((a: any) => getInventoryLicenses(a, opts))
}

/**
 * A collection of arguments for invoking getInventoryLicenses.
 */
export interface GetInventoryLicensesOutputArgs {
    id?: pulumi.Input<string>;
    topologyUid: pulumi.Input<string>;
}
