// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getQldbLedger(args: GetQldbLedgerArgs, opts?: pulumi.InvokeOptions): Promise<GetQldbLedgerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getQldbLedger:getQldbLedger", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQldbLedger.
 */
export interface GetQldbLedgerArgs {
    id?: string;
    name: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getQldbLedger.
 */
export interface GetQldbLedgerResult {
    readonly arn: string;
    readonly deletionProtection: boolean;
    readonly id: string;
    readonly kmsKey: string;
    readonly name: string;
    readonly permissionsMode: string;
    readonly tags: {[key: string]: string};
}
export function getQldbLedgerOutput(args: GetQldbLedgerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQldbLedgerResult> {
    return pulumi.output(args).apply((a: any) => getQldbLedger(a, opts))
}

/**
 * A collection of arguments for invoking getQldbLedger.
 */
export interface GetQldbLedgerOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
