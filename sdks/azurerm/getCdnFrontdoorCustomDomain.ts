// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCdnFrontdoorCustomDomain(args: GetCdnFrontdoorCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetCdnFrontdoorCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getCdnFrontdoorCustomDomain:getCdnFrontdoorCustomDomain", {
        "id": args.id,
        "name": args.name,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCdnFrontdoorCustomDomain.
 */
export interface GetCdnFrontdoorCustomDomainArgs {
    id?: string;
    name: string;
    profileName: string;
    resourceGroupName: string;
    timeouts?: inputs.GetCdnFrontdoorCustomDomainTimeouts;
}

/**
 * A collection of values returned by getCdnFrontdoorCustomDomain.
 */
export interface GetCdnFrontdoorCustomDomainResult {
    readonly cdnFrontdoorProfileId: string;
    readonly dnsZoneId: string;
    readonly expirationDate: string;
    readonly hostName: string;
    readonly id: string;
    readonly name: string;
    readonly profileName: string;
    readonly resourceGroupName: string;
    readonly timeouts?: outputs.GetCdnFrontdoorCustomDomainTimeouts;
    readonly tls: outputs.GetCdnFrontdoorCustomDomainTl[];
    readonly validationToken: string;
}
export function getCdnFrontdoorCustomDomainOutput(args: GetCdnFrontdoorCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCdnFrontdoorCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getCdnFrontdoorCustomDomain(a, opts))
}

/**
 * A collection of arguments for invoking getCdnFrontdoorCustomDomain.
 */
export interface GetCdnFrontdoorCustomDomainOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    profileName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetCdnFrontdoorCustomDomainTimeoutsArgs>;
}
