// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FabricRoutingProtocol extends pulumi.CustomResource {
    /**
     * Get an existing FabricRoutingProtocol resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FabricRoutingProtocolState, opts?: pulumi.CustomResourceOptions): FabricRoutingProtocol {
        return new FabricRoutingProtocol(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'equinix:index/fabricRoutingProtocol:FabricRoutingProtocol';

    /**
     * Returns true if the given object is an instance of FabricRoutingProtocol.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FabricRoutingProtocol {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FabricRoutingProtocol.__pulumiType;
    }

    /**
     * Bidirectional Forwarding Detection
     */
    public readonly bfds!: pulumi.Output<outputs.FabricRoutingProtocolBfd[] | undefined>;
    /**
     * BGP authorization key
     */
    public readonly bgpAuthKey!: pulumi.Output<string>;
    /**
     * Routing Protocol BGP IPv4
     */
    public readonly bgpIpv4s!: pulumi.Output<outputs.FabricRoutingProtocolBgpIpv4[] | undefined>;
    /**
     * Routing Protocol BGP IPv6
     */
    public readonly bgpIpv6s!: pulumi.Output<outputs.FabricRoutingProtocolBgpIpv6[] | undefined>;
    /**
     * Captures Routing Protocol lifecycle change information
     */
    public /*out*/ readonly changeLogs!: pulumi.Output<outputs.FabricRoutingProtocolChangeLog[]>;
    /**
     * Routing Protocol configuration Changes
     */
    public /*out*/ readonly changes!: pulumi.Output<outputs.FabricRoutingProtocolChange[]>;
    /**
     * Connection URI associated with Routing Protocol
     */
    public readonly connectionUuid!: pulumi.Output<string>;
    /**
     * Customer-provided ASN
     */
    public readonly customerAsn!: pulumi.Output<number>;
    /**
     * Customer-provided Fabric Routing Protocol description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Routing Protocol Direct IPv4
     */
    public readonly directIpv4s!: pulumi.Output<outputs.FabricRoutingProtocolDirectIpv4[] | undefined>;
    /**
     * Routing Protocol Direct IPv6
     */
    public readonly directIpv6s!: pulumi.Output<outputs.FabricRoutingProtocolDirectIpv6[] | undefined>;
    /**
     * Equinix ASN
     */
    public /*out*/ readonly equinixAsn!: pulumi.Output<number>;
    /**
     * Routing Protocol URI information
     */
    public /*out*/ readonly href!: pulumi.Output<string>;
    /**
     * Routing Protocol name. An alpha-numeric 24 characters string which can include only hyphens and underscores
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Routing Protocol type-specific operational data
     */
    public /*out*/ readonly operations!: pulumi.Output<outputs.FabricRoutingProtocolOperation[]>;
    /**
     * Routing Protocol overall state
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FabricRoutingProtocolTimeouts | undefined>;
    /**
     * Defines the routing protocol type like BGP or DIRECT
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Equinix-assigned routing protocol identifier
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a FabricRoutingProtocol resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FabricRoutingProtocolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FabricRoutingProtocolArgs | FabricRoutingProtocolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FabricRoutingProtocolState | undefined;
            resourceInputs["bfds"] = state ? state.bfds : undefined;
            resourceInputs["bgpAuthKey"] = state ? state.bgpAuthKey : undefined;
            resourceInputs["bgpIpv4s"] = state ? state.bgpIpv4s : undefined;
            resourceInputs["bgpIpv6s"] = state ? state.bgpIpv6s : undefined;
            resourceInputs["changeLogs"] = state ? state.changeLogs : undefined;
            resourceInputs["changes"] = state ? state.changes : undefined;
            resourceInputs["connectionUuid"] = state ? state.connectionUuid : undefined;
            resourceInputs["customerAsn"] = state ? state.customerAsn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["directIpv4s"] = state ? state.directIpv4s : undefined;
            resourceInputs["directIpv6s"] = state ? state.directIpv6s : undefined;
            resourceInputs["equinixAsn"] = state ? state.equinixAsn : undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["operations"] = state ? state.operations : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as FabricRoutingProtocolArgs | undefined;
            if ((!args || args.connectionUuid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionUuid'");
            }
            resourceInputs["bfds"] = args ? args.bfds : undefined;
            resourceInputs["bgpAuthKey"] = args ? args.bgpAuthKey : undefined;
            resourceInputs["bgpIpv4s"] = args ? args.bgpIpv4s : undefined;
            resourceInputs["bgpIpv6s"] = args ? args.bgpIpv6s : undefined;
            resourceInputs["connectionUuid"] = args ? args.connectionUuid : undefined;
            resourceInputs["customerAsn"] = args ? args.customerAsn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["directIpv4s"] = args ? args.directIpv4s : undefined;
            resourceInputs["directIpv6s"] = args ? args.directIpv6s : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["changeLogs"] = undefined /*out*/;
            resourceInputs["changes"] = undefined /*out*/;
            resourceInputs["equinixAsn"] = undefined /*out*/;
            resourceInputs["href"] = undefined /*out*/;
            resourceInputs["operations"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FabricRoutingProtocol.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FabricRoutingProtocol resources.
 */
export interface FabricRoutingProtocolState {
    /**
     * Bidirectional Forwarding Detection
     */
    bfds?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolBfd>[]>;
    /**
     * BGP authorization key
     */
    bgpAuthKey?: pulumi.Input<string>;
    /**
     * Routing Protocol BGP IPv4
     */
    bgpIpv4s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolBgpIpv4>[]>;
    /**
     * Routing Protocol BGP IPv6
     */
    bgpIpv6s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolBgpIpv6>[]>;
    /**
     * Captures Routing Protocol lifecycle change information
     */
    changeLogs?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolChangeLog>[]>;
    /**
     * Routing Protocol configuration Changes
     */
    changes?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolChange>[]>;
    /**
     * Connection URI associated with Routing Protocol
     */
    connectionUuid?: pulumi.Input<string>;
    /**
     * Customer-provided ASN
     */
    customerAsn?: pulumi.Input<number>;
    /**
     * Customer-provided Fabric Routing Protocol description
     */
    description?: pulumi.Input<string>;
    /**
     * Routing Protocol Direct IPv4
     */
    directIpv4s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolDirectIpv4>[]>;
    /**
     * Routing Protocol Direct IPv6
     */
    directIpv6s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolDirectIpv6>[]>;
    /**
     * Equinix ASN
     */
    equinixAsn?: pulumi.Input<number>;
    /**
     * Routing Protocol URI information
     */
    href?: pulumi.Input<string>;
    /**
     * Routing Protocol name. An alpha-numeric 24 characters string which can include only hyphens and underscores
     */
    name?: pulumi.Input<string>;
    /**
     * Routing Protocol type-specific operational data
     */
    operations?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolOperation>[]>;
    /**
     * Routing Protocol overall state
     */
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FabricRoutingProtocolTimeouts>;
    /**
     * Defines the routing protocol type like BGP or DIRECT
     */
    type?: pulumi.Input<string>;
    /**
     * Equinix-assigned routing protocol identifier
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FabricRoutingProtocol resource.
 */
export interface FabricRoutingProtocolArgs {
    /**
     * Bidirectional Forwarding Detection
     */
    bfds?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolBfd>[]>;
    /**
     * BGP authorization key
     */
    bgpAuthKey?: pulumi.Input<string>;
    /**
     * Routing Protocol BGP IPv4
     */
    bgpIpv4s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolBgpIpv4>[]>;
    /**
     * Routing Protocol BGP IPv6
     */
    bgpIpv6s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolBgpIpv6>[]>;
    /**
     * Connection URI associated with Routing Protocol
     */
    connectionUuid: pulumi.Input<string>;
    /**
     * Customer-provided ASN
     */
    customerAsn?: pulumi.Input<number>;
    /**
     * Customer-provided Fabric Routing Protocol description
     */
    description?: pulumi.Input<string>;
    /**
     * Routing Protocol Direct IPv4
     */
    directIpv4s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolDirectIpv4>[]>;
    /**
     * Routing Protocol Direct IPv6
     */
    directIpv6s?: pulumi.Input<pulumi.Input<inputs.FabricRoutingProtocolDirectIpv6>[]>;
    /**
     * Routing Protocol name. An alpha-numeric 24 characters string which can include only hyphens and underscores
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FabricRoutingProtocolTimeouts>;
    /**
     * Defines the routing protocol type like BGP or DIRECT
     */
    type?: pulumi.Input<string>;
    /**
     * Equinix-assigned routing protocol identifier
     */
    uuid?: pulumi.Input<string>;
}
