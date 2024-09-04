// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAlertSource(args: GetAlertSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ilert:index/getAlertSource:getAlertSource", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlertSource.
 */
export interface GetAlertSourceArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getAlertSource.
 */
export interface GetAlertSourceResult {
    readonly id: string;
    readonly integrationKey: string;
    readonly integrationUrl: string;
    readonly name: string;
    readonly status: string;
}
export function getAlertSourceOutput(args: GetAlertSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlertSourceResult> {
    return pulumi.output(args).apply((a: any) => getAlertSource(a, opts))
}

/**
 * A collection of arguments for invoking getAlertSource.
 */
export interface GetAlertSourceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
