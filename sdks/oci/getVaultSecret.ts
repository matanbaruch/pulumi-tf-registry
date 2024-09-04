// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVaultSecret(args: GetVaultSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getVaultSecret:getVaultSecret", {
        "secretId": args.secretId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVaultSecret.
 */
export interface GetVaultSecretArgs {
    secretId: string;
}

/**
 * A collection of values returned by getVaultSecret.
 */
export interface GetVaultSecretResult {
    readonly compartmentId: string;
    readonly currentVersionNumber: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly keyId: string;
    readonly lastRotationTime: string;
    readonly lifecycleDetails: string;
    readonly metadata: {[key: string]: string};
    readonly nextRotationTime: string;
    readonly rotationConfigs: outputs.GetVaultSecretRotationConfig[];
    readonly rotationStatus: string;
    readonly secretContents: outputs.GetVaultSecretSecretContent[];
    readonly secretId: string;
    readonly secretName: string;
    readonly secretRules: outputs.GetVaultSecretSecretRule[];
    readonly state: string;
    readonly timeCreated: string;
    readonly timeOfCurrentVersionExpiry: string;
    readonly timeOfDeletion: string;
    readonly vaultId: string;
}
export function getVaultSecretOutput(args: GetVaultSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVaultSecretResult> {
    return pulumi.output(args).apply((a: any) => getVaultSecret(a, opts))
}

/**
 * A collection of arguments for invoking getVaultSecret.
 */
export interface GetVaultSecretOutputArgs {
    secretId: pulumi.Input<string>;
}
