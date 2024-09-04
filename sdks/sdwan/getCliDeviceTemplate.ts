// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCliDeviceTemplate(args: GetCliDeviceTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetCliDeviceTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getCliDeviceTemplate:getCliDeviceTemplate", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCliDeviceTemplate.
 */
export interface GetCliDeviceTemplateArgs {
    id: string;
}

/**
 * A collection of values returned by getCliDeviceTemplate.
 */
export interface GetCliDeviceTemplateResult {
    readonly cliConfiguration: string;
    readonly cliType: string;
    readonly description: string;
    readonly deviceType: string;
    readonly id: string;
    readonly name: string;
    readonly version: number;
}
export function getCliDeviceTemplateOutput(args: GetCliDeviceTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCliDeviceTemplateResult> {
    return pulumi.output(args).apply((a: any) => getCliDeviceTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getCliDeviceTemplate.
 */
export interface GetCliDeviceTemplateOutputArgs {
    id: pulumi.Input<string>;
}
