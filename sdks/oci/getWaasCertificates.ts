// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWaasCertificates(args: GetWaasCertificatesArgs, opts?: pulumi.InvokeOptions): Promise<GetWaasCertificatesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getWaasCertificates:getWaasCertificates", {
        "compartmentId": args.compartmentId,
        "displayNames": args.displayNames,
        "filters": args.filters,
        "id": args.id,
        "ids": args.ids,
        "states": args.states,
        "timeCreatedGreaterThanOrEqualTo": args.timeCreatedGreaterThanOrEqualTo,
        "timeCreatedLessThan": args.timeCreatedLessThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWaasCertificates.
 */
export interface GetWaasCertificatesArgs {
    compartmentId: string;
    displayNames?: string[];
    filters?: inputs.GetWaasCertificatesFilter[];
    id?: string;
    ids?: string[];
    states?: string[];
    timeCreatedGreaterThanOrEqualTo?: string;
    timeCreatedLessThan?: string;
}

/**
 * A collection of values returned by getWaasCertificates.
 */
export interface GetWaasCertificatesResult {
    readonly certificates: outputs.GetWaasCertificatesCertificate[];
    readonly compartmentId: string;
    readonly displayNames?: string[];
    readonly filters?: outputs.GetWaasCertificatesFilter[];
    readonly id: string;
    readonly ids?: string[];
    readonly states?: string[];
    readonly timeCreatedGreaterThanOrEqualTo?: string;
    readonly timeCreatedLessThan?: string;
}
export function getWaasCertificatesOutput(args: GetWaasCertificatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWaasCertificatesResult> {
    return pulumi.output(args).apply((a: any) => getWaasCertificates(a, opts))
}

/**
 * A collection of arguments for invoking getWaasCertificates.
 */
export interface GetWaasCertificatesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayNames?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetWaasCertificatesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    states?: pulumi.Input<pulumi.Input<string>[]>;
    timeCreatedGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeCreatedLessThan?: pulumi.Input<string>;
}
