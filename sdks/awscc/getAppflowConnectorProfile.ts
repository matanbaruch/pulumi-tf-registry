// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppflowConnectorProfile(args: GetAppflowConnectorProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetAppflowConnectorProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAppflowConnectorProfile:getAppflowConnectorProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppflowConnectorProfile.
 */
export interface GetAppflowConnectorProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getAppflowConnectorProfile.
 */
export interface GetAppflowConnectorProfileResult {
    readonly connectionMode: string;
    readonly connectorLabel: string;
    readonly connectorProfileArn: string;
    readonly connectorProfileConfig: outputs.GetAppflowConnectorProfileConnectorProfileConfig;
    readonly connectorProfileName: string;
    readonly connectorType: string;
    readonly credentialsArn: string;
    readonly id: string;
    readonly kmsArn: string;
}
export function getAppflowConnectorProfileOutput(args: GetAppflowConnectorProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppflowConnectorProfileResult> {
    return pulumi.output(args).apply((a: any) => getAppflowConnectorProfile(a, opts))
}

/**
 * A collection of arguments for invoking getAppflowConnectorProfile.
 */
export interface GetAppflowConnectorProfileOutputArgs {
    id: pulumi.Input<string>;
}
