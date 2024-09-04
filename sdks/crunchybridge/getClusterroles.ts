// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClusterroles(args: GetClusterrolesArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterrolesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("crunchybridge:index/getClusterroles:getClusterroles", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterroles.
 */
export interface GetClusterrolesArgs {
    id: string;
}

/**
 * A collection of values returned by getClusterroles.
 */
export interface GetClusterrolesResult {
    readonly application: {[key: string]: string};
    readonly id: string;
    readonly superuser: {[key: string]: string};
    readonly userRoles: outputs.GetClusterrolesUserRole[];
}
export function getClusterrolesOutput(args: GetClusterrolesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterrolesResult> {
    return pulumi.output(args).apply((a: any) => getClusterroles(a, opts))
}

/**
 * A collection of arguments for invoking getClusterroles.
 */
export interface GetClusterrolesOutputArgs {
    id: pulumi.Input<string>;
}
