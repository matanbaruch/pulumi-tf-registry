// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EventhubConsumerGroup extends pulumi.CustomResource {
    /**
     * Get an existing EventhubConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventhubConsumerGroupState, opts?: pulumi.CustomResourceOptions): EventhubConsumerGroup {
        return new EventhubConsumerGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/eventhubConsumerGroup:EventhubConsumerGroup';

    /**
     * Returns true if the given object is an instance of EventhubConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventhubConsumerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventhubConsumerGroup.__pulumiType;
    }

    public readonly eventhubName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespaceName!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EventhubConsumerGroupTimeouts | undefined>;
    public readonly userMetadata!: pulumi.Output<string | undefined>;

    /**
     * Create a EventhubConsumerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventhubConsumerGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventhubConsumerGroupArgs | EventhubConsumerGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EventhubConsumerGroupState | undefined;
            resourceInputs["eventhubName"] = state ? state.eventhubName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaceName"] = state ? state.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userMetadata"] = state ? state.userMetadata : undefined;
        } else {
            const args = argsOrState as EventhubConsumerGroupArgs | undefined;
            if ((!args || args.eventhubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventhubName'");
            }
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eventhubName"] = args ? args.eventhubName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userMetadata"] = args ? args.userMetadata : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EventhubConsumerGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EventhubConsumerGroup resources.
 */
export interface EventhubConsumerGroupState {
    eventhubName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespaceName?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EventhubConsumerGroupTimeouts>;
    userMetadata?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EventhubConsumerGroup resource.
 */
export interface EventhubConsumerGroupArgs {
    eventhubName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespaceName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EventhubConsumerGroupTimeouts>;
    userMetadata?: pulumi.Input<string>;
}
