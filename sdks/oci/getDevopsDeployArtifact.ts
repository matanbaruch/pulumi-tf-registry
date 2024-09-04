// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevopsDeployArtifact(args: GetDevopsDeployArtifactArgs, opts?: pulumi.InvokeOptions): Promise<GetDevopsDeployArtifactResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDevopsDeployArtifact:getDevopsDeployArtifact", {
        "deployArtifactId": args.deployArtifactId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevopsDeployArtifact.
 */
export interface GetDevopsDeployArtifactArgs {
    deployArtifactId: string;
}

/**
 * A collection of values returned by getDevopsDeployArtifact.
 */
export interface GetDevopsDeployArtifactResult {
    readonly argumentSubstitutionMode: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly deployArtifactId: string;
    readonly deployArtifactSources: outputs.GetDevopsDeployArtifactDeployArtifactSource[];
    readonly deployArtifactType: string;
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly projectId: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDevopsDeployArtifactOutput(args: GetDevopsDeployArtifactOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevopsDeployArtifactResult> {
    return pulumi.output(args).apply((a: any) => getDevopsDeployArtifact(a, opts))
}

/**
 * A collection of arguments for invoking getDevopsDeployArtifact.
 */
export interface GetDevopsDeployArtifactOutputArgs {
    deployArtifactId: pulumi.Input<string>;
}
