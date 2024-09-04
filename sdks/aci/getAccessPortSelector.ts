// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAccessPortSelector(args: GetAccessPortSelectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPortSelectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getAccessPortSelector:getAccessPortSelector", {
        "accessPortSelectorType": args.accessPortSelectorType,
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "leafInterfaceProfileDn": args.leafInterfaceProfileDn,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "relationInfraRsAccBaseGrp": args.relationInfraRsAccBaseGrp,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccessPortSelector.
 */
export interface GetAccessPortSelectorArgs {
    accessPortSelectorType: string;
    annotation?: string;
    description?: string;
    id?: string;
    leafInterfaceProfileDn: string;
    name: string;
    nameAlias?: string;
    relationInfraRsAccBaseGrp?: string;
}

/**
 * A collection of values returned by getAccessPortSelector.
 */
export interface GetAccessPortSelectorResult {
    readonly accessPortSelectorType: string;
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly leafInterfaceProfileDn: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly relationInfraRsAccBaseGrp?: string;
}
export function getAccessPortSelectorOutput(args: GetAccessPortSelectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessPortSelectorResult> {
    return pulumi.output(args).apply((a: any) => getAccessPortSelector(a, opts))
}

/**
 * A collection of arguments for invoking getAccessPortSelector.
 */
export interface GetAccessPortSelectorOutputArgs {
    accessPortSelectorType: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    leafInterfaceProfileDn: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationInfraRsAccBaseGrp?: pulumi.Input<string>;
}
