// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPasswordGenerators(args?: GetPasswordGeneratorsArgs, opts?: pulumi.InvokeOptions): Promise<GetPasswordGeneratorsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getPasswordGenerators:getPasswordGenerators", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPasswordGenerators.
 */
export interface GetPasswordGeneratorsArgs {
    filter?: string;
}

/**
 * A collection of values returned by getPasswordGenerators.
 */
export interface GetPasswordGeneratorsResult {
    readonly filter?: string;
    readonly id: string;
    readonly objects: outputs.GetPasswordGeneratorsObject[];
}
export function getPasswordGeneratorsOutput(args?: GetPasswordGeneratorsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPasswordGeneratorsResult> {
    return pulumi.output(args).apply((a: any) => getPasswordGenerators(a, opts))
}

/**
 * A collection of arguments for invoking getPasswordGenerators.
 */
export interface GetPasswordGeneratorsOutputArgs {
    filter?: pulumi.Input<string>;
}
