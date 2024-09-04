// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKmsSecrets(args: GetKmsSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getKmsSecrets:getKmsSecrets", {
        "id": args.id,
        "secrets": args.secrets,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsSecrets.
 */
export interface GetKmsSecretsArgs {
    id?: string;
    secrets: inputs.GetKmsSecretsSecret[];
}

/**
 * A collection of values returned by getKmsSecrets.
 */
export interface GetKmsSecretsResult {
    readonly id: string;
    readonly plaintext: {[key: string]: string};
    readonly secrets: outputs.GetKmsSecretsSecret[];
}
export function getKmsSecretsOutput(args: GetKmsSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsSecretsResult> {
    return pulumi.output(args).apply((a: any) => getKmsSecrets(a, opts))
}

/**
 * A collection of arguments for invoking getKmsSecrets.
 */
export interface GetKmsSecretsOutputArgs {
    id?: pulumi.Input<string>;
    secrets: pulumi.Input<pulumi.Input<inputs.GetKmsSecretsSecretArgs>[]>;
}
