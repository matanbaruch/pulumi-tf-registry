// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPackageRepository(args: GetPackageRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tanzu-mission-control:index/getPackageRepository:getPackageRepository", {
        "disabled": args.disabled,
        "id": args.id,
        "meta": args.meta,
        "name": args.name,
        "scope": args.scope,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPackageRepository.
 */
export interface GetPackageRepositoryArgs {
    disabled?: boolean;
    id?: string;
    meta?: inputs.GetPackageRepositoryMeta;
    name: string;
    scope: inputs.GetPackageRepositoryScope;
}

/**
 * A collection of values returned by getPackageRepository.
 */
export interface GetPackageRepositoryResult {
    readonly disabled?: boolean;
    readonly id: string;
    readonly meta?: outputs.GetPackageRepositoryMeta;
    readonly name: string;
    readonly namespaceName: string;
    readonly scope: outputs.GetPackageRepositoryScope;
    readonly specs: outputs.GetPackageRepositorySpec[];
    readonly states: outputs.GetPackageRepositoryState[];
}
export function getPackageRepositoryOutput(args: GetPackageRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPackageRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getPackageRepository(a, opts))
}

/**
 * A collection of arguments for invoking getPackageRepository.
 */
export interface GetPackageRepositoryOutputArgs {
    disabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    meta?: pulumi.Input<inputs.GetPackageRepositoryMetaArgs>;
    name: pulumi.Input<string>;
    scope: pulumi.Input<inputs.GetPackageRepositoryScopeArgs>;
}
