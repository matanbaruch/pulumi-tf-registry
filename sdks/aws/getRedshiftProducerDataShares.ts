// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRedshiftProducerDataShares(args: GetRedshiftProducerDataSharesArgs, opts?: pulumi.InvokeOptions): Promise<GetRedshiftProducerDataSharesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRedshiftProducerDataShares:getRedshiftProducerDataShares", {
        "dataShares": args.dataShares,
        "producerArn": args.producerArn,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRedshiftProducerDataShares.
 */
export interface GetRedshiftProducerDataSharesArgs {
    dataShares?: inputs.GetRedshiftProducerDataSharesDataShare[];
    producerArn: string;
    status?: string;
}

/**
 * A collection of values returned by getRedshiftProducerDataShares.
 */
export interface GetRedshiftProducerDataSharesResult {
    readonly dataShares?: outputs.GetRedshiftProducerDataSharesDataShare[];
    readonly id: string;
    readonly producerArn: string;
    readonly status?: string;
}
export function getRedshiftProducerDataSharesOutput(args: GetRedshiftProducerDataSharesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRedshiftProducerDataSharesResult> {
    return pulumi.output(args).apply((a: any) => getRedshiftProducerDataShares(a, opts))
}

/**
 * A collection of arguments for invoking getRedshiftProducerDataShares.
 */
export interface GetRedshiftProducerDataSharesOutputArgs {
    dataShares?: pulumi.Input<pulumi.Input<inputs.GetRedshiftProducerDataSharesDataShareArgs>[]>;
    producerArn: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
