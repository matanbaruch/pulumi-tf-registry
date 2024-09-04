// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotsitewisePortal(args: GetIotsitewisePortalArgs, opts?: pulumi.InvokeOptions): Promise<GetIotsitewisePortalResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotsitewisePortal:getIotsitewisePortal", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotsitewisePortal.
 */
export interface GetIotsitewisePortalArgs {
    id: string;
}

/**
 * A collection of values returned by getIotsitewisePortal.
 */
export interface GetIotsitewisePortalResult {
    readonly alarms: outputs.GetIotsitewisePortalAlarms;
    readonly id: string;
    readonly notificationSenderEmail: string;
    readonly portalArn: string;
    readonly portalAuthMode: string;
    readonly portalClientId: string;
    readonly portalContactEmail: string;
    readonly portalDescription: string;
    readonly portalId: string;
    readonly portalName: string;
    readonly portalStartUrl: string;
    readonly roleArn: string;
    readonly tags: outputs.GetIotsitewisePortalTag[];
}
export function getIotsitewisePortalOutput(args: GetIotsitewisePortalOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotsitewisePortalResult> {
    return pulumi.output(args).apply((a: any) => getIotsitewisePortal(a, opts))
}

/**
 * A collection of arguments for invoking getIotsitewisePortal.
 */
export interface GetIotsitewisePortalOutputArgs {
    id: pulumi.Input<string>;
}
