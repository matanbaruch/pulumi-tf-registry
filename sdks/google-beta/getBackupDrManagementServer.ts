// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBackupDrManagementServer(args: GetBackupDrManagementServerArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupDrManagementServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getBackupDrManagementServer:getBackupDrManagementServer", {
        "id": args.id,
        "location": args.location,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackupDrManagementServer.
 */
export interface GetBackupDrManagementServerArgs {
    id?: string;
    location: string;
}

/**
 * A collection of values returned by getBackupDrManagementServer.
 */
export interface GetBackupDrManagementServerResult {
    readonly id: string;
    readonly location: string;
    readonly managementUris: outputs.GetBackupDrManagementServerManagementUri[];
    readonly name: string;
    readonly networks: outputs.GetBackupDrManagementServerNetwork[];
    readonly oauth2ClientId: string;
    readonly project: string;
    readonly type: string;
}
export function getBackupDrManagementServerOutput(args: GetBackupDrManagementServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupDrManagementServerResult> {
    return pulumi.output(args).apply((a: any) => getBackupDrManagementServer(a, opts))
}

/**
 * A collection of arguments for invoking getBackupDrManagementServer.
 */
export interface GetBackupDrManagementServerOutputArgs {
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
}
