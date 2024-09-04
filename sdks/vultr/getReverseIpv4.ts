// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getReverseIpv4(args?: GetReverseIpv4Args, opts?: pulumi.InvokeOptions): Promise<GetReverseIpv4Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vultr:index/getReverseIpv4:getReverseIpv4", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getReverseIpv4.
 */
export interface GetReverseIpv4Args {
    filters?: inputs.GetReverseIpv4Filter[];
    id?: string;
}

/**
 * A collection of values returned by getReverseIpv4.
 */
export interface GetReverseIpv4Result {
    readonly filters?: outputs.GetReverseIpv4Filter[];
    readonly gateway: string;
    readonly id: string;
    readonly instanceId: string;
    readonly ip: string;
    readonly netmask: string;
    readonly reverse: string;
}
export function getReverseIpv4Output(args?: GetReverseIpv4OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReverseIpv4Result> {
    return pulumi.output(args).apply((a: any) => getReverseIpv4(a, opts))
}

/**
 * A collection of arguments for invoking getReverseIpv4.
 */
export interface GetReverseIpv4OutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetReverseIpv4FilterArgs>[]>;
    id?: pulumi.Input<string>;
}
