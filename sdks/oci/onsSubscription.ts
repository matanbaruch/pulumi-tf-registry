// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OnsSubscription extends pulumi.CustomResource {
    /**
     * Get an existing OnsSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OnsSubscriptionState, opts?: pulumi.CustomResourceOptions): OnsSubscription {
        return new OnsSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/onsSubscription:OnsSubscription';

    /**
     * Returns true if the given object is an instance of OnsSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OnsSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OnsSubscription.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly deliveryPolicy!: pulumi.Output<string>;
    public readonly endpoint!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly protocol!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.OnsSubscriptionTimeouts | undefined>;
    public readonly topicId!: pulumi.Output<string>;

    /**
     * Create a OnsSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OnsSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OnsSubscriptionArgs | OnsSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OnsSubscriptionState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["deliveryPolicy"] = state ? state.deliveryPolicy : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["topicId"] = state ? state.topicId : undefined;
        } else {
            const args = argsOrState as OnsSubscriptionArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.endpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoint'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.topicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["deliveryPolicy"] = args ? args.deliveryPolicy : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["topicId"] = args ? args.topicId : undefined;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OnsSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OnsSubscription resources.
 */
export interface OnsSubscriptionState {
    compartmentId?: pulumi.Input<string>;
    createdTime?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    deliveryPolicy?: pulumi.Input<string>;
    endpoint?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    protocol?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OnsSubscriptionTimeouts>;
    topicId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OnsSubscription resource.
 */
export interface OnsSubscriptionArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    deliveryPolicy?: pulumi.Input<string>;
    endpoint: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    protocol: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OnsSubscriptionTimeouts>;
    topicId: pulumi.Input<string>;
}
