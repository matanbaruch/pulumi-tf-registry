// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotDeviceGroups(args?: GetIotDeviceGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDeviceGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getIotDeviceGroups:getIotDeviceGroups", {
        "enableDetails": args.enableDetails,
        "groupName": args.groupName,
        "id": args.id,
        "ids": args.ids,
        "iotInstanceId": args.iotInstanceId,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "superGroupId": args.superGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotDeviceGroups.
 */
export interface GetIotDeviceGroupsArgs {
    enableDetails?: boolean;
    groupName?: string;
    id?: string;
    ids?: string[];
    iotInstanceId?: string;
    nameRegex?: string;
    outputFile?: string;
    superGroupId?: string;
}

/**
 * A collection of values returned by getIotDeviceGroups.
 */
export interface GetIotDeviceGroupsResult {
    readonly enableDetails?: boolean;
    readonly groupName?: string;
    readonly groups: outputs.GetIotDeviceGroupsGroup[];
    readonly id: string;
    readonly ids: string[];
    readonly iotInstanceId?: string;
    readonly nameRegex?: string;
    readonly outputFile?: string;
    readonly superGroupId?: string;
}
export function getIotDeviceGroupsOutput(args?: GetIotDeviceGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotDeviceGroupsResult> {
    return pulumi.output(args).apply((a: any) => getIotDeviceGroups(a, opts))
}

/**
 * A collection of arguments for invoking getIotDeviceGroups.
 */
export interface GetIotDeviceGroupsOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    groupName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    iotInstanceId?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    superGroupId?: pulumi.Input<string>;
}
