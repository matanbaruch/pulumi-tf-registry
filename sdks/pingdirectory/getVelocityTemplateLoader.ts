// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVelocityTemplateLoader(args: GetVelocityTemplateLoaderArgs, opts?: pulumi.InvokeOptions): Promise<GetVelocityTemplateLoaderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getVelocityTemplateLoader:getVelocityTemplateLoader", {
        "httpServletExtensionName": args.httpServletExtensionName,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVelocityTemplateLoader.
 */
export interface GetVelocityTemplateLoaderArgs {
    httpServletExtensionName: string;
    name: string;
}

/**
 * A collection of values returned by getVelocityTemplateLoader.
 */
export interface GetVelocityTemplateLoaderResult {
    readonly enabled: boolean;
    readonly evaluationOrderIndex: number;
    readonly httpServletExtensionName: string;
    readonly id: string;
    readonly mimeType: string;
    readonly mimeTypeMatcher: string;
    readonly name: string;
    readonly templateDirectory: string;
    readonly templateSuffix: string;
    readonly type: string;
}
export function getVelocityTemplateLoaderOutput(args: GetVelocityTemplateLoaderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVelocityTemplateLoaderResult> {
    return pulumi.output(args).apply((a: any) => getVelocityTemplateLoader(a, opts))
}

/**
 * A collection of arguments for invoking getVelocityTemplateLoader.
 */
export interface GetVelocityTemplateLoaderOutputArgs {
    httpServletExtensionName: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
