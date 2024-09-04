// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WorkspacePolicySetExclusion extends pulumi.CustomResource {
    /**
     * Get an existing WorkspacePolicySetExclusion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspacePolicySetExclusionState, opts?: pulumi.CustomResourceOptions): WorkspacePolicySetExclusion {
        return new WorkspacePolicySetExclusion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tfe:index/workspacePolicySetExclusion:WorkspacePolicySetExclusion';

    /**
     * Returns true if the given object is an instance of WorkspacePolicySetExclusion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspacePolicySetExclusion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspacePolicySetExclusion.__pulumiType;
    }

    public readonly policySetId!: pulumi.Output<string>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a WorkspacePolicySetExclusion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspacePolicySetExclusionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspacePolicySetExclusionArgs | WorkspacePolicySetExclusionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkspacePolicySetExclusionState | undefined;
            resourceInputs["policySetId"] = state ? state.policySetId : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as WorkspacePolicySetExclusionArgs | undefined;
            if ((!args || args.policySetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policySetId'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["policySetId"] = args ? args.policySetId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkspacePolicySetExclusion.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkspacePolicySetExclusion resources.
 */
export interface WorkspacePolicySetExclusionState {
    policySetId?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkspacePolicySetExclusion resource.
 */
export interface WorkspacePolicySetExclusionArgs {
    policySetId: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
