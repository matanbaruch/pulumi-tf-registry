// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInterfacesVlan(args?: GetInterfacesVlanArgs, opts?: pulumi.InvokeOptions): Promise<GetInterfacesVlanResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ciscoasa:index/getInterfacesVlan:getInterfacesVlan", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInterfacesVlan.
 */
export interface GetInterfacesVlanArgs {
    id?: string;
}

/**
 * A collection of values returned by getInterfacesVlan.
 */
export interface GetInterfacesVlanResult {
    readonly id: string;
    readonly interfacesVlans: outputs.GetInterfacesVlanInterfacesVlan[];
}
export function getInterfacesVlanOutput(args?: GetInterfacesVlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInterfacesVlanResult> {
    return pulumi.output(args).apply((a: any) => getInterfacesVlan(a, opts))
}

/**
 * A collection of arguments for invoking getInterfacesVlan.
 */
export interface GetInterfacesVlanOutputArgs {
    id?: pulumi.Input<string>;
}
