// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDashboard(args: GetDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetDashboardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dynatrace:index/getDashboard:getDashboard", {
        "id": args.id,
        "name": args.name,
        "owner": args.owner,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDashboard.
 */
export interface GetDashboardArgs {
    id?: string;
    name: string;
    owner: string;
}

/**
 * A collection of values returned by getDashboard.
 */
export interface GetDashboardResult {
    readonly id: string;
    readonly name: string;
    readonly owner: string;
}
export function getDashboardOutput(args: GetDashboardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDashboardResult> {
    return pulumi.output(args).apply((a: any) => getDashboard(a, opts))
}

/**
 * A collection of arguments for invoking getDashboard.
 */
export interface GetDashboardOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    owner: pulumi.Input<string>;
}
