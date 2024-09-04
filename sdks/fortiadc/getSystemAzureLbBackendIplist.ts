// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemAzureLbBackendIplist(args?: GetSystemAzureLbBackendIplistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemAzureLbBackendIplistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemAzureLbBackendIplist:getSystemAzureLbBackendIplist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemAzureLbBackendIplist.
 */
export interface GetSystemAzureLbBackendIplistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemAzureLbBackendIplist.
 */
export interface GetSystemAzureLbBackendIplistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getSystemAzureLbBackendIplistOutput(args?: GetSystemAzureLbBackendIplistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemAzureLbBackendIplistResult> {
    return pulumi.output(args).apply((a: any) => getSystemAzureLbBackendIplist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemAzureLbBackendIplist.
 */
export interface GetSystemAzureLbBackendIplistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
