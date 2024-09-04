// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCrRepos(args?: GetCrReposArgs, opts?: pulumi.InvokeOptions): Promise<GetCrReposResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCrRepos:getCrRepos", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "nameRegex": args.nameRegex,
        "namespace": args.namespace,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCrRepos.
 */
export interface GetCrReposArgs {
    enableDetails?: boolean;
    id?: string;
    nameRegex?: string;
    namespace?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getCrRepos.
 */
export interface GetCrReposResult {
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly namespace?: string;
    readonly outputFile?: string;
    readonly repos: outputs.GetCrReposRepo[];
}
export function getCrReposOutput(args?: GetCrReposOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCrReposResult> {
    return pulumi.output(args).apply((a: any) => getCrRepos(a, opts))
}

/**
 * A collection of arguments for invoking getCrRepos.
 */
export interface GetCrReposOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
