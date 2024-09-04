// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6LsnPortReservationEntriesOper(args?: GetCgnv6LsnPortReservationEntriesOperArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6LsnPortReservationEntriesOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6LsnPortReservationEntriesOper:getCgnv6LsnPortReservationEntriesOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6LsnPortReservationEntriesOper.
 */
export interface GetCgnv6LsnPortReservationEntriesOperArgs {
    id?: string;
    oper?: inputs.GetCgnv6LsnPortReservationEntriesOperOper;
}

/**
 * A collection of values returned by getCgnv6LsnPortReservationEntriesOper.
 */
export interface GetCgnv6LsnPortReservationEntriesOperResult {
    readonly id: string;
    readonly oper?: outputs.GetCgnv6LsnPortReservationEntriesOperOper;
}
export function getCgnv6LsnPortReservationEntriesOperOutput(args?: GetCgnv6LsnPortReservationEntriesOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6LsnPortReservationEntriesOperResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6LsnPortReservationEntriesOper(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6LsnPortReservationEntriesOper.
 */
export interface GetCgnv6LsnPortReservationEntriesOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetCgnv6LsnPortReservationEntriesOperOperArgs>;
}
