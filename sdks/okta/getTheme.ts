// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTheme(args: GetThemeArgs, opts?: pulumi.InvokeOptions): Promise<GetThemeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getTheme:getTheme", {
        "brandId": args.brandId,
        "themeId": args.themeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTheme.
 */
export interface GetThemeArgs {
    brandId: string;
    themeId: string;
}

/**
 * A collection of values returned by getTheme.
 */
export interface GetThemeResult {
    readonly backgroundImageUrl: string;
    readonly brandId: string;
    readonly emailTemplateTouchPointVariant: string;
    readonly endUserDashboardTouchPointVariant: string;
    readonly errorPageTouchPointVariant: string;
    readonly faviconUrl: string;
    readonly id: string;
    readonly links: string;
    readonly logoUrl: string;
    readonly primaryColorContrastHex: string;
    readonly primaryColorHex: string;
    readonly secondaryColorContrastHex: string;
    readonly secondaryColorHex: string;
    readonly signInPageTouchPointVariant: string;
    readonly themeId: string;
}
export function getThemeOutput(args: GetThemeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetThemeResult> {
    return pulumi.output(args).apply((a: any) => getTheme(a, opts))
}

/**
 * A collection of arguments for invoking getTheme.
 */
export interface GetThemeOutputArgs {
    brandId: pulumi.Input<string>;
    themeId: pulumi.Input<string>;
}
