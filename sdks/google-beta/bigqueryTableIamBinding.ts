// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BigqueryTableIamBinding extends pulumi.CustomResource {
    /**
     * Get an existing BigqueryTableIamBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BigqueryTableIamBindingState, opts?: pulumi.CustomResourceOptions): BigqueryTableIamBinding {
        return new BigqueryTableIamBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/bigqueryTableIamBinding:BigqueryTableIamBinding';

    /**
     * Returns true if the given object is an instance of BigqueryTableIamBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigqueryTableIamBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigqueryTableIamBinding.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.BigqueryTableIamBindingCondition | undefined>;
    public readonly datasetId!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly project!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;
    public readonly tableId!: pulumi.Output<string>;

    /**
     * Create a BigqueryTableIamBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigqueryTableIamBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BigqueryTableIamBindingArgs | BigqueryTableIamBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BigqueryTableIamBindingState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["datasetId"] = state ? state.datasetId : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["tableId"] = state ? state.tableId : undefined;
        } else {
            const args = argsOrState as BigqueryTableIamBindingArgs | undefined;
            if ((!args || args.datasetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datasetId'");
            }
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.tableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableId'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["datasetId"] = args ? args.datasetId : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["tableId"] = args ? args.tableId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BigqueryTableIamBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BigqueryTableIamBinding resources.
 */
export interface BigqueryTableIamBindingState {
    condition?: pulumi.Input<inputs.BigqueryTableIamBindingCondition>;
    datasetId?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    tableId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BigqueryTableIamBinding resource.
 */
export interface BigqueryTableIamBindingArgs {
    condition?: pulumi.Input<inputs.BigqueryTableIamBindingCondition>;
    datasetId: pulumi.Input<string>;
    members: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    role: pulumi.Input<string>;
    tableId: pulumi.Input<string>;
}
