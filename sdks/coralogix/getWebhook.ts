// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWebhook(args: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("coralogix:index/getWebhook:getWebhook", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWebhook.
 */
export interface GetWebhookArgs {
    id: string;
}

/**
 * A collection of values returned by getWebhook.
 */
export interface GetWebhookResult {
    readonly custom: outputs.GetWebhookCustom;
    readonly demisto: outputs.GetWebhookDemisto;
    readonly emailGroup: outputs.GetWebhookEmailGroup;
    readonly eventBridge: outputs.GetWebhookEventBridge;
    readonly externalId: string;
    readonly id: string;
    readonly jira: outputs.GetWebhookJira;
    readonly microsoftTeams: outputs.GetWebhookMicrosoftTeams;
    readonly microsoftTeamsWorkflow: outputs.GetWebhookMicrosoftTeamsWorkflow;
    readonly name: string;
    readonly opsgenie: outputs.GetWebhookOpsgenie;
    readonly pagerDuty: outputs.GetWebhookPagerDuty;
    readonly sendlog: outputs.GetWebhookSendlog;
    readonly slack: outputs.GetWebhookSlack;
}
export function getWebhookOutput(args: GetWebhookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebhookResult> {
    return pulumi.output(args).apply((a: any) => getWebhook(a, opts))
}

/**
 * A collection of arguments for invoking getWebhook.
 */
export interface GetWebhookOutputArgs {
    id: pulumi.Input<string>;
}
