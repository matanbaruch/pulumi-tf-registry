// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityCenterGroups(args?: GetSecurityCenterGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityCenterGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getSecurityCenterGroups:getSecurityCenterGroups", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityCenterGroups.
 */
export interface GetSecurityCenterGroupsArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getSecurityCenterGroups.
 */
export interface GetSecurityCenterGroupsResult {
    readonly groups: outputs.GetSecurityCenterGroupsGroup[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
}
export function getSecurityCenterGroupsOutput(args?: GetSecurityCenterGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityCenterGroupsResult> {
    return pulumi.output(args).apply((a: any) => getSecurityCenterGroups(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityCenterGroups.
 */
export interface GetSecurityCenterGroupsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
