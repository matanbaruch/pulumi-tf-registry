// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAction(args: GetActionArgs, opts?: pulumi.InvokeOptions): Promise<GetActionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zitadel:index/getAction:getAction", {
        "actionId": args.actionId,
        "id": args.id,
        "orgId": args.orgId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAction.
 */
export interface GetActionArgs {
    actionId: string;
    id?: string;
    orgId?: string;
}

/**
 * A collection of values returned by getAction.
 */
export interface GetActionResult {
    readonly actionId: string;
    readonly allowedToFail: boolean;
    readonly id: string;
    readonly name: string;
    readonly orgId?: string;
    readonly script: string;
    readonly state: number;
    readonly timeout: string;
}
export function getActionOutput(args: GetActionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionResult> {
    return pulumi.output(args).apply((a: any) => getAction(a, opts))
}

/**
 * A collection of arguments for invoking getAction.
 */
export interface GetActionOutputArgs {
    actionId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
}
