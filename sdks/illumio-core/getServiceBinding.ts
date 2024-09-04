// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServiceBinding(args: GetServiceBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("illumio-core:index/getServiceBinding:getServiceBinding", {
        "href": args.href,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceBinding.
 */
export interface GetServiceBindingArgs {
    href: string;
    id?: string;
}

/**
 * A collection of values returned by getServiceBinding.
 */
export interface GetServiceBindingResult {
    readonly boundService: {[key: string]: string};
    readonly containerWorkloads: outputs.GetServiceBindingContainerWorkload[];
    readonly externalDataReference: string;
    readonly externalDataSet: string;
    readonly href: string;
    readonly id: string;
    readonly portOverrides: outputs.GetServiceBindingPortOverride[];
    readonly virtualServices: outputs.GetServiceBindingVirtualService[];
    readonly workloads: outputs.GetServiceBindingWorkload[];
}
export function getServiceBindingOutput(args: GetServiceBindingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceBindingResult> {
    return pulumi.output(args).apply((a: any) => getServiceBinding(a, opts))
}

/**
 * A collection of arguments for invoking getServiceBinding.
 */
export interface GetServiceBindingOutputArgs {
    href: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
