// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRecipient(args: GetRecipientArgs, opts?: pulumi.InvokeOptions): Promise<GetRecipientResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("honeycombio:index/getRecipient:getRecipient", {
        "dataset": args.dataset,
        "detailFilter": args.detailFilter,
        "id": args.id,
        "target": args.target,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRecipient.
 */
export interface GetRecipientArgs {
    /**
     * @deprecated Deprecated
     */
    dataset?: string;
    detailFilter?: inputs.GetRecipientDetailFilter;
    id?: string;
    /**
     * @deprecated Deprecated
     */
    target?: string;
    type: string;
}

/**
 * A collection of values returned by getRecipient.
 */
export interface GetRecipientResult {
    readonly address: string;
    readonly channel: string;
    /**
     * @deprecated Deprecated
     */
    readonly dataset?: string;
    readonly detailFilter?: outputs.GetRecipientDetailFilter;
    readonly id: string;
    readonly integrationKey: string;
    readonly integrationName: string;
    readonly name: string;
    readonly secret: string;
    /**
     * @deprecated Deprecated
     */
    readonly target?: string;
    readonly type: string;
    readonly url: string;
}
export function getRecipientOutput(args: GetRecipientOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecipientResult> {
    return pulumi.output(args).apply((a: any) => getRecipient(a, opts))
}

/**
 * A collection of arguments for invoking getRecipient.
 */
export interface GetRecipientOutputArgs {
    /**
     * @deprecated Deprecated
     */
    dataset?: pulumi.Input<string>;
    detailFilter?: pulumi.Input<inputs.GetRecipientDetailFilterArgs>;
    id?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    target?: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
