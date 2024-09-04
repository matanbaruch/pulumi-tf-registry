// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Branch extends pulumi.CustomResource {
    /**
     * Get an existing Branch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BranchState, opts?: pulumi.CustomResourceOptions): Branch {
        return new Branch(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/branch:Branch';

    /**
     * Returns true if the given object is an instance of Branch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Branch {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Branch.__pulumiType;
    }

    /**
     * The repository branch to create.
     */
    public readonly branch!: pulumi.Output<string>;
    /**
     * An etag representing the Branch object.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A string representing a branch reference, in the form of 'refs/heads/<branch>'.
     */
    public /*out*/ readonly ref!: pulumi.Output<string>;
    /**
     * The GitHub repository name.
     */
    public readonly repository!: pulumi.Output<string>;
    /**
     * A string storing the reference's HEAD commit's SHA1.
     */
    public /*out*/ readonly sha!: pulumi.Output<string>;
    /**
     * The branch name to start from. Defaults to 'main'.
     */
    public readonly sourceBranch!: pulumi.Output<string | undefined>;
    /**
     * The commit hash to start from. Defaults to the tip of 'source_branch'. If provided, 'source_branch' is ignored.
     */
    public readonly sourceSha!: pulumi.Output<string>;

    /**
     * Create a Branch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BranchArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BranchArgs | BranchState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BranchState | undefined;
            resourceInputs["branch"] = state ? state.branch : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["ref"] = state ? state.ref : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["sha"] = state ? state.sha : undefined;
            resourceInputs["sourceBranch"] = state ? state.sourceBranch : undefined;
            resourceInputs["sourceSha"] = state ? state.sourceSha : undefined;
        } else {
            const args = argsOrState as BranchArgs | undefined;
            if ((!args || args.branch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'branch'");
            }
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            resourceInputs["branch"] = args ? args.branch : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["sourceBranch"] = args ? args.sourceBranch : undefined;
            resourceInputs["sourceSha"] = args ? args.sourceSha : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ref"] = undefined /*out*/;
            resourceInputs["sha"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Branch.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Branch resources.
 */
export interface BranchState {
    /**
     * The repository branch to create.
     */
    branch?: pulumi.Input<string>;
    /**
     * An etag representing the Branch object.
     */
    etag?: pulumi.Input<string>;
    /**
     * A string representing a branch reference, in the form of 'refs/heads/<branch>'.
     */
    ref?: pulumi.Input<string>;
    /**
     * The GitHub repository name.
     */
    repository?: pulumi.Input<string>;
    /**
     * A string storing the reference's HEAD commit's SHA1.
     */
    sha?: pulumi.Input<string>;
    /**
     * The branch name to start from. Defaults to 'main'.
     */
    sourceBranch?: pulumi.Input<string>;
    /**
     * The commit hash to start from. Defaults to the tip of 'source_branch'. If provided, 'source_branch' is ignored.
     */
    sourceSha?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Branch resource.
 */
export interface BranchArgs {
    /**
     * The repository branch to create.
     */
    branch: pulumi.Input<string>;
    /**
     * The GitHub repository name.
     */
    repository: pulumi.Input<string>;
    /**
     * The branch name to start from. Defaults to 'main'.
     */
    sourceBranch?: pulumi.Input<string>;
    /**
     * The commit hash to start from. Defaults to the tip of 'source_branch'. If provided, 'source_branch' is ignored.
     */
    sourceSha?: pulumi.Input<string>;
}
