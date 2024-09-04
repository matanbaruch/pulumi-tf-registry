// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementSmartTaskTrigger(args?: GetManagementSmartTaskTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementSmartTaskTriggerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementSmartTaskTrigger:getManagementSmartTaskTrigger", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementSmartTaskTrigger.
 */
export interface GetManagementSmartTaskTriggerArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementSmartTaskTrigger.
 */
export interface GetManagementSmartTaskTriggerResult {
    readonly beforeOperation: boolean;
    readonly id: string;
    readonly name?: string;
    readonly type: string;
    readonly uid?: string;
}
export function getManagementSmartTaskTriggerOutput(args?: GetManagementSmartTaskTriggerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementSmartTaskTriggerResult> {
    return pulumi.output(args).apply((a: any) => getManagementSmartTaskTrigger(a, opts))
}

/**
 * A collection of arguments for invoking getManagementSmartTaskTrigger.
 */
export interface GetManagementSmartTaskTriggerOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
