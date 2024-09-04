// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getActionsEnvironmentSecrets(args: GetActionsEnvironmentSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetActionsEnvironmentSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getActionsEnvironmentSecrets:getActionsEnvironmentSecrets", {
        "environment": args.environment,
        "fullName": args.fullName,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getActionsEnvironmentSecrets.
 */
export interface GetActionsEnvironmentSecretsArgs {
    environment: string;
    fullName?: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getActionsEnvironmentSecrets.
 */
export interface GetActionsEnvironmentSecretsResult {
    readonly environment: string;
    readonly fullName: string;
    readonly id: string;
    readonly name: string;
    readonly secrets: outputs.GetActionsEnvironmentSecretsSecret[];
}
export function getActionsEnvironmentSecretsOutput(args: GetActionsEnvironmentSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionsEnvironmentSecretsResult> {
    return pulumi.output(args).apply((a: any) => getActionsEnvironmentSecrets(a, opts))
}

/**
 * A collection of arguments for invoking getActionsEnvironmentSecrets.
 */
export interface GetActionsEnvironmentSecretsOutputArgs {
    environment: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
