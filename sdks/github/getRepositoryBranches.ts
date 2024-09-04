// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRepositoryBranches(args: GetRepositoryBranchesArgs, opts?: pulumi.InvokeOptions): Promise<GetRepositoryBranchesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getRepositoryBranches:getRepositoryBranches", {
        "id": args.id,
        "onlyNonProtectedBranches": args.onlyNonProtectedBranches,
        "onlyProtectedBranches": args.onlyProtectedBranches,
        "repository": args.repository,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRepositoryBranches.
 */
export interface GetRepositoryBranchesArgs {
    id?: string;
    onlyNonProtectedBranches?: boolean;
    onlyProtectedBranches?: boolean;
    repository: string;
}

/**
 * A collection of values returned by getRepositoryBranches.
 */
export interface GetRepositoryBranchesResult {
    readonly branches: outputs.GetRepositoryBranchesBranch[];
    readonly id: string;
    readonly onlyNonProtectedBranches?: boolean;
    readonly onlyProtectedBranches?: boolean;
    readonly repository: string;
}
export function getRepositoryBranchesOutput(args: GetRepositoryBranchesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRepositoryBranchesResult> {
    return pulumi.output(args).apply((a: any) => getRepositoryBranches(a, opts))
}

/**
 * A collection of arguments for invoking getRepositoryBranches.
 */
export interface GetRepositoryBranchesOutputArgs {
    id?: pulumi.Input<string>;
    onlyNonProtectedBranches?: pulumi.Input<boolean>;
    onlyProtectedBranches?: pulumi.Input<boolean>;
    repository: pulumi.Input<string>;
}
