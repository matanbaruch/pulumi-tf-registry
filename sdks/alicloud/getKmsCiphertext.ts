// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKmsCiphertext(args: GetKmsCiphertextArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsCiphertextResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getKmsCiphertext:getKmsCiphertext", {
        "encryptionContext": args.encryptionContext,
        "id": args.id,
        "keyId": args.keyId,
        "plaintext": args.plaintext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsCiphertext.
 */
export interface GetKmsCiphertextArgs {
    encryptionContext?: {[key: string]: string};
    id?: string;
    keyId: string;
    plaintext: string;
}

/**
 * A collection of values returned by getKmsCiphertext.
 */
export interface GetKmsCiphertextResult {
    readonly ciphertextBlob: string;
    readonly encryptionContext?: {[key: string]: string};
    readonly id: string;
    readonly keyId: string;
    readonly plaintext: string;
}
export function getKmsCiphertextOutput(args: GetKmsCiphertextOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsCiphertextResult> {
    return pulumi.output(args).apply((a: any) => getKmsCiphertext(a, opts))
}

/**
 * A collection of arguments for invoking getKmsCiphertext.
 */
export interface GetKmsCiphertextOutputArgs {
    encryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    id?: pulumi.Input<string>;
    keyId: pulumi.Input<string>;
    plaintext: pulumi.Input<string>;
}
