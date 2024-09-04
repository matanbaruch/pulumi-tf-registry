// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFabricIfPol(args: GetFabricIfPolArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricIfPolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getFabricIfPol:getFabricIfPol", {
        "annotation": args.annotation,
        "autoNeg": args.autoNeg,
        "description": args.description,
        "fecMode": args.fecMode,
        "id": args.id,
        "linkDebounce": args.linkDebounce,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "speed": args.speed,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricIfPol.
 */
export interface GetFabricIfPolArgs {
    annotation?: string;
    autoNeg?: string;
    description?: string;
    fecMode?: string;
    id?: string;
    linkDebounce?: string;
    name: string;
    nameAlias?: string;
    speed?: string;
}

/**
 * A collection of values returned by getFabricIfPol.
 */
export interface GetFabricIfPolResult {
    readonly annotation: string;
    readonly autoNeg: string;
    readonly description: string;
    readonly fecMode: string;
    readonly id: string;
    readonly linkDebounce: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly speed: string;
}
export function getFabricIfPolOutput(args: GetFabricIfPolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricIfPolResult> {
    return pulumi.output(args).apply((a: any) => getFabricIfPol(a, opts))
}

/**
 * A collection of arguments for invoking getFabricIfPol.
 */
export interface GetFabricIfPolOutputArgs {
    annotation?: pulumi.Input<string>;
    autoNeg?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fecMode?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    linkDebounce?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    speed?: pulumi.Input<string>;
}
