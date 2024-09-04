// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstDefaultL4Type extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstDefaultL4Type resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstDefaultL4TypeState, opts?: pulumi.CustomResourceOptions): DdosDstDefaultL4Type {
        return new DdosDstDefaultL4Type(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstDefaultL4Type:DdosDstDefaultL4Type';

    /**
     * Returns true if the given object is an instance of DdosDstDefaultL4Type.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstDefaultL4Type {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstDefaultL4Type.__pulumiType;
    }

    /**
     * DefaultAddressType
     */
    public readonly defaultAddressType!: pulumi.Output<string>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    public readonly deny!: pulumi.Output<number | undefined>;
    /**
     * Disable TCP SYN Authentication
     */
    public readonly disableSynAuth!: pulumi.Output<number | undefined>;
    /**
     * Drop fragmented packets
     */
    public readonly dropFragPkt!: pulumi.Output<number | undefined>;
    /**
     * 'disable': disable; 'enable': enable;
     */
    public readonly dropOnNoPortMatch!: pulumi.Output<string | undefined>;
    /**
     * Global limit ID
     */
    public readonly glid!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of re-transmit SYN per flow. Exceed action set to Drop
     */
    public readonly maxRexmitSynPerFlow!: pulumi.Output<number | undefined>;
    /**
     * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Enable stateful tracking of sessions (Default is stateless)
     */
    public readonly stateful!: pulumi.Output<number | undefined>;
    /**
     * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK;
     * 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
     */
    public readonly synAuth!: pulumi.Output<string | undefined>;
    /**
     * Enable SYN Cookie
     */
    public readonly synCookie!: pulumi.Output<number | undefined>;
    /**
     * Send reset to client when rate exceeds or session ages out
     */
    public readonly tcpResetClient!: pulumi.Output<number | undefined>;
    /**
     * Send reset to server when rate exceeds or session ages out
     */
    public readonly tcpResetServer!: pulumi.Output<number | undefined>;
    public readonly tunnelDecap!: pulumi.Output<outputs.DdosDstDefaultL4TypeTunnelDecap | undefined>;
    public readonly tunnelRateLimit!: pulumi.Output<outputs.DdosDstDefaultL4TypeTunnelRateLimit | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosDstDefaultL4Type resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstDefaultL4TypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstDefaultL4TypeArgs | DdosDstDefaultL4TypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstDefaultL4TypeState | undefined;
            resourceInputs["defaultAddressType"] = state ? state.defaultAddressType : undefined;
            resourceInputs["deny"] = state ? state.deny : undefined;
            resourceInputs["disableSynAuth"] = state ? state.disableSynAuth : undefined;
            resourceInputs["dropFragPkt"] = state ? state.dropFragPkt : undefined;
            resourceInputs["dropOnNoPortMatch"] = state ? state.dropOnNoPortMatch : undefined;
            resourceInputs["glid"] = state ? state.glid : undefined;
            resourceInputs["maxRexmitSynPerFlow"] = state ? state.maxRexmitSynPerFlow : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["stateful"] = state ? state.stateful : undefined;
            resourceInputs["synAuth"] = state ? state.synAuth : undefined;
            resourceInputs["synCookie"] = state ? state.synCookie : undefined;
            resourceInputs["tcpResetClient"] = state ? state.tcpResetClient : undefined;
            resourceInputs["tcpResetServer"] = state ? state.tcpResetServer : undefined;
            resourceInputs["tunnelDecap"] = state ? state.tunnelDecap : undefined;
            resourceInputs["tunnelRateLimit"] = state ? state.tunnelRateLimit : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosDstDefaultL4TypeArgs | undefined;
            if ((!args || args.defaultAddressType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultAddressType'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["defaultAddressType"] = args ? args.defaultAddressType : undefined;
            resourceInputs["deny"] = args ? args.deny : undefined;
            resourceInputs["disableSynAuth"] = args ? args.disableSynAuth : undefined;
            resourceInputs["dropFragPkt"] = args ? args.dropFragPkt : undefined;
            resourceInputs["dropOnNoPortMatch"] = args ? args.dropOnNoPortMatch : undefined;
            resourceInputs["glid"] = args ? args.glid : undefined;
            resourceInputs["maxRexmitSynPerFlow"] = args ? args.maxRexmitSynPerFlow : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["stateful"] = args ? args.stateful : undefined;
            resourceInputs["synAuth"] = args ? args.synAuth : undefined;
            resourceInputs["synCookie"] = args ? args.synCookie : undefined;
            resourceInputs["tcpResetClient"] = args ? args.tcpResetClient : undefined;
            resourceInputs["tcpResetServer"] = args ? args.tcpResetServer : undefined;
            resourceInputs["tunnelDecap"] = args ? args.tunnelDecap : undefined;
            resourceInputs["tunnelRateLimit"] = args ? args.tunnelRateLimit : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstDefaultL4Type.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstDefaultL4Type resources.
 */
export interface DdosDstDefaultL4TypeState {
    /**
     * DefaultAddressType
     */
    defaultAddressType?: pulumi.Input<string>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    deny?: pulumi.Input<number>;
    /**
     * Disable TCP SYN Authentication
     */
    disableSynAuth?: pulumi.Input<number>;
    /**
     * Drop fragmented packets
     */
    dropFragPkt?: pulumi.Input<number>;
    /**
     * 'disable': disable; 'enable': enable;
     */
    dropOnNoPortMatch?: pulumi.Input<string>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    /**
     * Maximum number of re-transmit SYN per flow. Exceed action set to Drop
     */
    maxRexmitSynPerFlow?: pulumi.Input<number>;
    /**
     * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
     */
    protocol?: pulumi.Input<string>;
    /**
     * Enable stateful tracking of sessions (Default is stateless)
     */
    stateful?: pulumi.Input<number>;
    /**
     * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK;
     * 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
     */
    synAuth?: pulumi.Input<string>;
    /**
     * Enable SYN Cookie
     */
    synCookie?: pulumi.Input<number>;
    /**
     * Send reset to client when rate exceeds or session ages out
     */
    tcpResetClient?: pulumi.Input<number>;
    /**
     * Send reset to server when rate exceeds or session ages out
     */
    tcpResetServer?: pulumi.Input<number>;
    tunnelDecap?: pulumi.Input<inputs.DdosDstDefaultL4TypeTunnelDecap>;
    tunnelRateLimit?: pulumi.Input<inputs.DdosDstDefaultL4TypeTunnelRateLimit>;
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
 * The set of arguments for constructing a DdosDstDefaultL4Type resource.
 */
export interface DdosDstDefaultL4TypeArgs {
    /**
     * DefaultAddressType
     */
    defaultAddressType: pulumi.Input<string>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    deny?: pulumi.Input<number>;
    /**
     * Disable TCP SYN Authentication
     */
    disableSynAuth?: pulumi.Input<number>;
    /**
     * Drop fragmented packets
     */
    dropFragPkt?: pulumi.Input<number>;
    /**
     * 'disable': disable; 'enable': enable;
     */
    dropOnNoPortMatch?: pulumi.Input<string>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    /**
     * Maximum number of re-transmit SYN per flow. Exceed action set to Drop
     */
    maxRexmitSynPerFlow?: pulumi.Input<number>;
    /**
     * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
     */
    protocol: pulumi.Input<string>;
    /**
     * Enable stateful tracking of sessions (Default is stateless)
     */
    stateful?: pulumi.Input<number>;
    /**
     * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK;
     * 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
     */
    synAuth?: pulumi.Input<string>;
    /**
     * Enable SYN Cookie
     */
    synCookie?: pulumi.Input<number>;
    /**
     * Send reset to client when rate exceeds or session ages out
     */
    tcpResetClient?: pulumi.Input<number>;
    /**
     * Send reset to server when rate exceeds or session ages out
     */
    tcpResetServer?: pulumi.Input<number>;
    tunnelDecap?: pulumi.Input<inputs.DdosDstDefaultL4TypeTunnelDecap>;
    tunnelRateLimit?: pulumi.Input<inputs.DdosDstDefaultL4TypeTunnelRateLimit>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
