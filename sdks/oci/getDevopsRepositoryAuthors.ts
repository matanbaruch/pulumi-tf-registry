// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevopsRepositoryAuthors(args: GetDevopsRepositoryAuthorsArgs, opts?: pulumi.InvokeOptions): Promise<GetDevopsRepositoryAuthorsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDevopsRepositoryAuthors:getDevopsRepositoryAuthors", {
        "filters": args.filters,
        "id": args.id,
        "refName": args.refName,
        "repositoryId": args.repositoryId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevopsRepositoryAuthors.
 */
export interface GetDevopsRepositoryAuthorsArgs {
    filters?: inputs.GetDevopsRepositoryAuthorsFilter[];
    id?: string;
    refName?: string;
    repositoryId: string;
}

/**
 * A collection of values returned by getDevopsRepositoryAuthors.
 */
export interface GetDevopsRepositoryAuthorsResult {
    readonly filters?: outputs.GetDevopsRepositoryAuthorsFilter[];
    readonly id: string;
    readonly refName?: string;
    readonly repositoryAuthorCollections: outputs.GetDevopsRepositoryAuthorsRepositoryAuthorCollection[];
    readonly repositoryId: string;
}
export function getDevopsRepositoryAuthorsOutput(args: GetDevopsRepositoryAuthorsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevopsRepositoryAuthorsResult> {
    return pulumi.output(args).apply((a: any) => getDevopsRepositoryAuthors(a, opts))
}

/**
 * A collection of arguments for invoking getDevopsRepositoryAuthors.
 */
export interface GetDevopsRepositoryAuthorsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDevopsRepositoryAuthorsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    refName?: pulumi.Input<string>;
    repositoryId: pulumi.Input<string>;
}
