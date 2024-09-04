// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMongodb(args?: GetMongodbArgs, opts?: pulumi.InvokeOptions): Promise<GetMongodbResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ncloud:index/getMongodb:getMongodb", {
        "id": args.id,
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMongodb.
 */
export interface GetMongodbArgs {
    id?: string;
    serviceName?: string;
}

/**
 * A collection of values returned by getMongodb.
 */
export interface GetMongodbResult {
    readonly accessControlGroupNoLists: string[];
    readonly arbiterPort: number;
    readonly backupFileRetentionPeriod: number;
    readonly backupTime: string;
    readonly clusterTypeCode: string;
    readonly compressCode: string;
    readonly configPort: number;
    readonly dataStorageType: string;
    readonly engineVersion: string;
    readonly id: string;
    readonly imageProductCode: string;
    readonly memberPort: number;
    readonly mongodbServerLists: outputs.GetMongodbMongodbServerList[];
    readonly mongosPort: number;
    readonly regionCode: string;
    readonly serviceName: string;
    readonly shardCount: number;
    readonly subnetNo: string;
    readonly vpcNo: string;
    readonly zoneCode: string;
}
export function getMongodbOutput(args?: GetMongodbOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongodbResult> {
    return pulumi.output(args).apply((a: any) => getMongodb(a, opts))
}

/**
 * A collection of arguments for invoking getMongodb.
 */
export interface GetMongodbOutputArgs {
    id?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
}
