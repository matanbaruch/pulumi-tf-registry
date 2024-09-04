// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WorkbenchInstanceIamBinding extends pulumi.CustomResource {
    /**
     * Get an existing WorkbenchInstanceIamBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkbenchInstanceIamBindingState, opts?: pulumi.CustomResourceOptions): WorkbenchInstanceIamBinding {
        return new WorkbenchInstanceIamBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/workbenchInstanceIamBinding:WorkbenchInstanceIamBinding';

    /**
     * Returns true if the given object is an instance of WorkbenchInstanceIamBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkbenchInstanceIamBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkbenchInstanceIamBinding.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.WorkbenchInstanceIamBindingCondition | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a WorkbenchInstanceIamBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkbenchInstanceIamBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkbenchInstanceIamBindingArgs | WorkbenchInstanceIamBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkbenchInstanceIamBindingState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as WorkbenchInstanceIamBindingArgs | undefined;
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkbenchInstanceIamBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkbenchInstanceIamBinding resources.
 */
export interface WorkbenchInstanceIamBindingState {
    condition?: pulumi.Input<inputs.WorkbenchInstanceIamBindingCondition>;
    etag?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkbenchInstanceIamBinding resource.
 */
export interface WorkbenchInstanceIamBindingArgs {
    condition?: pulumi.Input<inputs.WorkbenchInstanceIamBindingCondition>;
    location?: pulumi.Input<string>;
    members: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    role: pulumi.Input<string>;
}
