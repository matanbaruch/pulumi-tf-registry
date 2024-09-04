// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFunctionsPbfListing(args: GetFunctionsPbfListingArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionsPbfListingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getFunctionsPbfListing:getFunctionsPbfListing", {
        "id": args.id,
        "pbfListingId": args.pbfListingId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFunctionsPbfListing.
 */
export interface GetFunctionsPbfListingArgs {
    id?: string;
    pbfListingId: string;
}

/**
 * A collection of values returned by getFunctionsPbfListing.
 */
export interface GetFunctionsPbfListingResult {
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly name: string;
    readonly pbfListingId: string;
    readonly publisherDetails: outputs.GetFunctionsPbfListingPublisherDetail[];
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
    readonly triggers: outputs.GetFunctionsPbfListingTrigger[];
}
export function getFunctionsPbfListingOutput(args: GetFunctionsPbfListingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFunctionsPbfListingResult> {
    return pulumi.output(args).apply((a: any) => getFunctionsPbfListing(a, opts))
}

/**
 * A collection of arguments for invoking getFunctionsPbfListing.
 */
export interface GetFunctionsPbfListingOutputArgs {
    id?: pulumi.Input<string>;
    pbfListingId: pulumi.Input<string>;
}
