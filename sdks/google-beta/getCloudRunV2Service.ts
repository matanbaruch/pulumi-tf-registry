// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudRunV2Service(args: GetCloudRunV2ServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudRunV2ServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getCloudRunV2Service:getCloudRunV2Service", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudRunV2Service.
 */
export interface GetCloudRunV2ServiceArgs {
    id?: string;
    location?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getCloudRunV2Service.
 */
export interface GetCloudRunV2ServiceResult {
    readonly annotations: {[key: string]: string};
    readonly binaryAuthorizations: outputs.GetCloudRunV2ServiceBinaryAuthorization[];
    readonly client: string;
    readonly clientVersion: string;
    readonly conditions: outputs.GetCloudRunV2ServiceCondition[];
    readonly createTime: string;
    readonly creator: string;
    readonly customAudiences: string[];
    readonly defaultUriDisabled: boolean;
    readonly deleteTime: string;
    readonly deletionProtection: boolean;
    readonly description: string;
    readonly effectiveAnnotations: {[key: string]: string};
    readonly effectiveLabels: {[key: string]: string};
    readonly etag: string;
    readonly expireTime: string;
    readonly generation: string;
    readonly id: string;
    readonly ingress: string;
    readonly labels: {[key: string]: string};
    readonly lastModifier: string;
    readonly latestCreatedRevision: string;
    readonly latestReadyRevision: string;
    readonly launchStage: string;
    readonly location?: string;
    readonly name: string;
    readonly observedGeneration: string;
    readonly project?: string;
    readonly reconciling: boolean;
    readonly scalings: outputs.GetCloudRunV2ServiceScaling[];
    readonly templates: outputs.GetCloudRunV2ServiceTemplate[];
    readonly terminalConditions: outputs.GetCloudRunV2ServiceTerminalCondition[];
    readonly terraformLabels: {[key: string]: string};
    readonly trafficStatuses: outputs.GetCloudRunV2ServiceTrafficStatus[];
    readonly traffics: outputs.GetCloudRunV2ServiceTraffic[];
    readonly uid: string;
    readonly updateTime: string;
    readonly uri: string;
}
export function getCloudRunV2ServiceOutput(args: GetCloudRunV2ServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudRunV2ServiceResult> {
    return pulumi.output(args).apply((a: any) => getCloudRunV2Service(a, opts))
}

/**
 * A collection of arguments for invoking getCloudRunV2Service.
 */
export interface GetCloudRunV2ServiceOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
