// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FlowspecPort extends pulumi.CustomResource {
    /**
     * Get an existing FlowspecPort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlowspecPortState, opts?: pulumi.CustomResourceOptions): FlowspecPort {
        return new FlowspecPort(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/flowspecPort:FlowspecPort';

    /**
     * Returns true if the given object is an instance of FlowspecPort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FlowspecPort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FlowspecPort.__pulumiType;
    }

    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 'eq': Match only packets on a given port; 'gt': Match only packets with a greater port number; 'lt': Match only packets
     * with a lower port number; 'range': match only packets in the range of port numbers;
     */
    public readonly portAttribute!: pulumi.Output<string>;
    /**
     * Specify the port number
     */
    public readonly portNum!: pulumi.Output<number>;
    /**
     * Specify the port number
     */
    public readonly portNumEnd!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a FlowspecPort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlowspecPortArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FlowspecPortArgs | FlowspecPortState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FlowspecPortState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portAttribute"] = state ? state.portAttribute : undefined;
            resourceInputs["portNum"] = state ? state.portNum : undefined;
            resourceInputs["portNumEnd"] = state ? state.portNumEnd : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as FlowspecPortArgs | undefined;
            if ((!args || args.portAttribute === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portAttribute'");
            }
            if ((!args || args.portNum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portNum'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portAttribute"] = args ? args.portAttribute : undefined;
            resourceInputs["portNum"] = args ? args.portNum : undefined;
            resourceInputs["portNumEnd"] = args ? args.portNumEnd : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FlowspecPort.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FlowspecPort resources.
 */
export interface FlowspecPortState {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * 'eq': Match only packets on a given port; 'gt': Match only packets with a greater port number; 'lt': Match only packets
     * with a lower port number; 'range': match only packets in the range of port numbers;
     */
    portAttribute?: pulumi.Input<string>;
    /**
     * Specify the port number
     */
    portNum?: pulumi.Input<number>;
    /**
     * Specify the port number
     */
    portNumEnd?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FlowspecPort resource.
 */
export interface FlowspecPortArgs {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * 'eq': Match only packets on a given port; 'gt': Match only packets with a greater port number; 'lt': Match only packets
     * with a lower port number; 'range': match only packets in the range of port numbers;
     */
    portAttribute: pulumi.Input<string>;
    /**
     * Specify the port number
     */
    portNum: pulumi.Input<number>;
    /**
     * Specify the port number
     */
    portNumEnd?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
