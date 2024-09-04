// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Artifact extends pulumi.CustomResource {
    /**
     * Get an existing Artifact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArtifactState, opts?: pulumi.CustomResourceOptions): Artifact {
        return new Artifact(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'artifactory:index/artifact:Artifact';

    /**
     * Returns true if the given object is an instance of Artifact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Artifact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Artifact.__pulumiType;
    }

    /**
     * MD5 checksum of the artifact.
     */
    public /*out*/ readonly checksumMd5!: pulumi.Output<string>;
    /**
     * SHA1 checksum of the artifact.
     */
    public /*out*/ readonly checksumSha1!: pulumi.Output<string>;
    /**
     * SHA256 checksum of the artifact.
     */
    public /*out*/ readonly checksumSha256!: pulumi.Output<string>;
    /**
     * Timestamp when artifact is created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * User who deploys the artifact.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Download URI of the artifact.
     */
    public /*out*/ readonly downloadUri!: pulumi.Output<string>;
    /**
     * Path to the source file.
     */
    public readonly filePath!: pulumi.Output<string>;
    /**
     * MIME type of the artifact.
     */
    public /*out*/ readonly mimeType!: pulumi.Output<string>;
    /**
     * The relative path in the target repository. Must begin with a '/'. You can add key-value matrix parameters to deploy the
     * artifacts with properties. For more details, please refer to [Introducing Matrix
     * Parameters](https://jfrog.com/help/r/jfrog-artifactory-documentation/using-properties-in-deployment-and-resolution).
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Name of the respository.
     */
    public readonly repository!: pulumi.Output<string>;
    /**
     * Size of the artifact, in bytes.
     */
    public /*out*/ readonly size!: pulumi.Output<number>;
    /**
     * URI of the artifact.
     */
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a Artifact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArtifactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArtifactArgs | ArtifactState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ArtifactState | undefined;
            resourceInputs["checksumMd5"] = state ? state.checksumMd5 : undefined;
            resourceInputs["checksumSha1"] = state ? state.checksumSha1 : undefined;
            resourceInputs["checksumSha256"] = state ? state.checksumSha256 : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["downloadUri"] = state ? state.downloadUri : undefined;
            resourceInputs["filePath"] = state ? state.filePath : undefined;
            resourceInputs["mimeType"] = state ? state.mimeType : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as ArtifactArgs | undefined;
            if ((!args || args.filePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filePath'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            resourceInputs["filePath"] = args ? args.filePath : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["checksumMd5"] = undefined /*out*/;
            resourceInputs["checksumSha1"] = undefined /*out*/;
            resourceInputs["checksumSha256"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["downloadUri"] = undefined /*out*/;
            resourceInputs["mimeType"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Artifact.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Artifact resources.
 */
export interface ArtifactState {
    /**
     * MD5 checksum of the artifact.
     */
    checksumMd5?: pulumi.Input<string>;
    /**
     * SHA1 checksum of the artifact.
     */
    checksumSha1?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the artifact.
     */
    checksumSha256?: pulumi.Input<string>;
    /**
     * Timestamp when artifact is created.
     */
    created?: pulumi.Input<string>;
    /**
     * User who deploys the artifact.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * Download URI of the artifact.
     */
    downloadUri?: pulumi.Input<string>;
    /**
     * Path to the source file.
     */
    filePath?: pulumi.Input<string>;
    /**
     * MIME type of the artifact.
     */
    mimeType?: pulumi.Input<string>;
    /**
     * The relative path in the target repository. Must begin with a '/'. You can add key-value matrix parameters to deploy the
     * artifacts with properties. For more details, please refer to [Introducing Matrix
     * Parameters](https://jfrog.com/help/r/jfrog-artifactory-documentation/using-properties-in-deployment-and-resolution).
     */
    path?: pulumi.Input<string>;
    /**
     * Name of the respository.
     */
    repository?: pulumi.Input<string>;
    /**
     * Size of the artifact, in bytes.
     */
    size?: pulumi.Input<number>;
    /**
     * URI of the artifact.
     */
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Artifact resource.
 */
export interface ArtifactArgs {
    /**
     * Path to the source file.
     */
    filePath: pulumi.Input<string>;
    /**
     * The relative path in the target repository. Must begin with a '/'. You can add key-value matrix parameters to deploy the
     * artifacts with properties. For more details, please refer to [Introducing Matrix
     * Parameters](https://jfrog.com/help/r/jfrog-artifactory-documentation/using-properties-in-deployment-and-resolution).
     */
    path: pulumi.Input<string>;
    /**
     * Name of the respository.
     */
    repository: pulumi.Input<string>;
}
