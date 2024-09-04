// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAaaDomain(args: GetAaaDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetAaaDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getAaaDomain:getAaaDomain", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAaaDomain.
 */
export interface GetAaaDomainArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getAaaDomain.
 */
export interface GetAaaDomainResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
}
export function getAaaDomainOutput(args: GetAaaDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAaaDomainResult> {
    return pulumi.output(args).apply((a: any) => getAaaDomain(a, opts))
}

/**
 * A collection of arguments for invoking getAaaDomain.
 */
export interface GetAaaDomainOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
