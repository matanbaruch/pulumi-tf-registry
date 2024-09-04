// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TrafficManagerAzureEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerAzureEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrafficManagerAzureEndpointState, opts?: pulumi.CustomResourceOptions): TrafficManagerAzureEndpoint {
        return new TrafficManagerAzureEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/trafficManagerAzureEndpoint:TrafficManagerAzureEndpoint';

    /**
     * Returns true if the given object is an instance of TrafficManagerAzureEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrafficManagerAzureEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrafficManagerAzureEndpoint.__pulumiType;
    }

    public readonly alwaysServeEnabled!: pulumi.Output<boolean | undefined>;
    public readonly customHeaders!: pulumi.Output<outputs.TrafficManagerAzureEndpointCustomHeader[] | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly geoMappings!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number | undefined>;
    public readonly profileId!: pulumi.Output<string>;
    public readonly subnets!: pulumi.Output<outputs.TrafficManagerAzureEndpointSubnet[] | undefined>;
    public readonly targetResourceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.TrafficManagerAzureEndpointTimeouts | undefined>;
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a TrafficManagerAzureEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrafficManagerAzureEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TrafficManagerAzureEndpointArgs | TrafficManagerAzureEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TrafficManagerAzureEndpointState | undefined;
            resourceInputs["alwaysServeEnabled"] = state ? state.alwaysServeEnabled : undefined;
            resourceInputs["customHeaders"] = state ? state.customHeaders : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["geoMappings"] = state ? state.geoMappings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["profileId"] = state ? state.profileId : undefined;
            resourceInputs["subnets"] = state ? state.subnets : undefined;
            resourceInputs["targetResourceId"] = state ? state.targetResourceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as TrafficManagerAzureEndpointArgs | undefined;
            if ((!args || args.profileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileId'");
            }
            if ((!args || args.targetResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            resourceInputs["alwaysServeEnabled"] = args ? args.alwaysServeEnabled : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["geoMappings"] = args ? args.geoMappings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["profileId"] = args ? args.profileId : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TrafficManagerAzureEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TrafficManagerAzureEndpoint resources.
 */
export interface TrafficManagerAzureEndpointState {
    alwaysServeEnabled?: pulumi.Input<boolean>;
    customHeaders?: pulumi.Input<pulumi.Input<inputs.TrafficManagerAzureEndpointCustomHeader>[]>;
    enabled?: pulumi.Input<boolean>;
    geoMappings?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    profileId?: pulumi.Input<string>;
    subnets?: pulumi.Input<pulumi.Input<inputs.TrafficManagerAzureEndpointSubnet>[]>;
    targetResourceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TrafficManagerAzureEndpointTimeouts>;
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a TrafficManagerAzureEndpoint resource.
 */
export interface TrafficManagerAzureEndpointArgs {
    alwaysServeEnabled?: pulumi.Input<boolean>;
    customHeaders?: pulumi.Input<pulumi.Input<inputs.TrafficManagerAzureEndpointCustomHeader>[]>;
    enabled?: pulumi.Input<boolean>;
    geoMappings?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    profileId: pulumi.Input<string>;
    subnets?: pulumi.Input<pulumi.Input<inputs.TrafficManagerAzureEndpointSubnet>[]>;
    targetResourceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TrafficManagerAzureEndpointTimeouts>;
    weight?: pulumi.Input<number>;
}
