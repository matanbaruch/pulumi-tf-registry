// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getArtifactRegistryDockerImage(args: GetArtifactRegistryDockerImageArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactRegistryDockerImageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getArtifactRegistryDockerImage:getArtifactRegistryDockerImage", {
        "id": args.id,
        "imageName": args.imageName,
        "location": args.location,
        "project": args.project,
        "repositoryId": args.repositoryId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getArtifactRegistryDockerImage.
 */
export interface GetArtifactRegistryDockerImageArgs {
    id?: string;
    imageName: string;
    location: string;
    project?: string;
    repositoryId: string;
}

/**
 * A collection of values returned by getArtifactRegistryDockerImage.
 */
export interface GetArtifactRegistryDockerImageResult {
    readonly buildTime: string;
    readonly id: string;
    readonly imageName: string;
    readonly imageSizeBytes: string;
    readonly location: string;
    readonly mediaType: string;
    readonly name: string;
    readonly project?: string;
    readonly repositoryId: string;
    readonly selfLink: string;
    readonly tags: string[];
    readonly updateTime: string;
    readonly uploadTime: string;
}
export function getArtifactRegistryDockerImageOutput(args: GetArtifactRegistryDockerImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArtifactRegistryDockerImageResult> {
    return pulumi.output(args).apply((a: any) => getArtifactRegistryDockerImage(a, opts))
}

/**
 * A collection of arguments for invoking getArtifactRegistryDockerImage.
 */
export interface GetArtifactRegistryDockerImageOutputArgs {
    id?: pulumi.Input<string>;
    imageName: pulumi.Input<string>;
    location: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    repositoryId: pulumi.Input<string>;
}
