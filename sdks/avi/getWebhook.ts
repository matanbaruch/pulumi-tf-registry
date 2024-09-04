// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWebhook(args?: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getWebhook:getWebhook", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWebhook.
 */
export interface GetWebhookArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getWebhook.
 */
export interface GetWebhookResult {
    readonly callbackUrl: string;
    readonly configpbAttributes: outputs.GetWebhookConfigpbAttribute[];
    readonly description: string;
    readonly id: string;
    readonly markers: outputs.GetWebhookMarker[];
    readonly name: string;
    readonly tenantRef: string;
    readonly uuid: string;
    readonly verificationToken: string;
}
export function getWebhookOutput(args?: GetWebhookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebhookResult> {
    return pulumi.output(args).apply((a: any) => getWebhook(a, opts))
}

/**
 * A collection of arguments for invoking getWebhook.
 */
export interface GetWebhookOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
