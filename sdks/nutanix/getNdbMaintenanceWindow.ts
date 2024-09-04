// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNdbMaintenanceWindow(args: GetNdbMaintenanceWindowArgs, opts?: pulumi.InvokeOptions): Promise<GetNdbMaintenanceWindowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getNdbMaintenanceWindow:getNdbMaintenanceWindow", {
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNdbMaintenanceWindow.
 */
export interface GetNdbMaintenanceWindowArgs {
    id: string;
    tags?: inputs.GetNdbMaintenanceWindowTag[];
}

/**
 * A collection of values returned by getNdbMaintenanceWindow.
 */
export interface GetNdbMaintenanceWindowResult {
    readonly accessLevel: string;
    readonly dateCreated: string;
    readonly dateModified: string;
    readonly description: string;
    readonly entityTaskAssocs: outputs.GetNdbMaintenanceWindowEntityTaskAssoc[];
    readonly id: string;
    readonly name: string;
    readonly nextRunTime: string;
    readonly ownerId: string;
    readonly properties: outputs.GetNdbMaintenanceWindowProperty[];
    readonly schedules: outputs.GetNdbMaintenanceWindowSchedule[];
    readonly status: string;
    readonly tags?: outputs.GetNdbMaintenanceWindowTag[];
    readonly timezone: string;
}
export function getNdbMaintenanceWindowOutput(args: GetNdbMaintenanceWindowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNdbMaintenanceWindowResult> {
    return pulumi.output(args).apply((a: any) => getNdbMaintenanceWindow(a, opts))
}

/**
 * A collection of arguments for invoking getNdbMaintenanceWindow.
 */
export interface GetNdbMaintenanceWindowOutputArgs {
    id: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNdbMaintenanceWindowTagArgs>[]>;
}
