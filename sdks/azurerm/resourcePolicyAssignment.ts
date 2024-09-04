// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ResourcePolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing ResourcePolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourcePolicyAssignmentState, opts?: pulumi.CustomResourceOptions): ResourcePolicyAssignment {
        return new ResourcePolicyAssignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/resourcePolicyAssignment:ResourcePolicyAssignment';

    /**
     * Returns true if the given object is an instance of ResourcePolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourcePolicyAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourcePolicyAssignment.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string | undefined>;
    public readonly enforce!: pulumi.Output<boolean | undefined>;
    public readonly identity!: pulumi.Output<outputs.ResourcePolicyAssignmentIdentity | undefined>;
    public readonly location!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nonComplianceMessages!: pulumi.Output<outputs.ResourcePolicyAssignmentNonComplianceMessage[] | undefined>;
    public readonly notScopes!: pulumi.Output<string[] | undefined>;
    public readonly overrides!: pulumi.Output<outputs.ResourcePolicyAssignmentOverride[] | undefined>;
    public readonly parameters!: pulumi.Output<string | undefined>;
    public readonly policyDefinitionId!: pulumi.Output<string>;
    public readonly resourceId!: pulumi.Output<string>;
    public readonly resourceSelectors!: pulumi.Output<outputs.ResourcePolicyAssignmentResourceSelector[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ResourcePolicyAssignmentTimeouts | undefined>;

    /**
     * Create a ResourcePolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourcePolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourcePolicyAssignmentArgs | ResourcePolicyAssignmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResourcePolicyAssignmentState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enforce"] = state ? state.enforce : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nonComplianceMessages"] = state ? state.nonComplianceMessages : undefined;
            resourceInputs["notScopes"] = state ? state.notScopes : undefined;
            resourceInputs["overrides"] = state ? state.overrides : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["policyDefinitionId"] = state ? state.policyDefinitionId : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["resourceSelectors"] = state ? state.resourceSelectors : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ResourcePolicyAssignmentArgs | undefined;
            if ((!args || args.policyDefinitionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDefinitionId'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enforce"] = args ? args.enforce : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nonComplianceMessages"] = args ? args.nonComplianceMessages : undefined;
            resourceInputs["notScopes"] = args ? args.notScopes : undefined;
            resourceInputs["overrides"] = args ? args.overrides : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyDefinitionId"] = args ? args.policyDefinitionId : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["resourceSelectors"] = args ? args.resourceSelectors : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ResourcePolicyAssignment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ResourcePolicyAssignment resources.
 */
export interface ResourcePolicyAssignmentState {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    enforce?: pulumi.Input<boolean>;
    identity?: pulumi.Input<inputs.ResourcePolicyAssignmentIdentity>;
    location?: pulumi.Input<string>;
    metadata?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nonComplianceMessages?: pulumi.Input<pulumi.Input<inputs.ResourcePolicyAssignmentNonComplianceMessage>[]>;
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    overrides?: pulumi.Input<pulumi.Input<inputs.ResourcePolicyAssignmentOverride>[]>;
    parameters?: pulumi.Input<string>;
    policyDefinitionId?: pulumi.Input<string>;
    resourceId?: pulumi.Input<string>;
    resourceSelectors?: pulumi.Input<pulumi.Input<inputs.ResourcePolicyAssignmentResourceSelector>[]>;
    timeouts?: pulumi.Input<inputs.ResourcePolicyAssignmentTimeouts>;
}

/**
 * The set of arguments for constructing a ResourcePolicyAssignment resource.
 */
export interface ResourcePolicyAssignmentArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    enforce?: pulumi.Input<boolean>;
    identity?: pulumi.Input<inputs.ResourcePolicyAssignmentIdentity>;
    location?: pulumi.Input<string>;
    metadata?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nonComplianceMessages?: pulumi.Input<pulumi.Input<inputs.ResourcePolicyAssignmentNonComplianceMessage>[]>;
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    overrides?: pulumi.Input<pulumi.Input<inputs.ResourcePolicyAssignmentOverride>[]>;
    parameters?: pulumi.Input<string>;
    policyDefinitionId: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
    resourceSelectors?: pulumi.Input<pulumi.Input<inputs.ResourcePolicyAssignmentResourceSelector>[]>;
    timeouts?: pulumi.Input<inputs.ResourcePolicyAssignmentTimeouts>;
}
