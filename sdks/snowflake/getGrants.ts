// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGrants(args?: GetGrantsArgs, opts?: pulumi.InvokeOptions): Promise<GetGrantsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getGrants:getGrants", {
        "futureGrantsIn": args.futureGrantsIn,
        "futureGrantsTo": args.futureGrantsTo,
        "grantsOf": args.grantsOf,
        "grantsOn": args.grantsOn,
        "grantsTo": args.grantsTo,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGrants.
 */
export interface GetGrantsArgs {
    futureGrantsIn?: inputs.GetGrantsFutureGrantsIn;
    futureGrantsTo?: inputs.GetGrantsFutureGrantsTo;
    grantsOf?: inputs.GetGrantsGrantsOf;
    grantsOn?: inputs.GetGrantsGrantsOn;
    grantsTo?: inputs.GetGrantsGrantsTo;
    id?: string;
}

/**
 * A collection of values returned by getGrants.
 */
export interface GetGrantsResult {
    readonly futureGrantsIn?: outputs.GetGrantsFutureGrantsIn;
    readonly futureGrantsTo?: outputs.GetGrantsFutureGrantsTo;
    readonly grants: outputs.GetGrantsGrant[];
    readonly grantsOf?: outputs.GetGrantsGrantsOf;
    readonly grantsOn?: outputs.GetGrantsGrantsOn;
    readonly grantsTo?: outputs.GetGrantsGrantsTo;
    readonly id: string;
}
export function getGrantsOutput(args?: GetGrantsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGrantsResult> {
    return pulumi.output(args).apply((a: any) => getGrants(a, opts))
}

/**
 * A collection of arguments for invoking getGrants.
 */
export interface GetGrantsOutputArgs {
    futureGrantsIn?: pulumi.Input<inputs.GetGrantsFutureGrantsInArgs>;
    futureGrantsTo?: pulumi.Input<inputs.GetGrantsFutureGrantsToArgs>;
    grantsOf?: pulumi.Input<inputs.GetGrantsGrantsOfArgs>;
    grantsOn?: pulumi.Input<inputs.GetGrantsGrantsOnArgs>;
    grantsTo?: pulumi.Input<inputs.GetGrantsGrantsToArgs>;
    id?: pulumi.Input<string>;
}
