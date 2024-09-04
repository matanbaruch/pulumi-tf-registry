// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKeys(args?: GetKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetKeysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("consul:index/getKeys:getKeys", {
        "datacenter": args.datacenter,
        "errorOnMissingKeys": args.errorOnMissingKeys,
        "id": args.id,
        "keys": args.keys,
        "namespace": args.namespace,
        "partition": args.partition,
        "token": args.token,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKeys.
 */
export interface GetKeysArgs {
    datacenter?: string;
    errorOnMissingKeys?: boolean;
    id?: string;
    keys?: inputs.GetKeysKey[];
    namespace?: string;
    partition?: string;
    /**
     * @deprecated Deprecated
     */
    token?: string;
}

/**
 * A collection of values returned by getKeys.
 */
export interface GetKeysResult {
    readonly datacenter: string;
    readonly errorOnMissingKeys?: boolean;
    readonly id: string;
    readonly keys?: outputs.GetKeysKey[];
    readonly namespace?: string;
    readonly partition?: string;
    /**
     * @deprecated Deprecated
     */
    readonly token?: string;
    readonly var: {[key: string]: string};
}
export function getKeysOutput(args?: GetKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeysResult> {
    return pulumi.output(args).apply((a: any) => getKeys(a, opts))
}

/**
 * A collection of arguments for invoking getKeys.
 */
export interface GetKeysOutputArgs {
    datacenter?: pulumi.Input<string>;
    errorOnMissingKeys?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    keys?: pulumi.Input<pulumi.Input<inputs.GetKeysKeyArgs>[]>;
    namespace?: pulumi.Input<string>;
    partition?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    token?: pulumi.Input<string>;
}
