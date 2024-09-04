// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCvmChcHosts(args?: GetCvmChcHostsArgs, opts?: pulumi.InvokeOptions): Promise<GetCvmChcHostsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getCvmChcHosts:getCvmChcHosts", {
        "chcIds": args.chcIds,
        "filters": args.filters,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCvmChcHosts.
 */
export interface GetCvmChcHostsArgs {
    chcIds?: string[];
    filters?: inputs.GetCvmChcHostsFilter[];
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getCvmChcHosts.
 */
export interface GetCvmChcHostsResult {
    readonly chcHostSets: outputs.GetCvmChcHostsChcHostSet[];
    readonly chcIds?: string[];
    readonly filters?: outputs.GetCvmChcHostsFilter[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getCvmChcHostsOutput(args?: GetCvmChcHostsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCvmChcHostsResult> {
    return pulumi.output(args).apply((a: any) => getCvmChcHosts(a, opts))
}

/**
 * A collection of arguments for invoking getCvmChcHosts.
 */
export interface GetCvmChcHostsOutputArgs {
    chcIds?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCvmChcHostsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
