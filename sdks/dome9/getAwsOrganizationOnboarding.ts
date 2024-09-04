// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAwsOrganizationOnboarding(args: GetAwsOrganizationOnboardingArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsOrganizationOnboardingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dome9:index/getAwsOrganizationOnboarding:getAwsOrganizationOnboarding", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAwsOrganizationOnboarding.
 */
export interface GetAwsOrganizationOnboardingArgs {
    id: string;
}

/**
 * A collection of values returned by getAwsOrganizationOnboarding.
 */
export interface GetAwsOrganizationOnboardingResult {
    readonly accountId: number;
    readonly creationTime: string;
    readonly externalManagementAccountId: string;
    readonly externalOrganizationId: string;
    readonly id: string;
    readonly managementAccountStackId: string;
    readonly managementAccountStackRegion: string;
    readonly onboardingConfiguration: {[key: string]: string};
    readonly organizationName: string;
    readonly stackSetOrganizationalUnitIds: string[];
    readonly stackSetRegions: string[];
    readonly updateTime: string;
    readonly userId: number;
}
export function getAwsOrganizationOnboardingOutput(args: GetAwsOrganizationOnboardingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAwsOrganizationOnboardingResult> {
    return pulumi.output(args).apply((a: any) => getAwsOrganizationOnboarding(a, opts))
}

/**
 * A collection of arguments for invoking getAwsOrganizationOnboarding.
 */
export interface GetAwsOrganizationOnboardingOutputArgs {
    id: pulumi.Input<string>;
}
