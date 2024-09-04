// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Natgateway extends pulumi.CustomResource {
    /**
     * Get an existing Natgateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatgatewayState, opts?: pulumi.CustomResourceOptions): Natgateway {
        return new Natgateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ionoscloud:index/natgateway:Natgateway';

    /**
     * Returns true if the given object is an instance of Natgateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Natgateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Natgateway.__pulumiType;
    }

    public readonly datacenterId!: pulumi.Output<string>;
    /**
     * A list of Local Area Networks the node pool should be part of
     */
    public readonly lans!: pulumi.Output<outputs.NatgatewayLan[]>;
    /**
     * Name of the NAT gateway
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Collection of public IP addresses of the NAT gateway. Should be customer reserved IP addresses in that location
     */
    public readonly publicIps!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.NatgatewayTimeouts | undefined>;

    /**
     * Create a Natgateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatgatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NatgatewayArgs | NatgatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NatgatewayState | undefined;
            resourceInputs["datacenterId"] = state ? state.datacenterId : undefined;
            resourceInputs["lans"] = state ? state.lans : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicIps"] = state ? state.publicIps : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NatgatewayArgs | undefined;
            if ((!args || args.datacenterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datacenterId'");
            }
            if ((!args || args.lans === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lans'");
            }
            if ((!args || args.publicIps === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicIps'");
            }
            resourceInputs["datacenterId"] = args ? args.datacenterId : undefined;
            resourceInputs["lans"] = args ? args.lans : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicIps"] = args ? args.publicIps : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Natgateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Natgateway resources.
 */
export interface NatgatewayState {
    datacenterId?: pulumi.Input<string>;
    /**
     * A list of Local Area Networks the node pool should be part of
     */
    lans?: pulumi.Input<pulumi.Input<inputs.NatgatewayLan>[]>;
    /**
     * Name of the NAT gateway
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of public IP addresses of the NAT gateway. Should be customer reserved IP addresses in that location
     */
    publicIps?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.NatgatewayTimeouts>;
}

/**
 * The set of arguments for constructing a Natgateway resource.
 */
export interface NatgatewayArgs {
    datacenterId: pulumi.Input<string>;
    /**
     * A list of Local Area Networks the node pool should be part of
     */
    lans: pulumi.Input<pulumi.Input<inputs.NatgatewayLan>[]>;
    /**
     * Name of the NAT gateway
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of public IP addresses of the NAT gateway. Should be customer reserved IP addresses in that location
     */
    publicIps: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.NatgatewayTimeouts>;
}
