// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getConsentDefinitionLocalization(args: GetConsentDefinitionLocalizationArgs, opts?: pulumi.InvokeOptions): Promise<GetConsentDefinitionLocalizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getConsentDefinitionLocalization:getConsentDefinitionLocalization", {
        "consentDefinitionName": args.consentDefinitionName,
        "locale": args.locale,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConsentDefinitionLocalization.
 */
export interface GetConsentDefinitionLocalizationArgs {
    consentDefinitionName: string;
    locale: string;
}

/**
 * A collection of values returned by getConsentDefinitionLocalization.
 */
export interface GetConsentDefinitionLocalizationResult {
    readonly consentDefinitionName: string;
    readonly dataText: string;
    readonly id: string;
    readonly locale: string;
    readonly purposeText: string;
    readonly titleText: string;
    readonly type: string;
    readonly version: string;
}
export function getConsentDefinitionLocalizationOutput(args: GetConsentDefinitionLocalizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConsentDefinitionLocalizationResult> {
    return pulumi.output(args).apply((a: any) => getConsentDefinitionLocalization(a, opts))
}

/**
 * A collection of arguments for invoking getConsentDefinitionLocalization.
 */
export interface GetConsentDefinitionLocalizationOutputArgs {
    consentDefinitionName: pulumi.Input<string>;
    locale: pulumi.Input<string>;
}
