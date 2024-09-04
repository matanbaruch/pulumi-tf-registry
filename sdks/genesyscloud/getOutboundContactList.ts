// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOutboundContactList(args: GetOutboundContactListArgs, opts?: pulumi.InvokeOptions): Promise<GetOutboundContactListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getOutboundContactList:getOutboundContactList", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOutboundContactList.
 */
export interface GetOutboundContactListArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getOutboundContactList.
 */
export interface GetOutboundContactListResult {
    readonly id: string;
    readonly name: string;
}
export function getOutboundContactListOutput(args: GetOutboundContactListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOutboundContactListResult> {
    return pulumi.output(args).apply((a: any) => getOutboundContactList(a, opts))
}

/**
 * A collection of arguments for invoking getOutboundContactList.
 */
export interface GetOutboundContactListOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
