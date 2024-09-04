// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKmsReplicaKey(args: GetKmsReplicaKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsReplicaKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getKmsReplicaKey:getKmsReplicaKey", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsReplicaKey.
 */
export interface GetKmsReplicaKeyArgs {
    id: string;
}

/**
 * A collection of values returned by getKmsReplicaKey.
 */
export interface GetKmsReplicaKeyResult {
    readonly arn: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly id: string;
    readonly keyId: string;
    readonly keyPolicy: string;
    readonly pendingWindowInDays: number;
    readonly primaryKeyArn: string;
    readonly tags: outputs.GetKmsReplicaKeyTag[];
}
export function getKmsReplicaKeyOutput(args: GetKmsReplicaKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsReplicaKeyResult> {
    return pulumi.output(args).apply((a: any) => getKmsReplicaKey(a, opts))
}

/**
 * A collection of arguments for invoking getKmsReplicaKey.
 */
export interface GetKmsReplicaKeyOutputArgs {
    id: pulumi.Input<string>;
}
