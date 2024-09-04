// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CapacityManagementOccCapacityRequest extends pulumi.CustomResource {
    /**
     * Get an existing CapacityManagementOccCapacityRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapacityManagementOccCapacityRequestState, opts?: pulumi.CustomResourceOptions): CapacityManagementOccCapacityRequest {
        return new CapacityManagementOccCapacityRequest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/capacityManagementOccCapacityRequest:CapacityManagementOccCapacityRequest';

    /**
     * Returns true if the given object is an instance of CapacityManagementOccCapacityRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapacityManagementOccCapacityRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapacityManagementOccCapacityRequest.__pulumiType;
    }

    public readonly availabilityDomain!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly dateExpectedCapacityHandover!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly details!: pulumi.Output<outputs.CapacityManagementOccCapacityRequestDetail[]>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly occAvailabilityCatalogId!: pulumi.Output<string>;
    public /*out*/ readonly occCustomerGroupId!: pulumi.Output<string>;
    public readonly patchOperations!: pulumi.Output<outputs.CapacityManagementOccCapacityRequestPatchOperation[] | undefined>;
    public readonly region!: pulumi.Output<string>;
    public readonly requestState!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CapacityManagementOccCapacityRequestTimeouts | undefined>;

    /**
     * Create a CapacityManagementOccCapacityRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityManagementOccCapacityRequestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CapacityManagementOccCapacityRequestArgs | CapacityManagementOccCapacityRequestState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CapacityManagementOccCapacityRequestState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["dateExpectedCapacityHandover"] = state ? state.dateExpectedCapacityHandover : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["details"] = state ? state.details : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["occAvailabilityCatalogId"] = state ? state.occAvailabilityCatalogId : undefined;
            resourceInputs["occCustomerGroupId"] = state ? state.occCustomerGroupId : undefined;
            resourceInputs["patchOperations"] = state ? state.patchOperations : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["requestState"] = state ? state.requestState : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CapacityManagementOccCapacityRequestArgs | undefined;
            if ((!args || args.availabilityDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityDomain'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.dateExpectedCapacityHandover === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dateExpectedCapacityHandover'");
            }
            if ((!args || args.details === undefined) && !opts.urn) {
                throw new Error("Missing required property 'details'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.occAvailabilityCatalogId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'occAvailabilityCatalogId'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["availabilityDomain"] = args ? args.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["dateExpectedCapacityHandover"] = args ? args.dateExpectedCapacityHandover : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["details"] = args ? args.details : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = args ? args.lifecycleDetails : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["occAvailabilityCatalogId"] = args ? args.occAvailabilityCatalogId : undefined;
            resourceInputs["patchOperations"] = args ? args.patchOperations : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["requestState"] = args ? args.requestState : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["occCustomerGroupId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapacityManagementOccCapacityRequest.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CapacityManagementOccCapacityRequest resources.
 */
export interface CapacityManagementOccCapacityRequestState {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    dateExpectedCapacityHandover?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    details?: pulumi.Input<pulumi.Input<inputs.CapacityManagementOccCapacityRequestDetail>[]>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    occAvailabilityCatalogId?: pulumi.Input<string>;
    occCustomerGroupId?: pulumi.Input<string>;
    patchOperations?: pulumi.Input<pulumi.Input<inputs.CapacityManagementOccCapacityRequestPatchOperation>[]>;
    region?: pulumi.Input<string>;
    requestState?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CapacityManagementOccCapacityRequestTimeouts>;
}

/**
 * The set of arguments for constructing a CapacityManagementOccCapacityRequest resource.
 */
export interface CapacityManagementOccCapacityRequestArgs {
    availabilityDomain: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    dateExpectedCapacityHandover: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    details: pulumi.Input<pulumi.Input<inputs.CapacityManagementOccCapacityRequestDetail>[]>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    occAvailabilityCatalogId: pulumi.Input<string>;
    patchOperations?: pulumi.Input<pulumi.Input<inputs.CapacityManagementOccCapacityRequestPatchOperation>[]>;
    region: pulumi.Input<string>;
    requestState?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CapacityManagementOccCapacityRequestTimeouts>;
}
