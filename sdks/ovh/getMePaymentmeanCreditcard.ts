// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMePaymentmeanCreditcard(args?: GetMePaymentmeanCreditcardArgs, opts?: pulumi.InvokeOptions): Promise<GetMePaymentmeanCreditcardResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getMePaymentmeanCreditcard:getMePaymentmeanCreditcard", {
        "descriptionRegexp": args.descriptionRegexp,
        "id": args.id,
        "states": args.states,
        "useDefault": args.useDefault,
        "useLastToExpire": args.useLastToExpire,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMePaymentmeanCreditcard.
 */
export interface GetMePaymentmeanCreditcardArgs {
    descriptionRegexp?: string;
    id?: string;
    states?: string[];
    useDefault?: boolean;
    useLastToExpire?: boolean;
}

/**
 * A collection of values returned by getMePaymentmeanCreditcard.
 */
export interface GetMePaymentmeanCreditcardResult {
    readonly default: boolean;
    readonly description: string;
    readonly descriptionRegexp?: string;
    readonly id: string;
    readonly state: string;
    readonly states?: string[];
    readonly useDefault?: boolean;
    readonly useLastToExpire?: boolean;
}
export function getMePaymentmeanCreditcardOutput(args?: GetMePaymentmeanCreditcardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMePaymentmeanCreditcardResult> {
    return pulumi.output(args).apply((a: any) => getMePaymentmeanCreditcard(a, opts))
}

/**
 * A collection of arguments for invoking getMePaymentmeanCreditcard.
 */
export interface GetMePaymentmeanCreditcardOutputArgs {
    descriptionRegexp?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    states?: pulumi.Input<pulumi.Input<string>[]>;
    useDefault?: pulumi.Input<boolean>;
    useLastToExpire?: pulumi.Input<boolean>;
}
