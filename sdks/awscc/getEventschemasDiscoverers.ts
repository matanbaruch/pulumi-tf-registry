// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEventschemasDiscoverers(opts?: pulumi.InvokeOptions): Promise<GetEventschemasDiscoverersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEventschemasDiscoverers:getEventschemasDiscoverers", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEventschemasDiscoverers.
 */
export interface GetEventschemasDiscoverersResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEventschemasDiscoverersOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEventschemasDiscoverersResult> {
    return pulumi.output(getEventschemasDiscoverers(opts))
}
