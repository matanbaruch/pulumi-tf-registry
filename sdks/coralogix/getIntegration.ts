// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIntegration(args: GetIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("coralogix:index/getIntegration:getIntegration", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIntegration.
 */
export interface GetIntegrationArgs {
    id: string;
}

/**
 * A collection of values returned by getIntegration.
 */
export interface GetIntegrationResult {
    readonly id: string;
    readonly integrationKey: string;
    readonly parameters: any;
    readonly version: string;
}
export function getIntegrationOutput(args: GetIntegrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationResult> {
    return pulumi.output(args).apply((a: any) => getIntegration(a, opts))
}

/**
 * A collection of arguments for invoking getIntegration.
 */
export interface GetIntegrationOutputArgs {
    id: pulumi.Input<string>;
}
