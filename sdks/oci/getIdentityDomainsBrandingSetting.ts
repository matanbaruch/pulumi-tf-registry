// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsBrandingSetting(args: GetIdentityDomainsBrandingSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsBrandingSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsBrandingSetting:getIdentityDomainsBrandingSetting", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "brandingSettingId": args.brandingSettingId,
        "id": args.id,
        "idcsEndpoint": args.idcsEndpoint,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsBrandingSetting.
 */
export interface GetIdentityDomainsBrandingSettingArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    brandingSettingId: string;
    id?: string;
    idcsEndpoint: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsBrandingSetting.
 */
export interface GetIdentityDomainsBrandingSettingResult {
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly brandingSettingId: string;
    readonly companyNames: outputs.GetIdentityDomainsBrandingSettingCompanyName[];
    readonly compartmentOcid: string;
    readonly customBranding: boolean;
    readonly customCssLocation: string;
    readonly customHtmlLocation: string;
    readonly customTranslation: string;
    readonly defaultCompanyNames: outputs.GetIdentityDomainsBrandingSettingDefaultCompanyName[];
    readonly defaultImages: outputs.GetIdentityDomainsBrandingSettingDefaultImage[];
    readonly defaultLoginTexts: outputs.GetIdentityDomainsBrandingSettingDefaultLoginText[];
    readonly deleteInProgress: boolean;
    readonly domainOcid: string;
    readonly enableTermsOfUse: boolean;
    readonly externalId: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsBrandingSettingIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsBrandingSettingIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly images: outputs.GetIdentityDomainsBrandingSettingImage[];
    readonly isHostedPage: boolean;
    readonly locale: string;
    readonly loginTexts: outputs.GetIdentityDomainsBrandingSettingLoginText[];
    readonly metas: outputs.GetIdentityDomainsBrandingSettingMeta[];
    readonly ocid: string;
    readonly preferredLanguage: string;
    readonly privacyPolicyUrl: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly tags: outputs.GetIdentityDomainsBrandingSettingTag[];
    readonly tenancyOcid: string;
    readonly termsOfUseUrl: string;
    readonly timezone: string;
}
export function getIdentityDomainsBrandingSettingOutput(args: GetIdentityDomainsBrandingSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsBrandingSettingResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsBrandingSetting(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsBrandingSetting.
 */
export interface GetIdentityDomainsBrandingSettingOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    brandingSettingId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
