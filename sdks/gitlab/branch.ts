// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
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
    public static readonly __pulumiType = 'gitlab:index/branch:Branch';

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
     * Bool, true if you can push to the branch.
     */
    public /*out*/ readonly canPush!: pulumi.Output<boolean>;
    /**
     * The commit associated with the branch ref.
     */
    public /*out*/ readonly commits!: pulumi.Output<outputs.BranchCommit[]>;
    /**
     * Bool, true if branch is the default branch for the project.
     */
    public /*out*/ readonly default!: pulumi.Output<boolean>;
    /**
     * Bool, true if developer level access allows to merge branch.
     */
    public /*out*/ readonly developerCanMerge!: pulumi.Output<boolean>;
    /**
     * Bool, true if developer level access allows git push.
     */
    public /*out*/ readonly developerCanPush!: pulumi.Output<boolean>;
    /**
     * Bool, true if the branch has been merged into it's parent.
     */
    public /*out*/ readonly merged!: pulumi.Output<boolean>;
    /**
     * The name for this branch.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID or full path of the project which the branch is created against.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * Bool, true if branch has branch protection.
     */
    public /*out*/ readonly protected!: pulumi.Output<boolean>;
    /**
     * The ref which the branch is created from.
     */
    public readonly ref!: pulumi.Output<string>;
    /**
     * The url of the created branch (https).
     */
    public /*out*/ readonly webUrl!: pulumi.Output<string>;

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
            resourceInputs["canPush"] = state ? state.canPush : undefined;
            resourceInputs["commits"] = state ? state.commits : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["developerCanMerge"] = state ? state.developerCanMerge : undefined;
            resourceInputs["developerCanPush"] = state ? state.developerCanPush : undefined;
            resourceInputs["merged"] = state ? state.merged : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["protected"] = state ? state.protected : undefined;
            resourceInputs["ref"] = state ? state.ref : undefined;
            resourceInputs["webUrl"] = state ? state.webUrl : undefined;
        } else {
            const args = argsOrState as BranchArgs | undefined;
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.ref === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ref'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["ref"] = args ? args.ref : undefined;
            resourceInputs["canPush"] = undefined /*out*/;
            resourceInputs["commits"] = undefined /*out*/;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["developerCanMerge"] = undefined /*out*/;
            resourceInputs["developerCanPush"] = undefined /*out*/;
            resourceInputs["merged"] = undefined /*out*/;
            resourceInputs["protected"] = undefined /*out*/;
            resourceInputs["webUrl"] = undefined /*out*/;
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
     * Bool, true if you can push to the branch.
     */
    canPush?: pulumi.Input<boolean>;
    /**
     * The commit associated with the branch ref.
     */
    commits?: pulumi.Input<pulumi.Input<inputs.BranchCommit>[]>;
    /**
     * Bool, true if branch is the default branch for the project.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Bool, true if developer level access allows to merge branch.
     */
    developerCanMerge?: pulumi.Input<boolean>;
    /**
     * Bool, true if developer level access allows git push.
     */
    developerCanPush?: pulumi.Input<boolean>;
    /**
     * Bool, true if the branch has been merged into it's parent.
     */
    merged?: pulumi.Input<boolean>;
    /**
     * The name for this branch.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID or full path of the project which the branch is created against.
     */
    project?: pulumi.Input<string>;
    /**
     * Bool, true if branch has branch protection.
     */
    protected?: pulumi.Input<boolean>;
    /**
     * The ref which the branch is created from.
     */
    ref?: pulumi.Input<string>;
    /**
     * The url of the created branch (https).
     */
    webUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Branch resource.
 */
export interface BranchArgs {
    /**
     * The name for this branch.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID or full path of the project which the branch is created against.
     */
    project: pulumi.Input<string>;
    /**
     * The ref which the branch is created from.
     */
    ref: pulumi.Input<string>;
}
