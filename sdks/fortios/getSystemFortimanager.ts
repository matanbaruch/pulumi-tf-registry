// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemFortimanager(args?: GetSystemFortimanagerArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemFortimanagerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemFortimanager:getSystemFortimanager", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemFortimanager.
 */
export interface GetSystemFortimanagerArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemFortimanager.
 */
export interface GetSystemFortimanagerResult {
    readonly centralManagement: string;
    readonly centralMgmtAutoBackup: string;
    readonly centralMgmtScheduleConfigRestore: string;
    readonly centralMgmtScheduleScriptRestore: string;
    readonly id: string;
    readonly ip: string;
    readonly ipsec: string;
    readonly vdom: string;
    readonly vdomparam?: string;
}
export function getSystemFortimanagerOutput(args?: GetSystemFortimanagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemFortimanagerResult> {
    return pulumi.output(args).apply((a: any) => getSystemFortimanager(a, opts))
}

/**
 * A collection of arguments for invoking getSystemFortimanager.
 */
export interface GetSystemFortimanagerOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
