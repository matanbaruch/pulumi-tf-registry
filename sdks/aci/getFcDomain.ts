// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFcDomain(args: GetFcDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetFcDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getFcDomain:getFcDomain", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFcDomain.
 */
export interface GetFcDomainArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getFcDomain.
 */
export interface GetFcDomainResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
}
export function getFcDomainOutput(args: GetFcDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFcDomainResult> {
    return pulumi.output(args).apply((a: any) => getFcDomain(a, opts))
}

/**
 * A collection of arguments for invoking getFcDomain.
 */
export interface GetFcDomainOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
