// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKmsKey(args: GetKmsKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getKmsKey:getKmsKey", {
        "grantTokens": args.grantTokens,
        "id": args.id,
        "keyId": args.keyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsKey.
 */
export interface GetKmsKeyArgs {
    grantTokens?: string[];
    id?: string;
    keyId: string;
}

/**
 * A collection of values returned by getKmsKey.
 */
export interface GetKmsKeyResult {
    readonly arn: string;
    readonly awsAccountId: string;
    readonly cloudHsmClusterId: string;
    readonly creationDate: string;
    readonly customKeyStoreId: string;
    readonly customerMasterKeySpec: string;
    readonly deletionDate: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly expirationModel: string;
    readonly grantTokens?: string[];
    readonly id: string;
    readonly keyId: string;
    readonly keyManager: string;
    readonly keySpec: string;
    readonly keyState: string;
    readonly keyUsage: string;
    readonly multiRegion: boolean;
    readonly multiRegionConfigurations: outputs.GetKmsKeyMultiRegionConfiguration[];
    readonly origin: string;
    readonly pendingDeletionWindowInDays: number;
    readonly validTo: string;
    readonly xksKeyConfigurations: outputs.GetKmsKeyXksKeyConfiguration[];
}
export function getKmsKeyOutput(args: GetKmsKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsKeyResult> {
    return pulumi.output(args).apply((a: any) => getKmsKey(a, opts))
}

/**
 * A collection of arguments for invoking getKmsKey.
 */
export interface GetKmsKeyOutputArgs {
    grantTokens?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    keyId: pulumi.Input<string>;
}
