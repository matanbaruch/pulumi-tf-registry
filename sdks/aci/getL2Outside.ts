// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getL2Outside(args: GetL2OutsideArgs, opts?: pulumi.InvokeOptions): Promise<GetL2OutsideResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getL2Outside:getL2Outside", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "targetDscp": args.targetDscp,
        "tenantDn": args.tenantDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getL2Outside.
 */
export interface GetL2OutsideArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
    targetDscp?: string;
    tenantDn: string;
}

/**
 * A collection of values returned by getL2Outside.
 */
export interface GetL2OutsideResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly targetDscp: string;
    readonly tenantDn: string;
}
export function getL2OutsideOutput(args: GetL2OutsideOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL2OutsideResult> {
    return pulumi.output(args).apply((a: any) => getL2Outside(a, opts))
}

/**
 * A collection of arguments for invoking getL2Outside.
 */
export interface GetL2OutsideOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    targetDscp?: pulumi.Input<string>;
    tenantDn: pulumi.Input<string>;
}
