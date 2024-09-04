// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRest(args: GetRestArgs, opts?: pulumi.InvokeOptions): Promise<GetRestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getRest:getRest", {
        "childrens": args.childrens,
        "className": args.className,
        "content": args.content,
        "dn": args.dn,
        "id": args.id,
        "path": args.path,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRest.
 */
export interface GetRestArgs {
    childrens?: inputs.GetRestChildren[];
    className?: string;
    content?: {[key: string]: string};
    dn?: string;
    id?: string;
    path: string;
}

/**
 * A collection of values returned by getRest.
 */
export interface GetRestResult {
    readonly childrens?: outputs.GetRestChildren[];
    readonly className: string;
    readonly content: {[key: string]: string};
    readonly dn: string;
    readonly id: string;
    readonly path: string;
}
export function getRestOutput(args: GetRestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRestResult> {
    return pulumi.output(args).apply((a: any) => getRest(a, opts))
}

/**
 * A collection of arguments for invoking getRest.
 */
export interface GetRestOutputArgs {
    childrens?: pulumi.Input<pulumi.Input<inputs.GetRestChildrenArgs>[]>;
    className?: pulumi.Input<string>;
    content?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    dn?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    path: pulumi.Input<string>;
}
