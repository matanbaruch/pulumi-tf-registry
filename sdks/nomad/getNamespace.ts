// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nomad:index/getNamespace:getNamespace", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNamespace.
 */
export interface GetNamespaceArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getNamespace.
 */
export interface GetNamespaceResult {
    readonly capabilities: outputs.GetNamespaceCapability[];
    readonly description: string;
    readonly id: string;
    readonly meta: {[key: string]: string};
    readonly name: string;
    readonly nodePoolConfigs: outputs.GetNamespaceNodePoolConfig[];
    readonly quota: string;
}
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getNamespace(a, opts))
}

/**
 * A collection of arguments for invoking getNamespace.
 */
export interface GetNamespaceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
