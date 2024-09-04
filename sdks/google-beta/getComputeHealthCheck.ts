// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeHealthCheck(args: GetComputeHealthCheckArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeHealthCheckResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getComputeHealthCheck:getComputeHealthCheck", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeHealthCheck.
 */
export interface GetComputeHealthCheckArgs {
    id?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getComputeHealthCheck.
 */
export interface GetComputeHealthCheckResult {
    readonly checkIntervalSec: number;
    readonly creationTimestamp: string;
    readonly description: string;
    readonly grpcHealthChecks: outputs.GetComputeHealthCheckGrpcHealthCheck[];
    readonly healthyThreshold: number;
    readonly http2HealthChecks: outputs.GetComputeHealthCheckHttp2HealthCheck[];
    readonly httpHealthChecks: outputs.GetComputeHealthCheckHttpHealthCheck[];
    readonly httpsHealthChecks: outputs.GetComputeHealthCheckHttpsHealthCheck[];
    readonly id: string;
    readonly logConfigs: outputs.GetComputeHealthCheckLogConfig[];
    readonly name: string;
    readonly project?: string;
    readonly selfLink: string;
    readonly sourceRegions: string[];
    readonly sslHealthChecks: outputs.GetComputeHealthCheckSslHealthCheck[];
    readonly tcpHealthChecks: outputs.GetComputeHealthCheckTcpHealthCheck[];
    readonly timeoutSec: number;
    readonly type: string;
    readonly unhealthyThreshold: number;
}
export function getComputeHealthCheckOutput(args: GetComputeHealthCheckOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeHealthCheckResult> {
    return pulumi.output(args).apply((a: any) => getComputeHealthCheck(a, opts))
}

/**
 * A collection of arguments for invoking getComputeHealthCheck.
 */
export interface GetComputeHealthCheckOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
