// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Dnat extends pulumi.CustomResource {
    /**
     * Get an existing Dnat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnatState, opts?: pulumi.CustomResourceOptions): Dnat {
        return new Dnat(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dnat:Dnat';

    /**
     * Returns true if the given object is an instance of Dnat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dnat {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dnat.__pulumiType;
    }

    /**
     * Description of the NAT forward.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Network address of the EIP.
     */
    public readonly elasticIp!: pulumi.Output<string>;
    /**
     * Port of the EIP.
     */
    public readonly elasticPort!: pulumi.Output<string>;
    /**
     * ID of the NAT gateway.
     */
    public readonly natId!: pulumi.Output<string>;
    /**
     * Network address of the backend service.
     */
    public readonly privateIp!: pulumi.Output<string>;
    /**
     * Port of intranet.
     */
    public readonly privatePort!: pulumi.Output<string>;
    /**
     * Type of the network protocol. Valid value: `TCP` and `UDP`.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * ID of the VPC.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Dnat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnatArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnatArgs | DnatState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnatState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["elasticIp"] = state ? state.elasticIp : undefined;
            resourceInputs["elasticPort"] = state ? state.elasticPort : undefined;
            resourceInputs["natId"] = state ? state.natId : undefined;
            resourceInputs["privateIp"] = state ? state.privateIp : undefined;
            resourceInputs["privatePort"] = state ? state.privatePort : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as DnatArgs | undefined;
            if ((!args || args.elasticIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'elasticIp'");
            }
            if ((!args || args.elasticPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'elasticPort'");
            }
            if ((!args || args.natId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'natId'");
            }
            if ((!args || args.privateIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateIp'");
            }
            if ((!args || args.privatePort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privatePort'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["elasticIp"] = args ? args.elasticIp : undefined;
            resourceInputs["elasticPort"] = args ? args.elasticPort : undefined;
            resourceInputs["natId"] = args ? args.natId : undefined;
            resourceInputs["privateIp"] = args ? args.privateIp : undefined;
            resourceInputs["privatePort"] = args ? args.privatePort : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dnat.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dnat resources.
 */
export interface DnatState {
    /**
     * Description of the NAT forward.
     */
    description?: pulumi.Input<string>;
    /**
     * Network address of the EIP.
     */
    elasticIp?: pulumi.Input<string>;
    /**
     * Port of the EIP.
     */
    elasticPort?: pulumi.Input<string>;
    /**
     * ID of the NAT gateway.
     */
    natId?: pulumi.Input<string>;
    /**
     * Network address of the backend service.
     */
    privateIp?: pulumi.Input<string>;
    /**
     * Port of intranet.
     */
    privatePort?: pulumi.Input<string>;
    /**
     * Type of the network protocol. Valid value: `TCP` and `UDP`.
     */
    protocol?: pulumi.Input<string>;
    /**
     * ID of the VPC.
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Dnat resource.
 */
export interface DnatArgs {
    /**
     * Description of the NAT forward.
     */
    description?: pulumi.Input<string>;
    /**
     * Network address of the EIP.
     */
    elasticIp: pulumi.Input<string>;
    /**
     * Port of the EIP.
     */
    elasticPort: pulumi.Input<string>;
    /**
     * ID of the NAT gateway.
     */
    natId: pulumi.Input<string>;
    /**
     * Network address of the backend service.
     */
    privateIp: pulumi.Input<string>;
    /**
     * Port of intranet.
     */
    privatePort: pulumi.Input<string>;
    /**
     * Type of the network protocol. Valid value: `TCP` and `UDP`.
     */
    protocol: pulumi.Input<string>;
    /**
     * ID of the VPC.
     */
    vpcId: pulumi.Input<string>;
}
