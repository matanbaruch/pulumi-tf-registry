// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTcmqTopic(args?: GetTcmqTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTcmqTopicResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTcmqTopic:getTcmqTopic", {
        "filters": args.filters,
        "id": args.id,
        "isTagFilter": args.isTagFilter,
        "limit": args.limit,
        "offset": args.offset,
        "resultOutputFile": args.resultOutputFile,
        "topicName": args.topicName,
        "topicNameLists": args.topicNameLists,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTcmqTopic.
 */
export interface GetTcmqTopicArgs {
    filters?: inputs.GetTcmqTopicFilter[];
    id?: string;
    isTagFilter?: boolean;
    limit?: number;
    offset?: number;
    resultOutputFile?: string;
    topicName?: string;
    topicNameLists?: string[];
}

/**
 * A collection of values returned by getTcmqTopic.
 */
export interface GetTcmqTopicResult {
    readonly filters?: outputs.GetTcmqTopicFilter[];
    readonly id: string;
    readonly isTagFilter?: boolean;
    readonly limit?: number;
    readonly offset?: number;
    readonly resultOutputFile?: string;
    readonly topicLists: outputs.GetTcmqTopicTopicList[];
    readonly topicName?: string;
    readonly topicNameLists?: string[];
}
export function getTcmqTopicOutput(args?: GetTcmqTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTcmqTopicResult> {
    return pulumi.output(args).apply((a: any) => getTcmqTopic(a, opts))
}

/**
 * A collection of arguments for invoking getTcmqTopic.
 */
export interface GetTcmqTopicOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetTcmqTopicFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isTagFilter?: pulumi.Input<boolean>;
    limit?: pulumi.Input<number>;
    offset?: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
    topicName?: pulumi.Input<string>;
    topicNameLists?: pulumi.Input<pulumi.Input<string>[]>;
}
