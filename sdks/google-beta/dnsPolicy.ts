// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DnsPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DnsPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsPolicyState, opts?: pulumi.CustomResourceOptions): DnsPolicy {
        return new DnsPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/dnsPolicy:DnsPolicy';

    /**
     * Returns true if the given object is an instance of DnsPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsPolicy.__pulumiType;
    }

    /**
     * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name
     * server that you choose. Names such as .internal are not available when an alternative name server is specified.
     */
    public readonly alternativeNameServerConfig!: pulumi.Output<outputs.DnsPolicyAlternativeNameServerConfig | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When
     * enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy.
     */
    public readonly enableInboundForwarding!: pulumi.Output<boolean | undefined>;
    /**
     * Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
     */
    public readonly enableLogging!: pulumi.Output<boolean | undefined>;
    /**
     * User assigned name for this policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    public readonly networks!: pulumi.Output<outputs.DnsPolicyNetwork[] | undefined>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DnsPolicyTimeouts | undefined>;

    /**
     * Create a DnsPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DnsPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnsPolicyArgs | DnsPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnsPolicyState | undefined;
            resourceInputs["alternativeNameServerConfig"] = state ? state.alternativeNameServerConfig : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableInboundForwarding"] = state ? state.enableInboundForwarding : undefined;
            resourceInputs["enableLogging"] = state ? state.enableLogging : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DnsPolicyArgs | undefined;
            resourceInputs["alternativeNameServerConfig"] = args ? args.alternativeNameServerConfig : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enableInboundForwarding"] = args ? args.enableInboundForwarding : undefined;
            resourceInputs["enableLogging"] = args ? args.enableLogging : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DnsPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DnsPolicy resources.
 */
export interface DnsPolicyState {
    /**
     * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name
     * server that you choose. Names such as .internal are not available when an alternative name server is specified.
     */
    alternativeNameServerConfig?: pulumi.Input<inputs.DnsPolicyAlternativeNameServerConfig>;
    description?: pulumi.Input<string>;
    /**
     * Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When
     * enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy.
     */
    enableInboundForwarding?: pulumi.Input<boolean>;
    /**
     * Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
     */
    enableLogging?: pulumi.Input<boolean>;
    /**
     * User assigned name for this policy.
     */
    name?: pulumi.Input<string>;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    networks?: pulumi.Input<pulumi.Input<inputs.DnsPolicyNetwork>[]>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DnsPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a DnsPolicy resource.
 */
export interface DnsPolicyArgs {
    /**
     * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name
     * server that you choose. Names such as .internal are not available when an alternative name server is specified.
     */
    alternativeNameServerConfig?: pulumi.Input<inputs.DnsPolicyAlternativeNameServerConfig>;
    description?: pulumi.Input<string>;
    /**
     * Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When
     * enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy.
     */
    enableInboundForwarding?: pulumi.Input<boolean>;
    /**
     * Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
     */
    enableLogging?: pulumi.Input<boolean>;
    /**
     * User assigned name for this policy.
     */
    name?: pulumi.Input<string>;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    networks?: pulumi.Input<pulumi.Input<inputs.DnsPolicyNetwork>[]>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DnsPolicyTimeouts>;
}
