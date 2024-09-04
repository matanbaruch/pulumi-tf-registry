// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCrEeRepos(args: GetCrEeReposArgs, opts?: pulumi.InvokeOptions): Promise<GetCrEeReposResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCrEeRepos:getCrEeRepos", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "instanceId": args.instanceId,
        "nameRegex": args.nameRegex,
        "namespace": args.namespace,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCrEeRepos.
 */
export interface GetCrEeReposArgs {
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    instanceId: string;
    nameRegex?: string;
    namespace?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getCrEeRepos.
 */
export interface GetCrEeReposResult {
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly instanceId: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly namespace?: string;
    readonly outputFile?: string;
    readonly repos: outputs.GetCrEeReposRepo[];
}
export function getCrEeReposOutput(args: GetCrEeReposOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCrEeReposResult> {
    return pulumi.output(args).apply((a: any) => getCrEeRepos(a, opts))
}

/**
 * A collection of arguments for invoking getCrEeRepos.
 */
export interface GetCrEeReposOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    instanceId: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
