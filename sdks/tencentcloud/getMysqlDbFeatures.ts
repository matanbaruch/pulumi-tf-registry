// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMysqlDbFeatures(args: GetMysqlDbFeaturesArgs, opts?: pulumi.InvokeOptions): Promise<GetMysqlDbFeaturesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMysqlDbFeatures:getMysqlDbFeatures", {
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMysqlDbFeatures.
 */
export interface GetMysqlDbFeaturesArgs {
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getMysqlDbFeatures.
 */
export interface GetMysqlDbFeaturesResult {
    readonly auditNeedUpgrade: boolean;
    readonly currentSubVersion: string;
    readonly encryptionNeedUpgrade: boolean;
    readonly id: string;
    readonly instanceId: string;
    readonly isRemoteRo: boolean;
    readonly isSupportAudit: boolean;
    readonly isSupportEncryption: boolean;
    readonly isSupportUpdateSubVersion: boolean;
    readonly masterRegion: string;
    readonly resultOutputFile?: string;
    readonly targetSubVersion: string;
}
export function getMysqlDbFeaturesOutput(args: GetMysqlDbFeaturesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMysqlDbFeaturesResult> {
    return pulumi.output(args).apply((a: any) => getMysqlDbFeatures(a, opts))
}

/**
 * A collection of arguments for invoking getMysqlDbFeatures.
 */
export interface GetMysqlDbFeaturesOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
