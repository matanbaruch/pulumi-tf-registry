// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivateDnsResolverVirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing PrivateDnsResolverVirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateDnsResolverVirtualNetworkLinkState, opts?: pulumi.CustomResourceOptions): PrivateDnsResolverVirtualNetworkLink {
        return new PrivateDnsResolverVirtualNetworkLink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/privateDnsResolverVirtualNetworkLink:PrivateDnsResolverVirtualNetworkLink';

    /**
     * Returns true if the given object is an instance of PrivateDnsResolverVirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateDnsResolverVirtualNetworkLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateDnsResolverVirtualNetworkLink.__pulumiType;
    }

    public readonly dnsForwardingRulesetId!: pulumi.Output<string>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PrivateDnsResolverVirtualNetworkLinkTimeouts | undefined>;
    public readonly virtualNetworkId!: pulumi.Output<string>;

    /**
     * Create a PrivateDnsResolverVirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateDnsResolverVirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateDnsResolverVirtualNetworkLinkArgs | PrivateDnsResolverVirtualNetworkLinkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateDnsResolverVirtualNetworkLinkState | undefined;
            resourceInputs["dnsForwardingRulesetId"] = state ? state.dnsForwardingRulesetId : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["virtualNetworkId"] = state ? state.virtualNetworkId : undefined;
        } else {
            const args = argsOrState as PrivateDnsResolverVirtualNetworkLinkArgs | undefined;
            if ((!args || args.dnsForwardingRulesetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsForwardingRulesetId'");
            }
            if ((!args || args.virtualNetworkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkId'");
            }
            resourceInputs["dnsForwardingRulesetId"] = args ? args.dnsForwardingRulesetId : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["virtualNetworkId"] = args ? args.virtualNetworkId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateDnsResolverVirtualNetworkLink.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateDnsResolverVirtualNetworkLink resources.
 */
export interface PrivateDnsResolverVirtualNetworkLinkState {
    dnsForwardingRulesetId?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivateDnsResolverVirtualNetworkLinkTimeouts>;
    virtualNetworkId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrivateDnsResolverVirtualNetworkLink resource.
 */
export interface PrivateDnsResolverVirtualNetworkLinkArgs {
    dnsForwardingRulesetId: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivateDnsResolverVirtualNetworkLinkTimeouts>;
    virtualNetworkId: pulumi.Input<string>;
}
