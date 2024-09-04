// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Build extends pulumi.CustomResource {
    /**
     * Get an existing Build resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BuildState, opts?: pulumi.CustomResourceOptions): Build {
        return new Build(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'apko:index/build:Build';

    /**
     * Returns true if the given object is an instance of Build.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Build {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Build.__pulumiType;
    }

    /**
     * The parsed structure of the apko configuration.
     */
    public readonly config!: pulumi.Output<outputs.BuildConfig>;
    /**
     * The resulting fully-qualified digest (e.g. {repo}@sha256:deadbeef).
     */
    public /*out*/ readonly imageRef!: pulumi.Output<string>;
    /**
     * The name of the container repository to which we should publish the image.
     */
    public readonly repo!: pulumi.Output<string>;
    /**
     * A map from the APK architecture to the digest for that architecture and its SBOM.
     */
    public readonly sboms!: pulumi.Output<{[key: string]: outputs.BuildSboms}>;

    /**
     * Create a Build resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BuildArgs | BuildState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BuildState | undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["imageRef"] = state ? state.imageRef : undefined;
            resourceInputs["repo"] = state ? state.repo : undefined;
            resourceInputs["sboms"] = state ? state.sboms : undefined;
        } else {
            const args = argsOrState as BuildArgs | undefined;
            if ((!args || args.config === undefined) && !opts.urn) {
                throw new Error("Missing required property 'config'");
            }
            if ((!args || args.repo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repo'");
            }
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["repo"] = args ? args.repo : undefined;
            resourceInputs["sboms"] = args ? args.sboms : undefined;
            resourceInputs["imageRef"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Build.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Build resources.
 */
export interface BuildState {
    /**
     * The parsed structure of the apko configuration.
     */
    config?: pulumi.Input<inputs.BuildConfig>;
    /**
     * The resulting fully-qualified digest (e.g. {repo}@sha256:deadbeef).
     */
    imageRef?: pulumi.Input<string>;
    /**
     * The name of the container repository to which we should publish the image.
     */
    repo?: pulumi.Input<string>;
    /**
     * A map from the APK architecture to the digest for that architecture and its SBOM.
     */
    sboms?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BuildSboms>}>;
}

/**
 * The set of arguments for constructing a Build resource.
 */
export interface BuildArgs {
    /**
     * The parsed structure of the apko configuration.
     */
    config: pulumi.Input<inputs.BuildConfig>;
    /**
     * The name of the container repository to which we should publish the image.
     */
    repo: pulumi.Input<string>;
    /**
     * A map from the APK architecture to the digest for that architecture and its SBOM.
     */
    sboms?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BuildSboms>}>;
}
