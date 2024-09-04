// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getProfileDecryption(args: GetProfileDecryptionArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileDecryptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ciscomcd:index/getProfileDecryption:getProfileDecryption", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProfileDecryption.
 */
export interface GetProfileDecryptionArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getProfileDecryption.
 */
export interface GetProfileDecryptionResult {
    readonly id: string;
    readonly name: string;
}
export function getProfileDecryptionOutput(args: GetProfileDecryptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProfileDecryptionResult> {
    return pulumi.output(args).apply((a: any) => getProfileDecryption(a, opts))
}

/**
 * A collection of arguments for invoking getProfileDecryption.
 */
export interface GetProfileDecryptionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
