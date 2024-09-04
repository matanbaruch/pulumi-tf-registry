// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecretsmanagerSecretVersion(args: GetSecretsmanagerSecretVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsmanagerSecretVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getSecretsmanagerSecretVersion:getSecretsmanagerSecretVersion", {
        "id": args.id,
        "secretId": args.secretId,
        "versionId": args.versionId,
        "versionStage": args.versionStage,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecretsmanagerSecretVersion.
 */
export interface GetSecretsmanagerSecretVersionArgs {
    id?: string;
    secretId: string;
    versionId?: string;
    versionStage?: string;
}

/**
 * A collection of values returned by getSecretsmanagerSecretVersion.
 */
export interface GetSecretsmanagerSecretVersionResult {
    readonly arn: string;
    readonly createdDate: string;
    readonly id: string;
    readonly secretBinary: string;
    readonly secretId: string;
    readonly secretString: string;
    readonly versionId: string;
    readonly versionStage?: string;
    readonly versionStages: string[];
}
export function getSecretsmanagerSecretVersionOutput(args: GetSecretsmanagerSecretVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretsmanagerSecretVersionResult> {
    return pulumi.output(args).apply((a: any) => getSecretsmanagerSecretVersion(a, opts))
}

/**
 * A collection of arguments for invoking getSecretsmanagerSecretVersion.
 */
export interface GetSecretsmanagerSecretVersionOutputArgs {
    id?: pulumi.Input<string>;
    secretId: pulumi.Input<string>;
    versionId?: pulumi.Input<string>;
    versionStage?: pulumi.Input<string>;
}
