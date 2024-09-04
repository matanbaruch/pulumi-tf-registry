// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSpineInterfaceProfile(args: GetSpineInterfaceProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetSpineInterfaceProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getSpineInterfaceProfile:getSpineInterfaceProfile", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSpineInterfaceProfile.
 */
export interface GetSpineInterfaceProfileArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getSpineInterfaceProfile.
 */
export interface GetSpineInterfaceProfileResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
}
export function getSpineInterfaceProfileOutput(args: GetSpineInterfaceProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpineInterfaceProfileResult> {
    return pulumi.output(args).apply((a: any) => getSpineInterfaceProfile(a, opts))
}

/**
 * A collection of arguments for invoking getSpineInterfaceProfile.
 */
export interface GetSpineInterfaceProfileOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
