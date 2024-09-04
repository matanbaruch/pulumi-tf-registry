// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getObsStorages(args: GetObsStoragesArgs, opts?: pulumi.InvokeOptions): Promise<GetObsStoragesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getObsStorages:getObsStorages", {
        "id": args.id,
        "isMultiAvailabilityZone": args.isMultiAvailabilityZone,
        "objectStorageName": args.objectStorageName,
        "page": args.page,
        "serviceZoneId": args.serviceZoneId,
        "size": args.size,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getObsStorages.
 */
export interface GetObsStoragesArgs {
    id?: string;
    isMultiAvailabilityZone?: boolean;
    objectStorageName?: string;
    page?: number;
    serviceZoneId: string;
    size?: number;
    sorts?: string[];
}

/**
 * A collection of values returned by getObsStorages.
 */
export interface GetObsStoragesResult {
    readonly contents: outputs.GetObsStoragesContent[];
    readonly id: string;
    readonly isMultiAvailabilityZone?: boolean;
    readonly objectStorageName?: string;
    readonly page?: number;
    readonly serviceZoneId: string;
    readonly size?: number;
    readonly sorts?: string[];
    readonly totalCount: number;
}
export function getObsStoragesOutput(args: GetObsStoragesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObsStoragesResult> {
    return pulumi.output(args).apply((a: any) => getObsStorages(a, opts))
}

/**
 * A collection of arguments for invoking getObsStorages.
 */
export interface GetObsStoragesOutputArgs {
    id?: pulumi.Input<string>;
    isMultiAvailabilityZone?: pulumi.Input<boolean>;
    objectStorageName?: pulumi.Input<string>;
    page?: pulumi.Input<number>;
    serviceZoneId: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    sorts?: pulumi.Input<pulumi.Input<string>[]>;
}
