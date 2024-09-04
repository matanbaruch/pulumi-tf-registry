// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DialogflowFulfillment extends pulumi.CustomResource {
    /**
     * Get an existing DialogflowFulfillment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DialogflowFulfillmentState, opts?: pulumi.CustomResourceOptions): DialogflowFulfillment {
        return new DialogflowFulfillment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/dialogflowFulfillment:DialogflowFulfillment';

    /**
     * Returns true if the given object is an instance of DialogflowFulfillment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DialogflowFulfillment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DialogflowFulfillment.__pulumiType;
    }

    /**
     * The human-readable name of the fulfillment, unique within the agent.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Whether fulfillment is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The field defines whether the fulfillment is enabled for certain features.
     */
    public readonly features!: pulumi.Output<outputs.DialogflowFulfillmentFeature[] | undefined>;
    /**
     * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic
     * authentication with username and password. - Authentication with additional authentication headers.
     */
    public readonly genericWebService!: pulumi.Output<outputs.DialogflowFulfillmentGenericWebService | undefined>;
    /**
     * The unique identifier of the fulfillment. Format: projects/<Project ID>/agent/fulfillment - projects/<Project
     * ID>/locations/<Location ID>/agent/fulfillment
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DialogflowFulfillmentTimeouts | undefined>;

    /**
     * Create a DialogflowFulfillment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DialogflowFulfillmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DialogflowFulfillmentArgs | DialogflowFulfillmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DialogflowFulfillmentState | undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["features"] = state ? state.features : undefined;
            resourceInputs["genericWebService"] = state ? state.genericWebService : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DialogflowFulfillmentArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["features"] = args ? args.features : undefined;
            resourceInputs["genericWebService"] = args ? args.genericWebService : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DialogflowFulfillment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DialogflowFulfillment resources.
 */
export interface DialogflowFulfillmentState {
    /**
     * The human-readable name of the fulfillment, unique within the agent.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether fulfillment is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The field defines whether the fulfillment is enabled for certain features.
     */
    features?: pulumi.Input<pulumi.Input<inputs.DialogflowFulfillmentFeature>[]>;
    /**
     * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic
     * authentication with username and password. - Authentication with additional authentication headers.
     */
    genericWebService?: pulumi.Input<inputs.DialogflowFulfillmentGenericWebService>;
    /**
     * The unique identifier of the fulfillment. Format: projects/<Project ID>/agent/fulfillment - projects/<Project
     * ID>/locations/<Location ID>/agent/fulfillment
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DialogflowFulfillmentTimeouts>;
}

/**
 * The set of arguments for constructing a DialogflowFulfillment resource.
 */
export interface DialogflowFulfillmentArgs {
    /**
     * The human-readable name of the fulfillment, unique within the agent.
     */
    displayName: pulumi.Input<string>;
    /**
     * Whether fulfillment is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The field defines whether the fulfillment is enabled for certain features.
     */
    features?: pulumi.Input<pulumi.Input<inputs.DialogflowFulfillmentFeature>[]>;
    /**
     * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic
     * authentication with username and password. - Authentication with additional authentication headers.
     */
    genericWebService?: pulumi.Input<inputs.DialogflowFulfillmentGenericWebService>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DialogflowFulfillmentTimeouts>;
}
