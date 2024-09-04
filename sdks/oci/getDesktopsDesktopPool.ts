// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDesktopsDesktopPool(args: GetDesktopsDesktopPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetDesktopsDesktopPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDesktopsDesktopPool:getDesktopsDesktopPool", {
        "desktopPoolId": args.desktopPoolId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDesktopsDesktopPool.
 */
export interface GetDesktopsDesktopPoolArgs {
    desktopPoolId: string;
}

/**
 * A collection of values returned by getDesktopsDesktopPool.
 */
export interface GetDesktopsDesktopPoolResult {
    readonly activeDesktops: number;
    readonly arePrivilegedUsers: boolean;
    readonly availabilityDomain: string;
    readonly availabilityPolicies: outputs.GetDesktopsDesktopPoolAvailabilityPolicy[];
    readonly compartmentId: string;
    readonly contactDetails: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly desktopPoolId: string;
    readonly devicePolicies: outputs.GetDesktopsDesktopPoolDevicePolicy[];
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly images: outputs.GetDesktopsDesktopPoolImage[];
    readonly isStorageEnabled: boolean;
    readonly maximumSize: number;
    readonly networkConfigurations: outputs.GetDesktopsDesktopPoolNetworkConfiguration[];
    readonly nsgIds: string[];
    readonly shapeName: string;
    readonly standbySize: number;
    readonly state: string;
    readonly storageBackupPolicyId: string;
    readonly storageSizeInGbs: number;
    readonly timeCreated: string;
    readonly timeStartScheduled: string;
    readonly timeStopScheduled: string;
}
export function getDesktopsDesktopPoolOutput(args: GetDesktopsDesktopPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDesktopsDesktopPoolResult> {
    return pulumi.output(args).apply((a: any) => getDesktopsDesktopPool(a, opts))
}

/**
 * A collection of arguments for invoking getDesktopsDesktopPool.
 */
export interface GetDesktopsDesktopPoolOutputArgs {
    desktopPoolId: pulumi.Input<string>;
}
