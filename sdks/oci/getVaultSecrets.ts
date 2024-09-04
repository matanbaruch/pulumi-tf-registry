// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVaultSecrets(args: GetVaultSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getVaultSecrets:getVaultSecrets", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "state": args.state,
        "vaultId": args.vaultId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVaultSecrets.
 */
export interface GetVaultSecretsArgs {
    compartmentId: string;
    filters?: inputs.GetVaultSecretsFilter[];
    id?: string;
    name?: string;
    state?: string;
    vaultId?: string;
}

/**
 * A collection of values returned by getVaultSecrets.
 */
export interface GetVaultSecretsResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetVaultSecretsFilter[];
    readonly id: string;
    readonly name?: string;
    readonly secrets: outputs.GetVaultSecretsSecret[];
    readonly state?: string;
    readonly vaultId?: string;
}
export function getVaultSecretsOutput(args: GetVaultSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVaultSecretsResult> {
    return pulumi.output(args).apply((a: any) => getVaultSecrets(a, opts))
}

/**
 * A collection of arguments for invoking getVaultSecrets.
 */
export interface GetVaultSecretsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetVaultSecretsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    vaultId?: pulumi.Input<string>;
}
