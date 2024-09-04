// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementWhereUsed extends pulumi.CustomResource {
    /**
     * Get an existing ManagementWhereUsed resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementWhereUsedState, opts?: pulumi.CustomResourceOptions): ManagementWhereUsed {
        return new ManagementWhereUsed(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementWhereUsed:ManagementWhereUsed';

    /**
     * Returns true if the given object is an instance of ManagementWhereUsed.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementWhereUsed {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementWhereUsed.__pulumiType;
    }

    /**
     * Indicates whether to dereference "members" field by details level for every object in reply.
     */
    public readonly dereferenceGroupMembers!: pulumi.Output<boolean | undefined>;
    /**
     * Search for indirect usage.
     */
    public readonly indirect!: pulumi.Output<boolean | undefined>;
    /**
     * Maximum nesting level during indirect usage search.
     */
    public readonly indirectMaxDepth!: pulumi.Output<number | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Indicates whether to calculate and show "groups" field for every object in reply.
     */
    public readonly showMembership!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ManagementWhereUsed resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementWhereUsedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementWhereUsedArgs | ManagementWhereUsedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementWhereUsedState | undefined;
            resourceInputs["dereferenceGroupMembers"] = state ? state.dereferenceGroupMembers : undefined;
            resourceInputs["indirect"] = state ? state.indirect : undefined;
            resourceInputs["indirectMaxDepth"] = state ? state.indirectMaxDepth : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["showMembership"] = state ? state.showMembership : undefined;
        } else {
            const args = argsOrState as ManagementWhereUsedArgs | undefined;
            resourceInputs["dereferenceGroupMembers"] = args ? args.dereferenceGroupMembers : undefined;
            resourceInputs["indirect"] = args ? args.indirect : undefined;
            resourceInputs["indirectMaxDepth"] = args ? args.indirectMaxDepth : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["showMembership"] = args ? args.showMembership : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementWhereUsed.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementWhereUsed resources.
 */
export interface ManagementWhereUsedState {
    /**
     * Indicates whether to dereference "members" field by details level for every object in reply.
     */
    dereferenceGroupMembers?: pulumi.Input<boolean>;
    /**
     * Search for indirect usage.
     */
    indirect?: pulumi.Input<boolean>;
    /**
     * Maximum nesting level during indirect usage search.
     */
    indirectMaxDepth?: pulumi.Input<number>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates whether to calculate and show "groups" field for every object in reply.
     */
    showMembership?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ManagementWhereUsed resource.
 */
export interface ManagementWhereUsedArgs {
    /**
     * Indicates whether to dereference "members" field by details level for every object in reply.
     */
    dereferenceGroupMembers?: pulumi.Input<boolean>;
    /**
     * Search for indirect usage.
     */
    indirect?: pulumi.Input<boolean>;
    /**
     * Maximum nesting level during indirect usage search.
     */
    indirectMaxDepth?: pulumi.Input<number>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates whether to calculate and show "groups" field for every object in reply.
     */
    showMembership?: pulumi.Input<boolean>;
}
