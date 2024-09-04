// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServergroup(args: GetServergroupArgs, opts?: pulumi.InvokeOptions): Promise<GetServergroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcore:index/getServergroup:getServergroup", {
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "projectName": args.projectName,
        "regionId": args.regionId,
        "regionName": args.regionName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServergroup.
 */
export interface GetServergroupArgs {
    id?: string;
    name: string;
    projectId?: number;
    projectName?: string;
    regionId?: number;
    regionName?: string;
}

/**
 * A collection of values returned by getServergroup.
 */
export interface GetServergroupResult {
    readonly id: string;
    readonly instances: outputs.GetServergroupInstance[];
    readonly name: string;
    readonly policy: string;
    readonly projectId?: number;
    readonly projectName?: string;
    readonly regionId?: number;
    readonly regionName?: string;
}
export function getServergroupOutput(args: GetServergroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServergroupResult> {
    return pulumi.output(args).apply((a: any) => getServergroup(a, opts))
}

/**
 * A collection of arguments for invoking getServergroup.
 */
export interface GetServergroupOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
}
