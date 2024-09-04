// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlatformSecretText(args: GetPlatformSecretTextArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformSecretTextResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformSecretText:getPlatformSecretText", {
        "additionalMetadatas": args.additionalMetadatas,
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformSecretText.
 */
export interface GetPlatformSecretTextArgs {
    additionalMetadatas?: inputs.GetPlatformSecretTextAdditionalMetadata[];
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformSecretText.
 */
export interface GetPlatformSecretTextResult {
    readonly additionalMetadatas?: outputs.GetPlatformSecretTextAdditionalMetadata[];
    readonly description: string;
    readonly id: string;
    readonly identifier: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly secretManagerIdentifier: string;
    readonly tags: string[];
    readonly value: string;
    readonly valueType: string;
}
export function getPlatformSecretTextOutput(args: GetPlatformSecretTextOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformSecretTextResult> {
    return pulumi.output(args).apply((a: any) => getPlatformSecretText(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformSecretText.
 */
export interface GetPlatformSecretTextOutputArgs {
    additionalMetadatas?: pulumi.Input<pulumi.Input<inputs.GetPlatformSecretTextAdditionalMetadataArgs>[]>;
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
