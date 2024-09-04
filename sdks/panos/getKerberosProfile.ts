// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKerberosProfile(args: GetKerberosProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetKerberosProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getKerberosProfile:getKerberosProfile", {
        "id": args.id,
        "name": args.name,
        "template": args.template,
        "templateStack": args.templateStack,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKerberosProfile.
 */
export interface GetKerberosProfileArgs {
    id?: string;
    name: string;
    template?: string;
    templateStack?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getKerberosProfile.
 */
export interface GetKerberosProfileResult {
    readonly adminUseOnly: boolean;
    readonly id: string;
    readonly name: string;
    readonly servers: outputs.GetKerberosProfileServer[];
    readonly template?: string;
    readonly templateStack?: string;
    readonly vsys?: string;
}
export function getKerberosProfileOutput(args: GetKerberosProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKerberosProfileResult> {
    return pulumi.output(args).apply((a: any) => getKerberosProfile(a, opts))
}

/**
 * A collection of arguments for invoking getKerberosProfile.
 */
export interface GetKerberosProfileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
