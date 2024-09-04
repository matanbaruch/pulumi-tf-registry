// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getActionConfiguration(args: GetActionConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetActionConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("authsignal:index/getActionConfiguration:getActionConfiguration", {
        "actionCode": args.actionCode,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getActionConfiguration.
 */
export interface GetActionConfigurationArgs {
    actionCode: string;
}

/**
 * A collection of values returned by getActionConfiguration.
 */
export interface GetActionConfigurationResult {
    readonly actionCode: string;
    readonly defaultUserActionResult: string;
    readonly defaultVerificationMethod: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly lastActionCreatedAt: string;
    readonly messagingTemplates: string;
    readonly promptToEnrollVerificationMethods: string[];
    readonly tenantId: string;
    readonly verificationMethods: string[];
}
export function getActionConfigurationOutput(args: GetActionConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getActionConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getActionConfiguration.
 */
export interface GetActionConfigurationOutputArgs {
    actionCode: pulumi.Input<string>;
}
