// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPrivileges(args?: GetPrivilegesArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivilegesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("googleworkspace:index/getPrivileges:getPrivileges", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrivileges.
 */
export interface GetPrivilegesArgs {
    id?: string;
}

/**
 * A collection of values returned by getPrivileges.
 */
export interface GetPrivilegesResult {
    readonly etag: string;
    readonly id: string;
    readonly items: outputs.GetPrivilegesItem[];
}
export function getPrivilegesOutput(args?: GetPrivilegesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivilegesResult> {
    return pulumi.output(args).apply((a: any) => getPrivileges(a, opts))
}

/**
 * A collection of arguments for invoking getPrivileges.
 */
export interface GetPrivilegesOutputArgs {
    id?: pulumi.Input<string>;
}
