// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecretsmanagerSecrets(args?: GetSecretsmanagerSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsmanagerSecretsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getSecretsmanagerSecrets:getSecretsmanagerSecrets", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecretsmanagerSecrets.
 */
export interface GetSecretsmanagerSecretsArgs {
    filters?: inputs.GetSecretsmanagerSecretsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getSecretsmanagerSecrets.
 */
export interface GetSecretsmanagerSecretsResult {
    readonly arns: string[];
    readonly filters?: outputs.GetSecretsmanagerSecretsFilter[];
    readonly id: string;
    readonly names: string[];
}
export function getSecretsmanagerSecretsOutput(args?: GetSecretsmanagerSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretsmanagerSecretsResult> {
    return pulumi.output(args).apply((a: any) => getSecretsmanagerSecrets(a, opts))
}

/**
 * A collection of arguments for invoking getSecretsmanagerSecrets.
 */
export interface GetSecretsmanagerSecretsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetSecretsmanagerSecretsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
