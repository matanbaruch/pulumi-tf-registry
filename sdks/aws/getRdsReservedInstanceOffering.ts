// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRdsReservedInstanceOffering(args: GetRdsReservedInstanceOfferingArgs, opts?: pulumi.InvokeOptions): Promise<GetRdsReservedInstanceOfferingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRdsReservedInstanceOffering:getRdsReservedInstanceOffering", {
        "dbInstanceClass": args.dbInstanceClass,
        "duration": args.duration,
        "id": args.id,
        "multiAz": args.multiAz,
        "offeringType": args.offeringType,
        "productDescription": args.productDescription,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRdsReservedInstanceOffering.
 */
export interface GetRdsReservedInstanceOfferingArgs {
    dbInstanceClass: string;
    duration: number;
    id?: string;
    multiAz: boolean;
    offeringType: string;
    productDescription: string;
}

/**
 * A collection of values returned by getRdsReservedInstanceOffering.
 */
export interface GetRdsReservedInstanceOfferingResult {
    readonly currencyCode: string;
    readonly dbInstanceClass: string;
    readonly duration: number;
    readonly fixedPrice: number;
    readonly id: string;
    readonly multiAz: boolean;
    readonly offeringId: string;
    readonly offeringType: string;
    readonly productDescription: string;
}
export function getRdsReservedInstanceOfferingOutput(args: GetRdsReservedInstanceOfferingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRdsReservedInstanceOfferingResult> {
    return pulumi.output(args).apply((a: any) => getRdsReservedInstanceOffering(a, opts))
}

/**
 * A collection of arguments for invoking getRdsReservedInstanceOffering.
 */
export interface GetRdsReservedInstanceOfferingOutputArgs {
    dbInstanceClass: pulumi.Input<string>;
    duration: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    multiAz: pulumi.Input<boolean>;
    offeringType: pulumi.Input<string>;
    productDescription: pulumi.Input<string>;
}
