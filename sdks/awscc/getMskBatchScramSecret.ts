// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMskBatchScramSecret(args: GetMskBatchScramSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetMskBatchScramSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMskBatchScramSecret:getMskBatchScramSecret", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMskBatchScramSecret.
 */
export interface GetMskBatchScramSecretArgs {
    id: string;
}

/**
 * A collection of values returned by getMskBatchScramSecret.
 */
export interface GetMskBatchScramSecretResult {
    readonly clusterArn: string;
    readonly id: string;
    readonly secretArnLists: string[];
}
export function getMskBatchScramSecretOutput(args: GetMskBatchScramSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMskBatchScramSecretResult> {
    return pulumi.output(args).apply((a: any) => getMskBatchScramSecret(a, opts))
}

/**
 * A collection of arguments for invoking getMskBatchScramSecret.
 */
export interface GetMskBatchScramSecretOutputArgs {
    id: pulumi.Input<string>;
}
