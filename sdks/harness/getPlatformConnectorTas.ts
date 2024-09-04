// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlatformConnectorTas(args: GetPlatformConnectorTasArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformConnectorTasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformConnectorTas:getPlatformConnectorTas", {
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformConnectorTas.
 */
export interface GetPlatformConnectorTasArgs {
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformConnectorTas.
 */
export interface GetPlatformConnectorTasResult {
    readonly credentials: outputs.GetPlatformConnectorTasCredential[];
    readonly delegateSelectors: string[];
    readonly description: string;
    readonly executeOnDelegate: boolean;
    readonly id: string;
    readonly identifier: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly tags: string[];
}
export function getPlatformConnectorTasOutput(args: GetPlatformConnectorTasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformConnectorTasResult> {
    return pulumi.output(args).apply((a: any) => getPlatformConnectorTas(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformConnectorTas.
 */
export interface GetPlatformConnectorTasOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
