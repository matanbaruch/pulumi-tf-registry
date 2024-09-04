// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosSyncOper(args?: GetDdosSyncOperArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosSyncOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosSyncOper:getDdosSyncOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosSyncOper.
 */
export interface GetDdosSyncOperArgs {
    id?: string;
    oper?: inputs.GetDdosSyncOperOper;
}

/**
 * A collection of values returned by getDdosSyncOper.
 */
export interface GetDdosSyncOperResult {
    readonly id: string;
    readonly oper?: outputs.GetDdosSyncOperOper;
}
export function getDdosSyncOperOutput(args?: GetDdosSyncOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosSyncOperResult> {
    return pulumi.output(args).apply((a: any) => getDdosSyncOper(a, opts))
}

/**
 * A collection of arguments for invoking getDdosSyncOper.
 */
export interface GetDdosSyncOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetDdosSyncOperOperArgs>;
}
