// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cgnv6ServerPort extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6ServerPort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6ServerPortState, opts?: pulumi.CustomResourceOptions): Cgnv6ServerPort {
        return new Cgnv6ServerPort(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6ServerPort:Cgnv6ServerPort';

    /**
     * Returns true if the given object is an instance of Cgnv6ServerPort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6ServerPort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6ServerPort.__pulumiType;
    }

    /**
     * 'enable': enable; 'disable': disable;
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * 'tcp': TCP Port; 'udp': UDP Port;
     */
    public readonly followPortProtocol!: pulumi.Output<string | undefined>;
    /**
     * Health Check (Monitor Name)
     */
    public readonly healthCheck!: pulumi.Output<string | undefined>;
    /**
     * Disable health check
     */
    public readonly healthCheckDisable!: pulumi.Output<number | undefined>;
    /**
     * Specify which port to follow for health status (Port Number)
     */
    public readonly healthCheckFollowPort!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Port Number
     */
    public readonly portNumber!: pulumi.Output<number>;
    /**
     * 'tcp': TCP Port; 'udp': UDP Port;
     */
    public readonly protocol!: pulumi.Output<string>;
    public readonly samplingEnables!: pulumi.Output<outputs.Cgnv6ServerPortSamplingEnable[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6ServerPort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cgnv6ServerPortArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6ServerPortArgs | Cgnv6ServerPortState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6ServerPortState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["followPortProtocol"] = state ? state.followPortProtocol : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["healthCheckDisable"] = state ? state.healthCheckDisable : undefined;
            resourceInputs["healthCheckFollowPort"] = state ? state.healthCheckFollowPort : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portNumber"] = state ? state.portNumber : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6ServerPortArgs | undefined;
            if ((!args || args.portNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portNumber'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["followPortProtocol"] = args ? args.followPortProtocol : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["healthCheckDisable"] = args ? args.healthCheckDisable : undefined;
            resourceInputs["healthCheckFollowPort"] = args ? args.healthCheckFollowPort : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portNumber"] = args ? args.portNumber : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6ServerPort.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6ServerPort resources.
 */
export interface Cgnv6ServerPortState {
    /**
     * 'enable': enable; 'disable': disable;
     */
    action?: pulumi.Input<string>;
    /**
     * 'tcp': TCP Port; 'udp': UDP Port;
     */
    followPortProtocol?: pulumi.Input<string>;
    /**
     * Health Check (Monitor Name)
     */
    healthCheck?: pulumi.Input<string>;
    /**
     * Disable health check
     */
    healthCheckDisable?: pulumi.Input<number>;
    /**
     * Specify which port to follow for health status (Port Number)
     */
    healthCheckFollowPort?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Port Number
     */
    portNumber?: pulumi.Input<number>;
    /**
     * 'tcp': TCP Port; 'udp': UDP Port;
     */
    protocol?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6ServerPortSamplingEnable>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6ServerPort resource.
 */
export interface Cgnv6ServerPortArgs {
    /**
     * 'enable': enable; 'disable': disable;
     */
    action?: pulumi.Input<string>;
    /**
     * 'tcp': TCP Port; 'udp': UDP Port;
     */
    followPortProtocol?: pulumi.Input<string>;
    /**
     * Health Check (Monitor Name)
     */
    healthCheck?: pulumi.Input<string>;
    /**
     * Disable health check
     */
    healthCheckDisable?: pulumi.Input<number>;
    /**
     * Specify which port to follow for health status (Port Number)
     */
    healthCheckFollowPort?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Port Number
     */
    portNumber: pulumi.Input<number>;
    /**
     * 'tcp': TCP Port; 'udp': UDP Port;
     */
    protocol: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6ServerPortSamplingEnable>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
