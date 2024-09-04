// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLeafSelector(args: GetLeafSelectorArgs, opts?: pulumi.InvokeOptions): Promise<GetLeafSelectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getLeafSelector:getLeafSelector", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "leafProfileDn": args.leafProfileDn,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "switchAssociationType": args.switchAssociationType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLeafSelector.
 */
export interface GetLeafSelectorArgs {
    annotation?: string;
    description?: string;
    id?: string;
    leafProfileDn: string;
    name: string;
    nameAlias?: string;
    switchAssociationType: string;
}

/**
 * A collection of values returned by getLeafSelector.
 */
export interface GetLeafSelectorResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly leafProfileDn: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly switchAssociationType: string;
}
export function getLeafSelectorOutput(args: GetLeafSelectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLeafSelectorResult> {
    return pulumi.output(args).apply((a: any) => getLeafSelector(a, opts))
}

/**
 * A collection of arguments for invoking getLeafSelector.
 */
export interface GetLeafSelectorOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    leafProfileDn: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    switchAssociationType: pulumi.Input<string>;
}
