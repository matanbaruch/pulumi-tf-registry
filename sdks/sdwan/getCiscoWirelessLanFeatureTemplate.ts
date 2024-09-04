// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCiscoWirelessLanFeatureTemplate(args?: GetCiscoWirelessLanFeatureTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetCiscoWirelessLanFeatureTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getCiscoWirelessLanFeatureTemplate:getCiscoWirelessLanFeatureTemplate", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCiscoWirelessLanFeatureTemplate.
 */
export interface GetCiscoWirelessLanFeatureTemplateArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getCiscoWirelessLanFeatureTemplate.
 */
export interface GetCiscoWirelessLanFeatureTemplateResult {
    readonly controllerDefaultGateway: string;
    readonly controllerDefaultGatewayVariable: string;
    readonly controllerIpAddress: string;
    readonly controllerIpAddressVariable: string;
    readonly controllerSubnetMask: string;
    readonly controllerSubnetMaskVariable: string;
    readonly country: string;
    readonly countryVariable: string;
    readonly description: string;
    readonly deviceTypes: string[];
    readonly id: string;
    readonly name: string;
    readonly password: string;
    readonly passwordVariable: string;
    readonly shutdown24ghz: boolean;
    readonly shutdown24ghzVariable: string;
    readonly shutdown5ghz: boolean;
    readonly shutdown5ghzVariable: string;
    readonly ssids: outputs.GetCiscoWirelessLanFeatureTemplateSsid[];
    readonly templateType: string;
    readonly username: string;
    readonly usernameVariable: string;
    readonly version: number;
}
export function getCiscoWirelessLanFeatureTemplateOutput(args?: GetCiscoWirelessLanFeatureTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCiscoWirelessLanFeatureTemplateResult> {
    return pulumi.output(args).apply((a: any) => getCiscoWirelessLanFeatureTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getCiscoWirelessLanFeatureTemplate.
 */
export interface GetCiscoWirelessLanFeatureTemplateOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
