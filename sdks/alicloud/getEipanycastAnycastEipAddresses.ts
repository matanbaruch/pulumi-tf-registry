// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEipanycastAnycastEipAddresses(args?: GetEipanycastAnycastEipAddressesArgs, opts?: pulumi.InvokeOptions): Promise<GetEipanycastAnycastEipAddressesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEipanycastAnycastEipAddresses:getEipanycastAnycastEipAddresses", {
        "anycastEipAddressName": args.anycastEipAddressName,
        "bindInstanceIds": args.bindInstanceIds,
        "businessStatus": args.businessStatus,
        "id": args.id,
        "ids": args.ids,
        "internetChargeType": args.internetChargeType,
        "ipAddress": args.ipAddress,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "paymentType": args.paymentType,
        "serviceLocation": args.serviceLocation,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEipanycastAnycastEipAddresses.
 */
export interface GetEipanycastAnycastEipAddressesArgs {
    anycastEipAddressName?: string;
    bindInstanceIds?: string[];
    businessStatus?: string;
    id?: string;
    ids?: string[];
    internetChargeType?: string;
    ipAddress?: string;
    nameRegex?: string;
    outputFile?: string;
    paymentType?: string;
    serviceLocation?: string;
    status?: string;
}

/**
 * A collection of values returned by getEipanycastAnycastEipAddresses.
 */
export interface GetEipanycastAnycastEipAddressesResult {
    readonly addresses: outputs.GetEipanycastAnycastEipAddressesAddress[];
    readonly anycastEipAddressName?: string;
    readonly bindInstanceIds?: string[];
    readonly businessStatus?: string;
    readonly id: string;
    readonly ids: string[];
    readonly internetChargeType?: string;
    readonly ipAddress?: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly paymentType?: string;
    readonly serviceLocation?: string;
    readonly status?: string;
}
export function getEipanycastAnycastEipAddressesOutput(args?: GetEipanycastAnycastEipAddressesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEipanycastAnycastEipAddressesResult> {
    return pulumi.output(args).apply((a: any) => getEipanycastAnycastEipAddresses(a, opts))
}

/**
 * A collection of arguments for invoking getEipanycastAnycastEipAddresses.
 */
export interface GetEipanycastAnycastEipAddressesOutputArgs {
    anycastEipAddressName?: pulumi.Input<string>;
    bindInstanceIds?: pulumi.Input<pulumi.Input<string>[]>;
    businessStatus?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    internetChargeType?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    serviceLocation?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
