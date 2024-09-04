// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SynapseRoleAssignment extends pulumi.CustomResource {
    /**
     * Get an existing SynapseRoleAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SynapseRoleAssignmentState, opts?: pulumi.CustomResourceOptions): SynapseRoleAssignment {
        return new SynapseRoleAssignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/synapseRoleAssignment:SynapseRoleAssignment';

    /**
     * Returns true if the given object is an instance of SynapseRoleAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SynapseRoleAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SynapseRoleAssignment.__pulumiType;
    }

    public readonly principalId!: pulumi.Output<string>;
    public readonly principalType!: pulumi.Output<string | undefined>;
    public readonly roleName!: pulumi.Output<string>;
    public readonly synapseSparkPoolId!: pulumi.Output<string | undefined>;
    public readonly synapseWorkspaceId!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SynapseRoleAssignmentTimeouts | undefined>;

    /**
     * Create a SynapseRoleAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynapseRoleAssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SynapseRoleAssignmentArgs | SynapseRoleAssignmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SynapseRoleAssignmentState | undefined;
            resourceInputs["principalId"] = state ? state.principalId : undefined;
            resourceInputs["principalType"] = state ? state.principalType : undefined;
            resourceInputs["roleName"] = state ? state.roleName : undefined;
            resourceInputs["synapseSparkPoolId"] = state ? state.synapseSparkPoolId : undefined;
            resourceInputs["synapseWorkspaceId"] = state ? state.synapseWorkspaceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SynapseRoleAssignmentArgs | undefined;
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.roleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleName'");
            }
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["principalType"] = args ? args.principalType : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["synapseSparkPoolId"] = args ? args.synapseSparkPoolId : undefined;
            resourceInputs["synapseWorkspaceId"] = args ? args.synapseWorkspaceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SynapseRoleAssignment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SynapseRoleAssignment resources.
 */
export interface SynapseRoleAssignmentState {
    principalId?: pulumi.Input<string>;
    principalType?: pulumi.Input<string>;
    roleName?: pulumi.Input<string>;
    synapseSparkPoolId?: pulumi.Input<string>;
    synapseWorkspaceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SynapseRoleAssignmentTimeouts>;
}

/**
 * The set of arguments for constructing a SynapseRoleAssignment resource.
 */
export interface SynapseRoleAssignmentArgs {
    principalId: pulumi.Input<string>;
    principalType?: pulumi.Input<string>;
    roleName: pulumi.Input<string>;
    synapseSparkPoolId?: pulumi.Input<string>;
    synapseWorkspaceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SynapseRoleAssignmentTimeouts>;
}
