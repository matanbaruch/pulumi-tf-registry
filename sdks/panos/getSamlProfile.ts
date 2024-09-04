// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSamlProfile(args: GetSamlProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetSamlProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getSamlProfile:getSamlProfile", {
        "id": args.id,
        "name": args.name,
        "template": args.template,
        "templateStack": args.templateStack,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSamlProfile.
 */
export interface GetSamlProfileArgs {
    id?: string;
    name: string;
    template?: string;
    templateStack?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getSamlProfile.
 */
export interface GetSamlProfileResult {
    readonly adminUseOnly: boolean;
    readonly id: string;
    readonly identityProviderCertificate: string;
    readonly identityProviderId: string;
    readonly maxClockSkew: number;
    readonly name: string;
    readonly signSamlMessage: boolean;
    readonly sloBinding: string;
    readonly sloUrl: string;
    readonly ssoBinding: string;
    readonly ssoUrl: string;
    readonly template?: string;
    readonly templateStack?: string;
    readonly validateIdentityProviderCertificate: boolean;
    readonly vsys?: string;
}
export function getSamlProfileOutput(args: GetSamlProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSamlProfileResult> {
    return pulumi.output(args).apply((a: any) => getSamlProfile(a, opts))
}

/**
 * A collection of arguments for invoking getSamlProfile.
 */
export interface GetSamlProfileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
