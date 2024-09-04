// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHealthcareService(args: GetHealthcareServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthcareServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getHealthcareService:getHealthcareService", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHealthcareService.
 */
export interface GetHealthcareServiceArgs {
    id?: string;
    location: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetHealthcareServiceTimeouts;
}

/**
 * A collection of values returned by getHealthcareService.
 */
export interface GetHealthcareServiceResult {
    readonly accessPolicyObjectIds: string[];
    readonly authenticationConfigurations: outputs.GetHealthcareServiceAuthenticationConfiguration[];
    readonly corsConfigurations: outputs.GetHealthcareServiceCorsConfiguration[];
    readonly cosmosdbKeyVaultKeyVersionlessId: string;
    readonly cosmosdbThroughput: number;
    readonly id: string;
    readonly kind: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetHealthcareServiceTimeouts;
}
export function getHealthcareServiceOutput(args: GetHealthcareServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHealthcareServiceResult> {
    return pulumi.output(args).apply((a: any) => getHealthcareService(a, opts))
}

/**
 * A collection of arguments for invoking getHealthcareService.
 */
export interface GetHealthcareServiceOutputArgs {
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetHealthcareServiceTimeoutsArgs>;
}
