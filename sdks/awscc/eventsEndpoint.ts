// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EventsEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing EventsEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventsEndpointState, opts?: pulumi.CustomResourceOptions): EventsEndpoint {
        return new EventsEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/eventsEndpoint:EventsEndpoint';

    /**
     * Returns true if the given object is an instance of EventsEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventsEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventsEndpoint.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly endpointId!: pulumi.Output<string>;
    public /*out*/ readonly endpointUrl!: pulumi.Output<string>;
    public readonly eventBuses!: pulumi.Output<outputs.EventsEndpointEventBus[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly replicationConfig!: pulumi.Output<outputs.EventsEndpointReplicationConfig>;
    public readonly roleArn!: pulumi.Output<string>;
    public readonly routingConfig!: pulumi.Output<outputs.EventsEndpointRoutingConfig>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly stateReason!: pulumi.Output<string>;

    /**
     * Create a EventsEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventsEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventsEndpointArgs | EventsEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EventsEndpointState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["endpointId"] = state ? state.endpointId : undefined;
            resourceInputs["endpointUrl"] = state ? state.endpointUrl : undefined;
            resourceInputs["eventBuses"] = state ? state.eventBuses : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["replicationConfig"] = state ? state.replicationConfig : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["routingConfig"] = state ? state.routingConfig : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["stateReason"] = state ? state.stateReason : undefined;
        } else {
            const args = argsOrState as EventsEndpointArgs | undefined;
            if ((!args || args.eventBuses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventBuses'");
            }
            if ((!args || args.routingConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routingConfig'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["eventBuses"] = args ? args.eventBuses : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["replicationConfig"] = args ? args.replicationConfig : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["routingConfig"] = args ? args.routingConfig : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["endpointId"] = undefined /*out*/;
            resourceInputs["endpointUrl"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EventsEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EventsEndpoint resources.
 */
export interface EventsEndpointState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    endpointId?: pulumi.Input<string>;
    endpointUrl?: pulumi.Input<string>;
    eventBuses?: pulumi.Input<pulumi.Input<inputs.EventsEndpointEventBus>[]>;
    name?: pulumi.Input<string>;
    replicationConfig?: pulumi.Input<inputs.EventsEndpointReplicationConfig>;
    roleArn?: pulumi.Input<string>;
    routingConfig?: pulumi.Input<inputs.EventsEndpointRoutingConfig>;
    state?: pulumi.Input<string>;
    stateReason?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EventsEndpoint resource.
 */
export interface EventsEndpointArgs {
    description?: pulumi.Input<string>;
    eventBuses: pulumi.Input<pulumi.Input<inputs.EventsEndpointEventBus>[]>;
    name?: pulumi.Input<string>;
    replicationConfig?: pulumi.Input<inputs.EventsEndpointReplicationConfig>;
    roleArn?: pulumi.Input<string>;
    routingConfig: pulumi.Input<inputs.EventsEndpointRoutingConfig>;
}
