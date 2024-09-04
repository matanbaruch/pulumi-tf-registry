// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApmTracesQueryQuickPicks(args: GetApmTracesQueryQuickPicksArgs, opts?: pulumi.InvokeOptions): Promise<GetApmTracesQueryQuickPicksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getApmTracesQueryQuickPicks:getApmTracesQueryQuickPicks", {
        "apmDomainId": args.apmDomainId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApmTracesQueryQuickPicks.
 */
export interface GetApmTracesQueryQuickPicksArgs {
    apmDomainId: string;
    filters?: inputs.GetApmTracesQueryQuickPicksFilter[];
    id?: string;
}

/**
 * A collection of values returned by getApmTracesQueryQuickPicks.
 */
export interface GetApmTracesQueryQuickPicksResult {
    readonly apmDomainId: string;
    readonly filters?: outputs.GetApmTracesQueryQuickPicksFilter[];
    readonly id: string;
    readonly quickPicks: outputs.GetApmTracesQueryQuickPicksQuickPick[];
}
export function getApmTracesQueryQuickPicksOutput(args: GetApmTracesQueryQuickPicksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApmTracesQueryQuickPicksResult> {
    return pulumi.output(args).apply((a: any) => getApmTracesQueryQuickPicks(a, opts))
}

/**
 * A collection of arguments for invoking getApmTracesQueryQuickPicks.
 */
export interface GetApmTracesQueryQuickPicksOutputArgs {
    apmDomainId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetApmTracesQueryQuickPicksFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
