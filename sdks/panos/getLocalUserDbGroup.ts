// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLocalUserDbGroup(args: GetLocalUserDbGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalUserDbGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getLocalUserDbGroup:getLocalUserDbGroup", {
        "id": args.id,
        "name": args.name,
        "template": args.template,
        "templateStack": args.templateStack,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocalUserDbGroup.
 */
export interface GetLocalUserDbGroupArgs {
    id?: string;
    name: string;
    template?: string;
    templateStack?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getLocalUserDbGroup.
 */
export interface GetLocalUserDbGroupResult {
    readonly id: string;
    readonly name: string;
    readonly template?: string;
    readonly templateStack?: string;
    readonly users: string[];
    readonly vsys?: string;
}
export function getLocalUserDbGroupOutput(args: GetLocalUserDbGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalUserDbGroupResult> {
    return pulumi.output(args).apply((a: any) => getLocalUserDbGroup(a, opts))
}

/**
 * A collection of arguments for invoking getLocalUserDbGroup.
 */
export interface GetLocalUserDbGroupOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
