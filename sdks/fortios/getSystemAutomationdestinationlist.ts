// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemAutomationdestinationlist(args?: GetSystemAutomationdestinationlistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemAutomationdestinationlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemAutomationdestinationlist:getSystemAutomationdestinationlist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemAutomationdestinationlist.
 */
export interface GetSystemAutomationdestinationlistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemAutomationdestinationlist.
 */
export interface GetSystemAutomationdestinationlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getSystemAutomationdestinationlistOutput(args?: GetSystemAutomationdestinationlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemAutomationdestinationlistResult> {
    return pulumi.output(args).apply((a: any) => getSystemAutomationdestinationlist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemAutomationdestinationlist.
 */
export interface GetSystemAutomationdestinationlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
